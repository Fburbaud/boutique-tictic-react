import React from "react";
import './style/SearchBar.css';
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import ShoppingList from "./components/ShoppingList";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import PaginationBasic from "./components/PaginationBasic";
import { medicineList } from "./datas/medicineList";

class App extends React.Component {
  onSearchSubmit = (term) => { 
    const resultat = medicineList.find( medicine => medicine.name == term);
    console.log(resultat);
  }

  render(){
    return (
      <div>
        <Banner/>
        <Sidebar />
        <div className="bt-searchBar">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <Cart />
        <div className="ui container">
          <ShoppingList />
        </div>
        <PaginationBasic />
      </div>
    );
  }
}

export default App;
