import React from "react";
import Items from "./Items";
import { medicineList } from "../datas/medicineList";

const ShoppingList = () =>{
    const renderedItems = medicineList.map(({id, name, cover, price}) => {
        return <Items key={id} name={name} cover={cover} price={price} />
    });
    return <div className="ui link cards">{renderedItems}</div>;
}

export default ShoppingList;