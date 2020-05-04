import React, {Component} from "react";

import LAYOUT_DATA from "./data/layout.data";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bases: LAYOUT_DATA,
            searchField: ''
        };
    }

    render() {
        const {bases, searchField} = this.state;
        const filteredBases = bases.filter(base =>
           base.title.toLowerCase().includes(searchField.toLowerCase())
           ||
           base.categories.filter(category => category.toLowerCase().includes(searchField.toLowerCase())).length > 0
        );
        return (
            <div className="App">
                <h1>Wicked Minsk. Smash It!</h1>
                <SearchBox placeholder='search in layouts'
                           handleChange={e => this.setState({searchField: e.target.value})}
                />
                <CardList bases={filteredBases}/>
            </div>
        );
    }
}

export default App;
