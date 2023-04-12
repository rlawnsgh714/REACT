import { useCallback, useEffect, useState } from "react";
import "./App.css";
import StopWatch from "./components/stopwatch";
import SubApp from "./components/SubApp";

function App() {
  const [toggle, setToggle] = useState(false);

  const doA = useCallback(() => {
    const a = 10;
  }, []);

  return (
    <div className="App">
      <SubApp doA={doA} />
      <h1>Timer</h1>
      {toggle && <StopWatch />}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        타이머 컴포넌트
      </button>
    </div>
  );
}

export default App;
