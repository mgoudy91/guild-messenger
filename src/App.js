import React from "react";
import "./App.css";
import { UserContext } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Guild messenger</p>
        <p>by Mitch</p>
      </header>
      <UserContext/>
      <UserContext/>
    </div>
  );
}

export default App;
