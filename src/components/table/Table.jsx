import { useSelector } from "react-redux";

const Table = () => {
  const jobs = useSelector(({ jobs }) => jobs);
  return (
    <>
      <table cellSpacing="0" className="table">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Job Title</th>
            <th style={{ width: "30%" }}>Location</th>
            <th style={{ width: "20%" }}>Job Type</th>
            <th style={{ width: "20%" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.title}>
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.jobType}</td>
              <td>test</td>
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
