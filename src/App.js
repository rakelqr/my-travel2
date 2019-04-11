// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import Travels from "./Travels";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels</h1>
        </header>
        <Travels/>
      </div>
    );
  }
}

export default App;
