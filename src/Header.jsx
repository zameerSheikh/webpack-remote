import React, { useState } from "react";
import './Header.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="header">
            <div className="header-menu">
                <div className="title">Fission <span>Devs</span> India</div>
                <ul>
                <li><a href="#"><i className="fas fa-search"></i></a></li>
                <li><a href="#"><i className="fas fa-bell"></i></a></li>
                <li><a href="#"><i className="fas fa-power-off"></i></a></li>
                </ul>
            </div>
        </div>
    )
}