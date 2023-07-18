import classes from "./DisplayPanel.module.css";
const DisplayPanel = (props) => {
  return (
    <div className={classes.body}>
      <div className={classes.input}>{props.string}</div>
      <div className={classes.result}>{props.intermediateResult}</div>
    </div>
  );
};
export default DisplayPanel;
