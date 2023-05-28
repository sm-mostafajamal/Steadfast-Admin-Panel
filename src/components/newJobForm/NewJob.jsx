import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewJob = ({ handleForm, setValue }) => {
  return (
    <div>
      <form action="POST" onSubmit={handleForm} className="editor">
        <input name="title" placeholder="Job Title" required />
        <input name="type" placeholder="Job Type" required />
        <input name="location" placeholder="Job Location" required />
        <ReactQuill
          theme="snow"
          placeholder="Job Description"
          onChange={(e) => setValue(e)}
          required
        />
        <button className="postBtn">Post</button>
      </form>
    </div>
  );
};

export default NewJob;
