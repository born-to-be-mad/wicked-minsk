import React, { Component } from "react";

import LAYOUT_DATA from "./data/layout.data";
import {CardList} from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bases: LAYOUT_DATA
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Wicked Minsk. Smash It!</h1>
        <CardList>
          {this.state.bases.map((base) => (
              <h1 key={base.id}>{base.title}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
