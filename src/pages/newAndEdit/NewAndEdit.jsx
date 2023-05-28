import "./style.scss";
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useMutation, useQueryClient } from "react-query";
import { create, update } from "../../server/jobsServer";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NewJob from "../../components/newJobForm/NewJob";
import Edit from "../../components/editJobForm/Edit";

const NewAndEdit = ({ title }) => {
  const [value, setValue] = useState("");
  const jobs = useSelector((state) => state.jobs.jobLists);
  const id = useParams().id;
  const jobToEdit = jobs.find((j) => j.id === id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const newJobMutation = useMutation(create, {
    onSuccess: (createdPost) => {
      const jobs = queryClient.getQueryData("jobs");
      queryClient.setQueryData("jobs", jobs.concat(createdPost));
    },
  });
  const updateJobMutation = useMutation(update, {
    onSuccess: (updatePost) => {
      queryClient.invalidateQueries("jobs");
      // const jobs = queryClient.getQueryData("jobs");
      // const job = jobs.find((j) => j.id === updatePost.id);
      // dispatch(appendNewJob(updatePost));
      // return queryClient.setQueryData(
      //   "jobs",
      //   jobs.concat({ ...job, ...updatePost })
      // );
    },
  });

  const handleForm = (e) => {
    e.preventDefault();
    const content = {
      title: e.target.title.value,
      type: e.target.type.value,
      location: e.target.location.value,
      desc: value,
    };

    jobToEdit
      ? updateJobMutation.mutate({ id: id, ...content })
      : newJobMutation.mutate(content);

    navigate("/jobs");
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        {jobToEdit ? (
          <Edit
            jobToEdit={jobToEdit}
            handleForm={handleForm}
            setValue={setValue}
          />
        ) : (
          <NewJob handleForm={handleForm} setValue={setValue} />
        )}
      </div>
    </div>
  );
};

export default NewAndEdit;
