import { useState } from "react";
import { MyButton } from "./myscomponents/MyButton";
import Child from "./components/Child";

const App1 = () => {
  const [color, setColor] = useState(false);

  return (
    <div>
      <h1>App1</h1>
      <Child />
      <MyButton>+</MyButton>
      <MyButton>-</MyButton>
      <MyButton
        dis={color}
        onClick={() => {
          setColor(!color);
        }}
      >
        버튼
      </MyButton>
    </div>
  );
};

export default App1;
