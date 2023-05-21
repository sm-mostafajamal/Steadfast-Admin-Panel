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
  const newJobPost = useMutation(newPost, {
    onSuccess: (newPost) => {
      const jobs = queryClient.getQueryData("jobs");
      queryClient.setQueryData("jobs", jobs.concat(newPost));
    },
  });
  const [value, setValue] = useState({
    title: "",
    type: "",
    location: "",
    desc: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    newJobPost.mutate({ ...value });
    setValue({
      title: "",
      type: "",
      location: "",
      desc: "",
    });
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
            value={value.title}
            placeholder="Job Title"
            onChange={(e) =>
              setValue({ ...value, [e.target.name]: e.target.value })
            }
          />
          <input
            name="type"
            placeholder="Job Type"
            value={value.type}
            onChange={(e) =>
              setValue({ ...value, [e.target.name]: e.target.value })
            }
          />
          <input
            name="location"
            placeholder="Job Location"
            value={value.location}
            onChange={(e) =>
              setValue({ ...value, [e.target.name]: e.target.value })
            }
          />
          <ReactQuill
            theme="snow"
            placeholder="Job Description"
            value={value.desc}
            onChange={(e) => setValue({ ...value, desc: e })}
          />
          <button className="postBtn">Post</button>
        </form>
      </div>
    </div>
  );
};

export default New;
