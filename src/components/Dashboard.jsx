import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Home,
  About,
  SearchFood,
  SearchWorkout,
} from "../components/CardComponents";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/About" className="link">
          About
        </Link>
        <Link to="/SearchFood" className="link">
          Food
        </Link>
        <Link to="/SearchWorkout" className="link">
          Workout
        </Link>
      </nav>

      {/* <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/SearchFood">
          <SearchFood />
        </Route>
        <Route exact path="/SearchWorkout">
          <SearchWorkout />
        </Route>
      </Routes> */}
    </>
  );
}
