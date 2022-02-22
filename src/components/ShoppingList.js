import React from "react";
import '../style/ShoppingList.css';
import Items from "./Items";
import { medicineList } from "../datas/medicineList";

const ShoppingList = () =>{
    const renderedItems = medicineList.map(({id, name, cover, description, price}) => {
        return <Items key={id} name={name} cover={cover} description={description} price={price} />
    });
    return <div className="ui link cards bt-cards">{renderedItems}</div>;
}

export default ShoppingList;