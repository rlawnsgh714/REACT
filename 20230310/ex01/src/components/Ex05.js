import React from "react";

const Ex05 = () => {
  const names = ["tkzkdh", "누시다", "고토"];
  names.map((name) => {
    console.log(`name = ${name}`);
  });
  const names1 = names.filter((name) => {
    return name !== "사키오키";
  });
  return (
    <div>
      {names.map((name) => {
        return <h1>{name}</h1>;
      })}
    </div>
  );
};

export default Ex05;
