import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Edit = ({ jobToEdit, setValue, handleForm }) => {
  return (
    <div>
      <form action="POST" onSubmit={handleForm} className="editor">
        <input
          name="title"
          defaultValue={jobToEdit.title}
          placeholder="Job Title"
          required
        />
        <input
          name="type"
          defaultValue={jobToEdit.type}
          placeholder="Job Type"
          required
        />
        <input
          name="location"
          defaultValue={jobToEdit.location}
          placeholder="Job Location"
          required
        />
        <ReactQuill
          theme="snow"
          placeholder="Job Description"
          defaultValue={jobToEdit.desc}
          onChange={(e) => setValue(e)}
          required
        />
        <button className="postBtn">Confirm</button>
      </form>
    </div>
  );
};

export default Edit;
