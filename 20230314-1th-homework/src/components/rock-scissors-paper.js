import React, { useState } from "react";

const RockSissorsPaper = () => {
  const [userSelect, setUserSelect] = useState(0);
  const [computerSelect, setComputerSelect] = useState(0);

  const setUser = () => {
    setUserSelect(userSelect + 1);
  };

  const setComputer = () => {
    setComputerSelect(computerSelect + 1);
  };
  return <div></div>;
};

export default RockSissorsPaper;
