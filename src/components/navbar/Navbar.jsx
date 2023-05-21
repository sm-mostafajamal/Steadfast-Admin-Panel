import {
  Chat,
  DarkModeOutlined,
  FormatListBulleted,
  FullscreenExit,
  Notifications,
  Search,
} from "@mui/icons-material";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." name="" id="" />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlined
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExit className="icon" />
          </div>
          <div className="item">
            <Notifications className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <Chat className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulleted className="icon" />
          </div>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUp7JTYB2Pk20BDxVsmHlGsLYmqrcF9QYtmjiBsU9i5xiYomSlrDeCYUT1R3bPwitC7wE&usqp=CAU"
              alt=""
              className="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
