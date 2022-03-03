import React, { useState } from "react";
import '../style/Cart.css';

const Cart = () => {
    const [open, setOpen] = useState(false);
    const [cart, updateCart] = useState(0);
    const alfalfaPrice = 15;

    return (
        <div className="bt-cart-container">
            <div className="ui olive vertical animated button" onClick={() => {setOpen(!open)}}>
                <div className="hidden content">Panier</div>
                <div className="visible content" >
                    <i className="shop icon"></i>
                </div>
            </div>
            <div className={`bt-cart-container ${!open ? 'bt-cart-closed' : ''}`}>
                <div className="bt-cart">
                    <button onClick={() => {setOpen(!open)}}>Fermer</button>
                    <h3>Panier</h3>
                    <div>
                        Monstera : {alfalfaPrice}€
                        <button onClick={() => updateCart(cart + 1)}>
                            Ajouter
                        </button>
                    </div>
                    <h4>Total : {alfalfaPrice * cart}€</h4>
                </div>
            </div>
        </div>
    );
}

export default Cart;