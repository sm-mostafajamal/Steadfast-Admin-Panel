import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./style.scss";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { LocationOnOutlined, WorkOutlineOutlined } from "@mui/icons-material";

const Single = () => {
  const jobs = useSelector(({ jobs }) => jobs.jobLists);
  const id = useParams().id;
  const job = jobs.find((job) => job.id == id);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="jobContainer">
          <h1>{job.title}</h1>
          <span>
            <WorkOutlineOutlined style={{ paddingRight: "10px" }} />
            {job.type}
          </span>
          <span>
            <LocationOnOutlined style={{ paddingRight: "10px" }} />
            {job.location}
          </span>
          <article>{parse(job.desc)}</article>
        </div>
      </div>
    </div>
  );
};

export default Single;
