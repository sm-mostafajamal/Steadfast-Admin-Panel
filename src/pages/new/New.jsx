import "./style.scss";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useMutation, useQueryClient } from "react-query";
import { create, update } from "../../server/jobsServer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { appendJob, appendNewJob } from "../../redux/jobReducer";

const New = ({ title }) => {
  const jobs = useSelector((state) => state.jobs.jobLists);
  const id = Number(useParams().id);
  const jobToEdit = jobs.find((j) => j.id === id);
  const queryClient = useQueryClient();
  const [value, setValue] = useState("");
  const navigate = useNavigate();
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
      id: id,
      title: e.target.title.value,
      type: e.target.type.value,
      location: e.target.location.value,
      desc: value,
    };

    jobToEdit
      ? updateJobMutation.mutate(content)
      : newJobMutation.mutate(content);

    navigate("/jobs");
    setValue("");
    e.target.title.value = "";
    e.target.type.value = "";
    e.target.location.value = "";
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <form action="POST" onSubmit={handleForm} className="editor">
          <input
            name="title"
            defaultValue={jobToEdit ? jobToEdit.title : ""}
            placeholder="Job Title"
          />
          <input
            name="type"
            defaultValue={jobToEdit ? jobToEdit.type : ""}
            placeholder="Job Type"
          />
          <input
            name="location"
            defaultValue={jobToEdit ? jobToEdit.location : ""}
            placeholder="Job Location"
          />
          <ReactQuill
            theme="snow"
            placeholder="Job Description"
            defaultValue={jobToEdit ? jobToEdit.desc : value}
            onChange={(e) => setValue(e)}
          />
          <button className="postBtn">{jobToEdit ? "Confirm" : "Post"}</button>
        </form>
      </div>
    </div>
  );
};

export default New;
