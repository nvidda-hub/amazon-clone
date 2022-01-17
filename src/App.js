// import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home"

import {BrowserRouter as Router, Routes, Route, render} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={[<Header />, <Home />]} />

          <Route path="/checkout" element={[<Header />, <h1>Hello There!! We arrived at Checkout Page.</h1>]} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
