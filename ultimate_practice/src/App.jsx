import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Population from "./components/Population";


export default class App extends Component {
  render() {
    return (
      <div>
        <Population/>
      </div>
    );
  }
}
