import { useSelector } from "react-redux";
import Button from "../button/Button";
import "./style.scss";
import { Link } from "react-router-dom";
import { deletePost } from "../../server/jobsServer";
import { useMutation, useQueryClient } from "react-query";
const Table = () => {
  const jobs = useSelector(({ jobs }) => jobs.jobLists);
  // console.log(jobs);

  const queryClient = useQueryClient();
  const deletePostMutate = useMutation(deletePost, {
    onSuccess: () => {
      // const jobs = queryClient.getQueriesData("jobs");
      // const updatedJobLists = jobs.filter((j) => j.id !== id);
      // queryClient.setQueryData(["jobs", id], updatedJobLists);
      queryClient.invalidateQueries("jobs");
      // return jobs;
    },
  });
  // const handleClick = (job) => {
  //   deletePost(job.id);

  // };
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
            <td>Footer</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
export default Table;
