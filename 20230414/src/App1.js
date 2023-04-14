import { useState } from "react";
import Child1 from "./components/Child1";

const App1 = () => {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
      <h1>APP cnt = {cnt}</h1>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        버튼
      </button>
      <Child1 cnt={cnt} />
    </div>
  );
};
