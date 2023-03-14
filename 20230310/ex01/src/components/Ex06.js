import React from "react";

const Ex06 = () => {
  const format = (num) => {
    const m = typeof num == "number" ? m.toLocaleString() : "숫자입력";
    return m;
  };
  return (
    <div>
      <h1>{`m = ${format(3000)}`}</h1>
      <h1>{`m = ${format("3000")}`}</h1>
    </div>
  );
};

export default Ex06;
