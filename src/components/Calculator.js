import { useState } from "react";
import DisplayPanel from "./DisplayPanel";
import KeysPanel from "./KeysPanel";
const Calculator = () => {
  const operators = ["+", "-", "/", "*", "%"];
  const [string, setString] = useState("");
  const [intermediateResult, setIntermediateResult] = useState(0);
  const clickHandler = (value) => {
    try {
      if (string === "Infinity" || string === "NaN") {
        if (value === "00") {
          const temp = "0";
          setString(temp);
          setIntermediateResult(String(eval(temp)));
          return;
        }
        if (!isNaN(value)) {
          setString(value);
          setIntermediateResult(value);
          return;
        } else {
          setString("");
          setIntermediateResult("");
          return;
        }
        return;
      }
      if (
        value === "00" &&
        (string === "" || operators.includes(string[string.length - 1]))
      ) {
        const temp = string + "0";
        setString(temp);
        setIntermediateResult(String(eval(temp)));
        return;
      }
      if (value === "=") {
        setString(String(eval(string)));
        setIntermediateResult("");
        return;
      }
      if (value === ".") {
        if (string === "") {
          setString("0.");
          setIntermediateResult(0);
          return;
        }
        if (operators.includes(string[string.length - 1])) {
          const temp = string + "0.";
          setString(temp);
          setIntermediateResult(String(eval(temp)));
          return;
        } else {
          let i = 0,
            n = string.length;
          while (!operators.includes(string[n - i - 1]) && n - i - 1 >= 0) {
            if (string[n - i - 1] === ".") {
              setString((prev) => prev);
              setIntermediateResult((prev) => String(eval(prev)));
              return;
            }
            i++;
          }
        }
      }
      if (value === "C") {
        setString("");
        setIntermediateResult(0);
        return;
      }
      if (value === "del") {
        if (string === "Infinity" || string === "NaN") {
          setString("");
          setIntermediateResult("");
          return;
        }
        if (string.length === 0) return;
        const temp = string.substring(0, string.length - 1);
        setString(temp);
        setIntermediateResult(temp === "" ? 0 : String(eval(temp)));
        return;
      }
      if (
        operators.includes(value) &&
        (string === "" || operators.includes(string[string.length - 1]))
      ) {
        return;
      }
      if (!isNaN(value)) {
        const temp = string + value;
        setString(temp);
        setIntermediateResult(String(eval(temp)));
        return;
      }

      setString((prev) => (prev += value));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <DisplayPanel string={string} intermediateResult={intermediateResult} />
      <KeysPanel clickHandler={clickHandler} />
    </div>
  );
};
export default Calculator;
