import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import { UserContext } from "./components/UserContext";

const users = ["Alice", "Bob"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Guild Messenger</p>
        <p>by Mitch Goudy</p>
      </header>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
      >
        {/* Some hard-coded users to test app */}
        <Grid item xs={6} sm={3}>
          <UserContext userName={users[0]} target={users[1]} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <UserContext userName={users[1]} target={users[0]} />
        </Grid>
      </Grid>
    </div>
  );
}

export default connect()(App);
