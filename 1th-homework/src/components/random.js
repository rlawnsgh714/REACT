import React from "react";

const Random = () => {
  const getNum = () => {
    const num = parseInt(Math.random() * 255);
    alert(num);
  };

  return (
    <div>
      <button onClick={getNum}>버튼</button>
    </div>
  );
};

export default Random;
