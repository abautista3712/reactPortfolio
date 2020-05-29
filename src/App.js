import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}
