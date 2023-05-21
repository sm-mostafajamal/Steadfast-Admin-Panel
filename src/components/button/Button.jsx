import "./style.scss";

const Button = ({ name }) => {
  return (
    <div>
      <button
        className="button"
        style={
          name === "Delete"
            ? { backgroundColor: "red" }
            : { backgroundColor: "teal" }
        }
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
