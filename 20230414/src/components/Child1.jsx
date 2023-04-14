import { memo, useState } from "react";

function Child1({ cnt: c }) {
  console.log("rendering");
  const [cnt, setCnt] = useState(c);

  return (
    <div>
      <h1>Child1 cnt = {cnt}</h1>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      ></button>
    </div>
  );
}

export default memo(Child1);
