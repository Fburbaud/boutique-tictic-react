import React from "react";
import './style/SearchBar.css';
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import ShoppingList from "./components/ShoppingList";


class App extends React.Component{
  render(){
    return (
      <div>
        <div>
          <Banner/>
        </div>
        <div className="bt-searchBar">
          <SearchBar />
        </div>
        <div className="ui container">
          <ShoppingList />
        </div>
      </div>
    );
  };
}

export default App;
