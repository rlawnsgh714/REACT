import { useEffect, useMemo, useState } from "react";
import "./App.css";

const App1 = () => {
  const [a, setA] = useState(0);
  const bb = useMemo(() => {
    return { b: 10 };
  }, []);

  useEffect(() => {
    console.log("effect 실행");
  }, [bb]);
  return (
    <>
      <h1>App1</h1>
      <h3>a = {a}</h3>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        버튼
      </button>
    </>
  );
};

export default App1;
