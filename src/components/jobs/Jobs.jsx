import Table from "../table/Table";
import "./style.scss";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="jobs">
      <div className="addJob">
        Post New Job
        <Link to="/jobs/post" style={{ textDecoration: "none" }}>
          <button>Post</button>
        </Link>
      </div>
      <div className="jobTable">
        <Table />
      </div>
    </div>
  );
};

export default Jobs;
