import "./style.scss";
import { useSelector } from "react-redux";

const Widget = ({ type }) => {
  const { jobLists } = useSelector((state) => state.jobs);

  return (
    <div className="widget">
      <div className="left">
        <div className="title">Total Jobs Open</div>
        <div className="counter">{jobLists.length}</div>
        {/* <div className="link">{data.link}</div> */}
      </div>
      <div className="right">
        <div className="percentage positive">{/* <KeyboardArrowUp /> */}</div>
      </div>
    </div>
  );
};

export default Widget;
