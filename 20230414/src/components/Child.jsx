import { useEffect, useState } from "react";

const Child = ({ doA }) => {
  const [childStyle, setChildStyle] = useState(0);
  useEffect(() => {
    console.log("child effect 호출");
    setChildStyle(doA);
  }, [doA]);
  return (
    <div style={childStyle}>
      <h2>Child</h2>
    </div>
  );
};
export default Child;
