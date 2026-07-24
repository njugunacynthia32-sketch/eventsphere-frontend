import "../../styles/css/Button.css";
function Button({ text }) {
  return (
    <button className="primary-btn">
      {text}
    </button>
  );
}

export default Button;