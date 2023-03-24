import React, { useState } from "react";

const RockSissorsPaper = () => {
  const [user, setUserSelect] = useState(0);
  const [computer, setComputerSelect] = useState(0);

  const setUser = (number) => {
    setUserSelect(number);
  };

  const setComputer = () => {
    setComputerSelect(parseInt(Math.random() * 3));
  };

  const play = (number) => {
    setComputer();
    setUser(number);

    switch (user) {
      case 1:
        if (computer == 1) {
          console.log("비김");
        } else if (computer == 2) {
          console.log("짐");
        } else {
          console.log("이김");
        }
        break;
      case 2:
        if (computer == 1) {
          console.log("이김");
        } else if (computer == 2) {
          console.log("비김");
        } else {
          console.log("짐");
        }
        break;
      case 3:
        if (computer == 1) {
          console.log("짐");
        } else if (computer == 2) {
          console.log("이김");
        } else {
          console.log("비김");
        }
        break;
    }
  };

  return (
    <div>
      <button onClick={() => play(1)}>가위</button>
      <button onClick={() => play(2)}>바위</button>
      <button onClick={() => play(3)}>보</button>
    </div>
  );
};

export default RockSissorsPaper;
