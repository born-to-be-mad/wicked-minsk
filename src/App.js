import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bases: [
        { id: 1, name: "base 1" },
        { id: 2, name: "base 2" },
        { id: 3, name: "base 3" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Wicked Minsk. Smash It!</h1>
        {this.state.bases.map((base) => (
          <h1 key={base.id}>{base.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
