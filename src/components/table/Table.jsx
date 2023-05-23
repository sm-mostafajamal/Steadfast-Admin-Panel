import { useSelector } from "react-redux";
import Button from "../button/Button";
import "./style.scss";
import { Link } from "react-router-dom";
import { deletePost } from "../../server/jobsServer";
import { useMutation, useQueryClient } from "react-query";
import Pagination from "../pagination/Pagination";

const Table = () => {
  const { jobsToShow } = useSelector((state) => state.jobs);

  const queryClient = useQueryClient();
  const deletePostMutate = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("jobs");
    },
  });

  return (
    <>
      <table cellSpacing="0" frame="void" rules="rows" className="table">
        <thead>
          <tr className="head">
            <th style={{ width: "30%" }}>Job Title</th>
            <th style={{ width: "30%" }}>Location</th>
            <th style={{ width: "20%" }}>Job Type</th>
            <th style={{ width: "20%" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobsToShow.map((job) => (
            <tr className="body" key={job.id}>
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.type}</td>
              <td className="action">
                <Link to={`/jobs/${job.id}`}>
                  <Button name="View" />
                </Link>
                <Button
                  onClick={() => deletePostMutate.mutate(job.id)}
                  name="Delete"
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="footer">
              <Pagination />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
export default Table;
