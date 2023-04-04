import React, { useState } from "react";

function NumberFilter() {
  const [numbers, setNumbers] = useState(Array(10).fill());

  const handleNumberChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const oddNumbers = numbers.filter((number) => number % 2 === 1);
  const evenNumbers = numbers.filter((number) => number % 2 === 0);

  return (
    <div className="problem">
      <h1>5. 10개의 숫자를 입력받아 홀수와 짝수 나누어서 출력</h1>
      <h2>숫자 입력</h2>
      <ol>
        {numbers.map((number, index) => (
          <li key={index}>
            {index + 1}.
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
          <h2>홀수</h2>
          <ul>
            {oddNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>짝수</h2>
          <ul>
            {evenNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NumberFilter;
