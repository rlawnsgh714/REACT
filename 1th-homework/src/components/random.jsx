import React, { useState } from "react";

const Random = () => {
  const [number, setNumber] = useState(0);
  const getNum = () => {
    const num = parseInt(Math.random() * 255);
    setNumber(num);
  };

  return (
    <div className="problem">
      <h1>1. 난수를 생성해서 화면에 출력해보자.</h1>
      <button onClick={getNum}>난수 생성 버튼</button>
      <h1>{number}</h1>
    </div>
  );
};

export default Random;
