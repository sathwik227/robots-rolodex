import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'
import { SearchBar } from './components/searchbar/searchbar.component'

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  setSearchField = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(m =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    )
    console.log(filteredMonsters)
    return (
      <div className='App'>
        <h1>Robots Rolodex</h1>
        <SearchBar placeholder="Search Robots"
          handleChange={this.setSearchField}
        />
        <CardList monsters={filteredMonsters} />
      </div >
    )
  }
}

export default App;
