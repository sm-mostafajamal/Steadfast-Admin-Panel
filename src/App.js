import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewAndEdit from "./pages/newAndEdit/NewAndEdit";
import Lists from "./pages/lists/Lists";
import Single from "./pages/single/Single";
// import { userInputs, productInputs } from "./formSource";
import "./pages/style/dark.scss";
import "./pages/style/light.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { getAllJobs } from "./server/jobsServer";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { appendJob, setPageNumber } from "./redux/jobReducer";
import { useState } from "react";

function App() {
  const { currentPageNumber } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const { state } = useContext(DarkModeContext);
  const { data } = useQuery("jobs", getAllJobs, {
    refetchOnWindowFocus: false,
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (data) {
      dispatch(appendJob(data));
      dispatch(setPageNumber(currentPageNumber));
    }
  }, [data, dispatch, currentPageNumber]);

  return (
    <div className={state.darkMode ? "app dark" : "app light"}>
      <BrowserRouter>
        <Routes>
          {!user ? (
            <>
              <Route path="/" element={<Navigate to="login" replace />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
            </>
          ) : (
            <>
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route index element={<Home />} />
              <Route path="jobs">
                <Route index element={<Lists />} />
                <Route
                  path="post"
                  element={<NewAndEdit title="Post New Job" />}
                />
                <Route
                  path="post/:id"
                  element={<NewAndEdit title="Edit Job Post" />}
                />
                <Route path=":id" element={<Single />} />
              </Route>
              <Route path="applied">
                <Route index element={<Lists />} />
                <Route path=":formId" element={<Single />} />
              </Route>
              <Route path="contacts">
                <Route index element={<Lists />} />
                <Route path=":formId" element={<Single />} />
              </Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
