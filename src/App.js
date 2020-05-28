import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <Router>
      <Navigation />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
