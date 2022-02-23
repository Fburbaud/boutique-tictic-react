import React, { useState } from "react";
import '../style/Cart.css';

const Cart = ({ isOpen, setIsOpen }) => {
    const alfalfaPrice = 15;
    const [cart, updateCart] = useState(0);
    return isOpen ? (
        <div className="bt-cart-container">
            <div className="bt-cart">
                <button onClick={() => setIsOpen(false)}>Fermer</button>
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
    ) : (
        null
    )
}

export default Cart;