import { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [oper, setOper] = useState("false");
  useEffect(() => {
    console.log("useEffect 실행");
    if (oper === "true") {
      const timeInterval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(timeInterval);
    }
  }, [oper]);
  return (
    <div className="App">
      <h1>2. 스톰워치 만들기</h1>
      <h2>
        Timer <div>{time}초</div>
      </h2>

      <button
        onClick={() => {
          setOper("true");
        }}
      >
        시작
      </button>
      <button
        onClick={() => {
          setOper("false");
        }}
      >
        멈춤
      </button>
      <button
        onClick={() => {
          setOper("false");
          setTime(0);
        }}
      >
        리셋
      </button>
    </div>
  );
};

export default StopWatch;
