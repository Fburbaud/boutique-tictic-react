import React from "react";
import '../style/Sidebar.css';
import logo from "../assets/logo1.jpg";

const Sidebar = () => {
    return (
        <div className="ui large left fixed vertical menu">
            <div className="item">
                <img className="bannerLogo" src={logo} alt='Boutique Tictic'/>
            </div>
            <a class="item">
                <i class="home icon"></i>
                Home
            </a>
            <a class="item">
                <i class="block layout icon"></i>
                Topics
            </a>
            <a class="item">
                <i class="smile icon"></i>
                Friends
            </a>
        </div>
    );
}

export default Sidebar;