import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Drivers from "./Pages/Drivers";
import Standings from "./Pages/Standings";
import PreviousRaces from "./Pages/PreviousRaces";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/LastRace" element={<PreviousRaces />}></Route>
        <Route path="/Drivers" element={<Drivers />}></Route>
        <Route path="/Standings" element={<Standings />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
