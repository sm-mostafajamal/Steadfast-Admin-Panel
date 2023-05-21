import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Lists from "./pages/lists/Lists";
import Single from "./pages/single/Single";
import { userInputs, productInputs } from "./formSource";
import "./pages/style/dark.scss";
import "./pages/style/light.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  const { state } = useContext(DarkModeContext);

  return (
    <div className={state.darkMode ? "app dark" : "app light"}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/login" />}> */}
          <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="users">
            <Route index element={<Lists />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<Lists />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
