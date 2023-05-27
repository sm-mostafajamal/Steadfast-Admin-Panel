import ReactQuill from "react-quill";

const Edit = ({ jobToEdit, setValue, handleForm }) => {
  return (
    <div>
      <form action="POST" onSubmit={handleForm} className="editor">
        <input
          name="title"
          defaultValue={jobToEdit.title}
          placeholder="Job Title"
        />
        <input
          name="type"
          defaultValue={jobToEdit.type}
          placeholder="Job Type"
        />
        <input
          name="location"
          defaultValue={jobToEdit.location}
          placeholder="Job Location"
        />
        <ReactQuill
          theme="snow"
          placeholder="Job Description"
          defaultValue={jobToEdit.desc}
          onChange={(e) => setValue(e)}
        />
        <button className="postBtn">Confirm</button>
      </form>
    </div>
  );
};

export default Edit;
