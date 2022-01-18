// import logo from './logo.svg';
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser ? authUser : null,
      });
    });
  }, [user]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/login" element={[<Login />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
