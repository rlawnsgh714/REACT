import logo from "./logo.svg";
import "./App.css";
import Child from "./components/Child";
import { useState } from "react";

function App() {
  const [appStyle, setAppStyle] = useState({
    backgroundColor: "black",
    padding: "1rem",
  });
  function changeStyle() {
    setAppStyle({
      backgroundColor: appStyle.backgroundColor === "black" ? "blue" : "black",
      padding: "1rem",
    });
  }

  const doA = () => {
    return { backgroundColor: "red", color: "#e9e9e9", paading: "1rem" };
  };
  return (
    <div className="App" style={appStyle}>
      <Child doA={doA} />
      <button onClick={changeStyle}></button>
    </div>
  );
}

export default App;
