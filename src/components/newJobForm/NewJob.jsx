import ReactQuill from "react-quill";

const NewJob = ({ handleForm, setValue }) => {
  return (
    <div>
      <form action="POST" onSubmit={handleForm} className="editor">
        <input name="title" placeholder="Job Title" />
        <input name="type" placeholder="Job Type" />
        <input name="location" placeholder="Job Location" />
        <ReactQuill
          theme="snow"
          placeholder="Job Description"
          onChange={(e) => setValue(e)}
        />
        <button className="postBtn">Post</button>
      </form>
    </div>
  );
};

export default NewJob;
