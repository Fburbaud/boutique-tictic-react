import React from "react";

const Items = ({name, cover, price}) => {
    return (
        <div className="card">
            <div className="image">
                <img src={cover} alt={name}/>
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">
                    Matthew is an interior designer living in New York.
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    {price} €
                </span>
            </div>
        </div>
    );
}

export default Items;