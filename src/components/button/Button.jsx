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
            : name === "View"
            ? { backgroundColor: "teal" }
            : { backgroundColor: "#f1b502" }
        }
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
