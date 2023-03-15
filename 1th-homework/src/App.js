import logo from "./logo.svg";
import "./App.css";
import Random from "./components/random";
import RockSissorsPaper from "./components/rock-scissors-paper";

function App() {
  return (
    <div className="App">
      <h1>과제 1</h1>
      <Random />
      <h1>과제 2</h1>
      <RockSissorsPaper />
    </div>
  );
}

export default App;
