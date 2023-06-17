import { useState } from "react";
import "./style.scss";
import { login } from "../../server/loginServer";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login({ username, password });
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log("wrong Credential");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Login;
