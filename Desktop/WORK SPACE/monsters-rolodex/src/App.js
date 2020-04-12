import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/seach-box.component";
class App extends React.Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
      })
      .catch(error => {
        console.log("There is an error ", error);
      });
  }
  searchBoxOnChangeHandler = event => {
    this.setState({ searchField: event.target.value }, () => {
      console.log(this.state); // setState is asynchronous action
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          onChangeHandler={this.searchBoxOnChangeHandler}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
