import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/home";
import Temp2 from "./modules/temp2";


function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/temp2"  element={<Temp2/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default Routess;
