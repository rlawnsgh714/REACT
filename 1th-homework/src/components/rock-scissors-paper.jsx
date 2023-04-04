import React, { useState } from "react";
let eq = 0,
  win = 0,
  lose = 0;
const RockSissorsPaper = () => {
  const [info, setInfo] = useState("0승 0패 0무");
  const [result, setResult] = useState({
    user: "유저 : 0",
    com: "컴퓨터 : 0",
  });
  const [status, setStatus] = useState("");
  let user;
  let com;
  const doGame = (e) => {
    const evalue = e.target.innerHTML;
    // 가위 0 바위 1 보 2
    if (evalue === "가위") user = 0;
    else if (evalue === "바위") user = 1;
    else if (evalue === "보") user = 2;
    com = parseInt(Math.random() * 3);
    if (user === 0 && com === 0) eqCommand();
    else if (user === 0 && com === 1) loseCommand();
    else if (user === 0 && com === 2) winCommand();
    if (user === 1 && com === 1) eqCommand();
    else if (user === 1 && com === 2) loseCommand();
    else if (user === 1 && com === 0) winCommand();
    if (user === 2 && com === 2) eqCommand();
    else if (user === 2 && com === 0) loseCommand();
    else if (user === 2 && com === 1) winCommand();

    setInfo(`${win}승 ${lose}패 ${eq}무`);
    setResult({
      user: "유저 : " + converter(user),
      com: "컴퓨터 : " + converter(com),
    });
  };

  const eqCommand = () => {
    eq++;
    setStatus("무승부입니다");
  };

  const loseCommand = () => {
    lose++;
    setStatus("졌습니다 리셋버튼을 눌러주세요");
  };

  const winCommand = () => {
    win++;
    setStatus("이겼습니다");
  };

  const converter = (num) => {
    if (num === 0) {
      return "가위";
    } else if (num === 1) {
      return "바위";
    } else if (num === 2) {
      return "보";
    } else {
      return "";
    }
  };

  const reset = (e) => {
    eq = 0;
    win = 0;
    lose = 0;
    setInfo(`${win}승 ${lose}패 ${eq}무`);
    setResult({
      user: "유저 : " + converter(user),
      com: "컴퓨터 : " + converter(com),
    });
    setStatus("");
  };

  return (
    <div className="problem">
      <h1>2. 가위바위보 게임을 만들어보자</h1>

      <button onClick={doGame}>가위</button>
      <button onClick={doGame}>바위</button>
      <button onClick={doGame}>보</button>
      <button onClick={reset}>리셋</button>
      <h2>{info}</h2>
      <h2>
        {result.user}
        <br /> {result.com}
      </h2>
      <h2>{status}</h2>
    </div>
  );
};

export default RockSissorsPaper;
