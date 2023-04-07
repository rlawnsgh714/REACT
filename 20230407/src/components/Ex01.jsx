import { useEffect } from "react";

const Ex01 = ({ a }) => {
  useEffect(() => {
    console.log("useEffect");
  }, [a]);
  console.log("ex01 랜더링");
  return (
    <>
      <h1>Ex01 a={a}</h1>
    </>
  );
};

export default Ex01;
