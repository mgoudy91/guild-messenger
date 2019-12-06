import React from "react";
import "./App.css";
import { Message } from "./components/Message.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Guild messenger</p>
        <p>by Mitch</p>
      </header>
      <Message/>
    </div>
  );
}

export default App;
