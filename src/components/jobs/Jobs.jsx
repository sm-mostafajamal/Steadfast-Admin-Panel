import Table from "../table/Table";
import "./style.scss";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="jobs">
      <div className="addJob">
        Add New Job
        <Link to="create-job/new" style={{ textDecoration: "none" }}>
          <button>Add New</button>
        </Link>
      </div>
      <div className="jobTable">
        <Table />
      </div>
    </div>
  );
};

export default Jobs;
