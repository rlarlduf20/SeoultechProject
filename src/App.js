import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Signin from "./pages/Signin";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/user/login" element={<Signin />} />
        <Route path="/user/registration" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
