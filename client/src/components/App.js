import React from "react";
import { Router } from "@reach/router";
import Privacy from "./pages/Privacy.js";
import NotFound from "./pages/NotFound.js";

// to use styles, import the necessary CSS files
import "./App.css";

/**
 * Define the "App" component as a function.
 */
const App = () => {
  // required method: whatever is returned defines what
  // shows up on screen
  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      <div className="App-container">
        <Router>
          <Privacy path="/privacy" />
          <NotFound default />
        </Router>
      </div>
    </>
  );
};

export default App;
