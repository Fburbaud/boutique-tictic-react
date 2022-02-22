import React from "react";
import '../style/Banner.css';

const Banner = () => {
    return(
        <div className="ui grid bt-banner">
            <div className="four wide column"></div>
            <div className="eight wide column">
                <h1>Boutique Tictic</h1>
            </div>
            <div className="two wide column">
                <a className="bt-link-banner" href="">Connexion / Inscription</a>
            </div>
            <div className="two wide column">
                <div className="ui olive vertical animated button">
                    <div className="hidden content">Panier</div>
                    <div className="visible content" >
                        <i className="shop icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;