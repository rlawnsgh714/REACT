import React, { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");
  const result = (event) => {
    let day = "";
    let hour = "";
    let min = "";
    let sec = "";
    let number = parseInt(event.target.value);

    if (number >= 86400) {
      day = parseInt(number / 86400);
      hour = parseInt((number % 86400) / 3600);
      min = parseInt(((number % 86400) % 3600) / 60);
      sec = parseInt(((number % 86400) % 3600) % 60);
      setTime(day + "일 " + hour + "시간 " + min + "분 " + sec + "초");
    } else if (number >= 3600) {
      hour = parseInt(number / 3600);
      min = parseInt((number % 3600) / 60);
      sec = (number % 3600) % 60;
      setTime(hour + "시간 " + min + "분 " + sec + "초");
    } else if (number >= 60) {
      min = parseInt(number / 60);
      sec = number % 60;
      setTime(min + "분 " + sec + "초");
    } else if (number >= 0) {
      sec = number % 60;
      setTime(sec + "초");
    }
  };
  return (
    <div className="problem">
      <h1>3. 사용자에게 숫자를 입력받아 시 분 초 출력</h1>
      <h3>시간을 입력해주세요</h3>
      <input type="number" onChange={result} />
      <h3>{time}</h3>
    </div>
  );
};

export default Clock;
