import { useMemo, useState } from "react";
import "./App.css";
// import Ex01 from "./components/Ex01";
// import Ex02 from "./components/Ex02";

function doA(a) {
  for (let i = 0; i < 100000; i++) {}
  console.log("오래 걸리는 계산");
  return a + 1;
}

function doB(b) {
  console.log("짧게 걸리는 계산");
  return b + 1;
}

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const aresult = useMemo(() => {
    return doA(a);
  }, [a]);
  const bresult = useMemo(() => {
    return doB(b);
  }, []);

  return (
    <div className="App">
      <h1>
        a = {a} doA = {aresult}
      </h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        A버튼
      </button>

      <h1>
        b = {b} doB = {bresult}
      </h1>
      <button
        onClick={() => {
          setB(b + 1);
        }}
      >
        A버튼
      </button>

      {/* {a === 0 ? <Ex02 /> : ""} */}
      {/* // <Ex01 a={a} />  */}
    </div>
  );
}

export default App;
