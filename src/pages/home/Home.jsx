import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
        </div>
        <div className="tables">
          <div className="listContainer">
            <div className="listTitle">Latest Applied Candidates</div>
            {/* <List /> */}
          </div>
          {/* <div className="listContainer">
            <div className="listTitle">Latest Contacts</div>
            <List />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
