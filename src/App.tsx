import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Monster } from "./interfaces/monster.interface";
import { SearchBox } from "./components/search-box/search-box.component";

interface AppProps {}

interface AppState {
  monsters: Monster[];
  searchField: string;
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchField: e.target.value });
  };

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    this.setState({ monsters: await response.json() });
  }

  render(): JSX.Element {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
