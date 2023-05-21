import "./style.scss";
import {
  Add,
  CircleNotificationsOutlined,
  ContactMail,
  Dashboard,
  LogoutOutlined,
  PeopleAltOutlined,
  Work,
} from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Panel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Dashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">MENU</p>
          <Link to="/jobs" style={{ textDecoration: "none" }}>
            <li>
              <Work className="icon" />
              <span>Jobs</span>
            </li>
          </Link>
          <Link to="/jobs/post" style={{ textDecoration: "none" }}>
            <li>
              <Add className="icon" />
              <span>Create Job</span>
            </li>
          </Link>
          <li>
            <PeopleAltOutlined className="icon" />
            <span>Applied Form</span>
          </li>
          <li>
            <ContactMail className="icon" />
            <span>Contact Form</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <CircleNotificationsOutlined className="icon" />
            {/* <NotificationsOutlinedIcon /> */}
            <span>Notifications</span>
          </li>
          <li>
            <LogoutOutlined className="icon" />
            <span style={{ fontSize: "18px", color: "black" }}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
