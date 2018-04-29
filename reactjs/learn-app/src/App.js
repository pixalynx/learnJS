import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Form />*/}
        <Login />
      </div>
    );
  }
}

export default App;
