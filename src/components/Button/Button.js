import "./Button.css";

const Button = ({ children, varient = "primary", ...rest }) => {
  return (
    <button
      className={`btn ${
        varient === "primary" ? "btn-primary" : "btn-secondary"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
