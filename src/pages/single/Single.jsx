import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./style.scss";
import Parser from "html-react-parser";
import { useSelector } from "react-redux";
import { LocationOnOutlined, WorkOutlineOutlined } from "@mui/icons-material";

const Single = () => {
  const jobs = useSelector(({ jobs }) => jobs.jobLists);

  const id = Number(useParams().jobId);
  const job = jobs.find((job) => job.id === id);

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
          <article>{Parser(job.desc)}</article>
          {/* {console.log(typeof job.jobDesc) } */}
          {/* <div className="left">
            <button className="editButton">Edit</button>
            <h1 className="title">Information</h1>
            <div className="item"> */}
          {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-0.png"
              }
              alt=""
            />
          </div> */}
          {/* <img
                src="https://avatars.githubusercontent.com/u/68806424?v=4"
                alt=""
                className="itemImg"
              /> */}
          {/* <div className="details">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Single;
