// import { useState } from "react";
import "./style.scss";

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPasword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button onClick={handleClick}>Sign in</button>
    </div>
  );
};

export default Login;
