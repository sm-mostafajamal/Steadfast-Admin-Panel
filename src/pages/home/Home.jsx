import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./style.scss";

const Home = ({ setUser }) => {
  return (
    <div className="home">
      <Sidebar setUser={setUser} />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="job" />
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
