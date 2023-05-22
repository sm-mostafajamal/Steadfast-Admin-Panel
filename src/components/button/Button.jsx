import "./style.scss";

const Button = ({ name, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
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
