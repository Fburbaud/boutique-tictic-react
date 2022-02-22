import React from "react";
import '../style/Sidebar.css';
import logo from "../assets/logo1.jpg";

const Sidebar = () => {
    return (
        <div className="ui large left fixed vertical menu">
            <div className="item">
                <img className="bannerLogo" src={logo} alt='Boutique Tictic'/>
            </div>
            <a className="item">
                <i className="home icon"></i>
                Accueil
            </a>
            <a className="item">
                <i className="leaf icon"></i>
                Plantes
            </a>
            <a className="item">
                <i className="info icon"></i>
                Conseils
            </a>
        </div>
    );
}

export default Sidebar;