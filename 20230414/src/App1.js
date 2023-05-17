import { useState } from "react";
import Child1 from "./components/Child1";

const App1 = () => {
  const [cnt, setCnt] = useState(0);

  function doBig() {
    setFontSize(fontSize + 1);
    const html = document.documentElement;

    const htmlStyle = window.getComputedStyle(html);
    html.fontSize = parseInt(htmlStyle.fontSize) + 1 + "px";

    const buttons = document.querySelectorAll("button");
    Array.from(buttons).map(function (btn) {
      const btnStyle = window.getComputedStyle(btn);

      btn.fontSize = parseInt(btnStyle.fontSize) + 1 + "px";
      return null;
    });
  }

  function doSmall() {}

  return (
    <div>
      <h1>APP cnt = {cnt}</h1>
      <button onClick={doBig}>크게</button>
      <button onClick={doSmall}>작게</button>
      <p>대충 말 이것저것</p>
      <label htmlFor="">아이디</label>
      <input type="text" />
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        버튼
      </button>
      <Child1 cnt={cnt} />
      <p></p>
    </div>
  );
};
