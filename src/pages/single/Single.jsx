import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/List";
import "./style.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <button className="editButton">Edit</button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://avatars.githubusercontent.com/u/68806424?v=4"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">SM. Mostafa Jamal</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">sm.mj@outlook.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+880 185 *** ****</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Halishahar, Chittagong</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending Last 6 Months History" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transections</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
