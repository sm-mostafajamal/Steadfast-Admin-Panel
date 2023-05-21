import { useSelector } from "react-redux";
import Button from "../button/Button";
import "./style.scss";
import { Link } from "react-router-dom";
const Table = () => {
  const jobs = useSelector((jobs) => jobs.jobs);

  return (
    <>
      <table cellSpacing="0" className="table">
        <thead>
          <tr className="head">
            <th style={{ width: "30%" }}>Job Title</th>
            <th style={{ width: "30%" }}>Location</th>
            <th style={{ width: "20%" }}>Job Type</th>
            <th style={{ width: "20%" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr className="body" key={job.id}>
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.type}</td>
              <td className="action">
                <Link to={`/jobs/${job.id}`}>
                  <Button name="View" />
                </Link>
                <Button name="Delete" />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Footer</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
export default Table;
