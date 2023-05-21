import {
  AccountBalanceWallet,
  KeyboardArrowUp,
  MonetizationOn,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./style.scss";

const Widget = ({ type }) => {
  let data;
  const tempData = {
    amount: 100,
    per: 20,
  };
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutline
            className="icon"
            style={{ color: "#e85a4f", backgroundColor: "#e8594f57" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{ color: "#f1b502", backgroundColor: "#f1b50242" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOn
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.315)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWallet
            className="icon"
            style={{
              color: "brown",
              backgroundColor: "rgba(165, 42, 42, 0.425)",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && "$"} {tempData.amount}
        </div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          {tempData.per}
          <KeyboardArrowUp />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
