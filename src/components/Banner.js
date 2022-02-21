import React from "react";
import logo from "../assets/logo1.jpg";
import '../style/Banner.css';

const Banner = () => {
    return(
        <div className="bt-banner">
            <img className="bannerLogo" src={logo} alt='Boutique Tictic'/>
            <h1>Boutique Tictic</h1>
            <a className="bt-link-banner" href="">Connexion / Inscription</a>
        </div>
    );
}

export default Banner;