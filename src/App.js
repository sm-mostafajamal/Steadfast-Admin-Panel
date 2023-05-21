import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Lists from "./pages/lists/Lists";
import Single from "./pages/single/Single";
// import { userInputs, productInputs } from "./formSource";
import "./pages/style/dark.scss";
import "./pages/style/light.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { getAllJobs } from "./server/jobsServer";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { appendJob } from "./redux/jobReducer";

function App() {
  const dispatch = useDispatch();
  const { state } = useContext(DarkModeContext);
  const { isLoading, data } = useQuery("jobs", getAllJobs);
  useEffect(() => {
    if (data) {
      dispatch(appendJob(data));
    }
  }, [data, dispatch]);

  return (
    <div className={state.darkMode ? "app dark" : "app light"}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/login" />}> */}
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="jobs">
            <Route index element={<Lists />} />
            <Route path="post" element={<New title="Post New Job" />} />
            <Route path=":jobId" element={<Single />} />
          </Route>
          <Route path="applied">
            <Route index element={<Lists />} />
            <Route path=":formId" element={<Single />} />
          </Route>
          <Route path="contacts">
            <Route index element={<Lists />} />
            <Route path=":formId" element={<Single />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
