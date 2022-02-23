import React, { useState } from "react";
import './style/SearchBar.css';
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import ShoppingList from "./components/ShoppingList";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import PaginationBasic from "./components/PaginationBasic";
import { medicineList } from "./datas/medicineList";

function App (){
  const [isOpen, setIsOpen] = useState(false);

  const onSearchSubmit = (term) => { 
    const resultat = medicineList.find( medicine => medicine.name == term);
    console.log(resultat);
  }

    return (
      <div>
        <Banner isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Sidebar />
        <div className="bt-searchBar">
          <SearchBar onSubmit={onSearchSubmit} />
        </div>
        <Cart />
        <div className="ui container">
          <ShoppingList />
        </div>
        <PaginationBasic />
      </div>
    );
}

export default App;
