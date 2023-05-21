import Jobs from "../../components/jobs/Jobs";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./style.scss";

const Lists = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Jobs />
      </div>
    </div>
  );
};

export default Lists;
