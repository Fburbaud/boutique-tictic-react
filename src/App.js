import React from "react";
import './style/SearchBar.css';
import './style/Container.css';
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import ShoppingList from "./components/ShoppingList";
import Sidebar from "./components/Sidebar";

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Banner/>
        <Sidebar />
        <div className="bt-searchBar">
          <SearchBar />
        </div>
        <div className="ui container bt-container">
          <ShoppingList />
        </div>
      </React.Fragment>
    );
  };
}

export default App;
