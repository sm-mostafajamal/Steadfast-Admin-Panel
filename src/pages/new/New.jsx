import "./style.scss";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useMutation, useQueryClient } from "react-query";
import { newPost } from "../../server/jobsServer";

const New = ({ title }) => {
  const queryClient = useQueryClient();
  const [value, setValue] = useState("");

  const newJobPost = useMutation(newPost, {
    onSuccess: (newPost) => {
      const jobs = queryClient.getQueryData("jobs");
      queryClient.setQueryData("jobs", jobs.concat(newPost));
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
    newJobPost.mutate(content);
    e.target.title.value = "";
    e.target.type.value = "";
    e.target.location.value = "";
    setValue("");
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
          <input name="title" placeholder="Job Title" />
          <input name="type" placeholder="Job Type" />
          <input name="location" placeholder="Job Location" />
          <ReactQuill
            theme="snow"
            placeholder="Job Description"
            value={value}
            onChange={(e) => setValue(e)}
          />
          <button className="postBtn">Post</button>
        </form>
      </div>
    </div>
  );
};

export default New;
