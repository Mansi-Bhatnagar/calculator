import classes from "./Button.module.css";
const Button = (props) => {
  const { value, backgroundColor, color, clickHandler } = props;
  return (
    <button
      className={classes.btn}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        opacity: backgroundColor === "#6c757d" ? 0.9 : 1,
      }}
      onClick={() => clickHandler(value)}
    >
      {value}
    </button>
  );
};
export default Button;
