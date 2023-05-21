import "./style.scss";
import {
  AccountBoxOutlined,
  CircleNotificationsOutlined,
  CreditCardOutlined,
  Dashboard,
  DeliveryDiningOutlined,
  Inventory2Outlined,
  LogoutOutlined,
  MonitorHeartOutlined,
  PeopleAltOutlined,
  SettingsOutlined,
  ShowChart,
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
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltOutlined className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Inventory2Outlined className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardOutlined className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningOutlined className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <ShowChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsOutlined className="icon" />
            {/* <NotificationsOutlinedIcon /> */}
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <MonitorHeartOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <SettingsOutlined className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlined className="icon" />
            <span>Logout</span>
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
