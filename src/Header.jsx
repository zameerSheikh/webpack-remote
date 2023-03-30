import React from "react";
import './Header.scss';

export default function Counter() {

    return (
        <div className="header">
            <div className="header-menu">
                <div className="title">Fission <span>Devs</span></div>
                <ul>
                <li><a href="#"><i className="fas fa-search"></i></a></li>
                <li><a href="#"><i className="fas fa-bell"></i></a></li>
                <li><a href="#"><i className="fas fa-power-off"></i></a></li>
                </ul>
            </div>
        </div>
    )
}