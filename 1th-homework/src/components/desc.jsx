import React, { useState } from "react";

function Desc() {
  const [numbers, setNumbers] = useState(Array(10).fill(0));

  const handleNumberChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const sortedAscending = [...numbers].sort((a, b) => a - b);
  const sortedDescending = [...numbers].sort((a, b) => b - a);

  return (
    <div className="problem">
      <h1>6. 10개의 숫자를 입력받아 내림차순 오름차순 정렬해서 출력</h1>
      <h2>숫자 입력</h2>
      <div>
        <ol>
          {numbers.map((number, index) => (
            <li key={index}>
              <input
                type="number"
                value={number}
                onChange={(event) =>
                  handleNumberChange(index, Number(event.target.value))
                }
              />
            </li>
          ))}
        </ol>
        <div className="number-list">
          <div>
            <h2>오름차순 정렬</h2>
            <ol>
              {sortedAscending.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ol>
          </div>
          <div>
            <h2>내림차순 정렬</h2>
            <ol>
              {sortedDescending.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desc;
