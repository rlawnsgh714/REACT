import { useRef } from "react";

const Ex02 = () => {
  const ary = [];
  const aR = useRef(0);
  const bR = useRef(0);
  const cR = useRef(0);
  const doA = () => {
    ary.push(aR.current.value);
    ary.push(bR.current.value);
    ary.push(cR.current.value);
    console.log(ary.join(","));
  };
  return (
    <div className="App">
      <label>aR</label>
      <input type="text" ref={aR}></input>
      <input type="text" ref={aR}></input>
      <input type="text"></input>
      <p>{doA()}</p>
    </div>
  );
};

export default Ex02;
