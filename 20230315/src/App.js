import logo from "./logo.svg";
import "./App.css";
import Random from "./components/random";
import Ex02 from "./components/Ex02";
import Ex03 from "./components/Ex03";

function App() {
  return (
    <div className="App">
      <Ex03 />
      <Ex02 />
      <h1>난수 생성</h1>
      <Random />
    </div>
  );
}

export default App;
