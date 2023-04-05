import { useState } from "react";
import "./App.css";
import Ex01 from "./components/Ex01";
import Ex02 from "./components/Ex02";
import Ex03 from "./components/Ex03";
import { MyStyle } from "./contexts/MyStyleContext";
import { MyValue } from "./contexts/MyValueContext";

function App() {
  console.log("App 랜더링");
  const [mycolor, setMycolor] = useState({ color: "red", fontSize: "3rem" });
  const doA = () => {
    setMycolor({ color: "blue", fontSize: "5rem" });
  };
  const [mm, setMm] = useState(0);
  return (
    <div className="container">
      <MyValue.Provider value={(mm, setMm)}>
        <button onClick={doA}>스타일 바꾸는 버튼</button>
        <Ex03 />
        <MyStyle.Provider value={mycolor}>
          <Ex02 />
          <Ex01 />
        </MyStyle.Provider>
      </MyValue.Provider>
    </div>
  );
}

export default App;
