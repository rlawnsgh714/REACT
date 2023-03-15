import logo from "./logo.svg";
import "./App.css";
import Test from "./compoments/test";
import Ex01 from "./compoments/Ex01";
import Ex02 from "./compoments/Ex02";

function App() {
  var a = "10";
  var a = "20";

  let b = "30";
  b = "40";

  console.log(a);
  return (
    <div className="App">
      <Ex02 name="누시다" age={20} />
      <Ex02 name="사키오카" age={30} />
      <h1>{a}</h1>
      <h1>{b}</h1>
      <Test />
      <Ex01 />
    </div>
  );
}

export default App;
