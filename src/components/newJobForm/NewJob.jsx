import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.scss";
const NewJob = ({ handleForm, setValue }) => {
  return (
    <div>
      <form action="POST" onSubmit={handleForm} className="editor">
        <input name="title" placeholder="Job Title" required />
        <input name="compensation" placeholder="Compensation" required />
        <input name="location" placeholder="Location" required />
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
