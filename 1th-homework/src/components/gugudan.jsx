import React, { useState } from "react";

function Gugudan() {
  const [startNum, setStartNum] = useState(0);
  const [endNum, setEndNum] = useState(0);
  const [gugudanTable, setGugudanTable] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startNum <= 0 || endNum <= 0) {
      setGugudanTable("0보다 큰 수가 들어가야 합니다");
    }

    const table = [];
    for (let i = startNum; i <= endNum; i++) {
      for (let j = 1; j <= 9; j++) {
        if (j === 1) {
          table.push(<h4>{i}단</h4>);
        }
        table.push(
          <div>
            <p>
              {i} x {j} = {i * j}
            </p>
          </div>
        );
        if (j === 9) {
          table.push(<br></br>);
        }
      }
      setGugudanTable(table);
    }
  };

  return (
    <div className="problem">
      <h1>4. 두개의 정수를 입력받아 구구단 출력</h1>
      <form onSubmit={handleSubmit}>
        <label>
          시작 단:
          <input
            type="number"
            value={startNum}
            onChange={(e) => setStartNum(parseInt(e.target.value))}
          />
        </label>
        <br />
        <label>
          끝 단:
          <input
            type="number"
            value={endNum}
            onChange={(e) => setEndNum(parseInt(e.target.value))}
          />
        </label>
        <br />
        <button type="submit">구구단 출력</button>
      </form>
      <div>{gugudanTable}</div>
    </div>
  );
}

export default Gugudan;
