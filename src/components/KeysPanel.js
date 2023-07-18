import Button from "../UI/Button";
import classes from "./KeysPanel.module.css";
const keys = [
  { value: "C", id: 1, backgroundColor: "#fff", color: "#10002b" },
  { value: "%", id: 2, backgroundColor: "#fff", color: "#10002b" },
  { value: "del", id: 3, backgroundColor: "#fff", color: "#10002b" },
  { value: "/", id: 4, backgroundColor: "#fff", color: "#10002b" },
  { value: 7, id: 5, backgroundColor: "#6c757d", color: "#fff" },
  { value: 8, id: 6, backgroundColor: "#6c757d", color: "#fff" },
  { value: 9, id: 7, backgroundColor: "#6c757d", color: "#fff" },
  { value: "*", id: 8, backgroundColor: "#fff", color: "#10002b" },
  { value: 4, id: 9, backgroundColor: "#6c757d", color: "#fff" },
  { value: 5, id: 10, backgroundColor: "#6c757d", color: "#fff" },
  { value: 6, id: 11, backgroundColor: "#6c757d", color: "#fff" },
  { value: "-", id: 12, backgroundColor: "#fff", color: "#10002b" },
  { value: 1, id: 13, backgroundColor: "#6c757d", color: "#fff" },
  { value: 2, id: 14, backgroundColor: "#6c757d", color: "#fff" },
  { value: 3, id: 15, backgroundColor: "#6c757d", color: "#fff" },
  { value: "+", id: 16, backgroundColor: "#fff", color: "#10002b" },
  { value: "00", id: 17, backgroundColor: "#6c757d", color: "#fff" },
  { value: 0, id: 18, backgroundColor: "#6c757d", color: "#fff" },
  { value: ".", id: 19, backgroundColor: "#6c757d", color: "#fff" },
  { value: "=", id: 20, backgroundColor: "#fff", color: "#10002b" },
];
const KeysPanel = (props) => {
  const keyPad = keys.map((key) => {
    return (
      <Button
        key={key.id}
        value={key.value}
        backgroundColor={key.backgroundColor}
        color={key.color}
        id={key.id}
        clickHandler={props.clickHandler}
      />
    );
  });
  return <div className={classes.body}>{keyPad}</div>;
};
export default KeysPanel;
