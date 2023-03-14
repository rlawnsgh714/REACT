import React from "react";

const Random = () => {
  const randomNum = Math.floor(Math.random() * 100);
  return (
    <div>
      <h1>{randomNum}</h1>
    </div>
  );
};

export default Random;
