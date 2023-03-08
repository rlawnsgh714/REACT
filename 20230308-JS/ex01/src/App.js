import logo from "./logo.svg";
import "./App.css";
import MyTag from "./components/MyTag";

function App() {
  return (
    <div className="App">
      <h1>시작</h1>
      <MyTag name="가길동" age={20} />
      <MyTag name="나길동" age={21} />
      <MyTag name="다길동" age={22} />
    </div>
  );
}

export default App;
