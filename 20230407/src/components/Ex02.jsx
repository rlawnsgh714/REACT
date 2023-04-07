import { useEffect } from "react";

const Ex02 = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <h1>컴포넌트입니다</h1>
    </>
  );
};

export default Ex02;
