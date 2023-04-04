import "./App.css";
import Main from "./components/main";
import Random from "./components/random";
import RockSissorsPaper from "./components/rock-scissors-paper";
import Clock from "./components/clock";
import Gugudan from "./components/gugudan";
import NumberFilter from "./components/numberfilter";
import Desc from "./components/desc";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="Header">
        <div className="problem">
          <Link to="/과제1">과제 1 | </Link>
          <Link to="/과제2">과제 2 | </Link>
          <Link to="/과제3">과제 3 | </Link>
          <Link to="/과제4">과제 4 | </Link>
          <Link to="/과제5">과제 5 | </Link>
          <Link to="/과제6">과제 6 </Link>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/과제1" element={<Random />} />
          <Route path="/과제2" element={<RockSissorsPaper />} />
          <Route path="/과제3" element={<Clock />} />
          <Route path="/과제4" element={<Gugudan />} />
          <Route path="/과제5" element={<NumberFilter />} />
          <Route path="/과제6" element={<Desc />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
