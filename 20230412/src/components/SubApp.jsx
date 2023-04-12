import { useEffect } from "react";

const SubApp = ({ doA }) => {
  useEffect(() => {
    console.log(`${doA}`);
    console.log("App effect");
  }, [doA]);
  return (
    <div>
      <h1>SubApp</h1>
    </div>
  );
};

export default SubApp;
