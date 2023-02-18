import React, { useState } from "react";
import './Sidebar.css';

export default function Sidebar() {
    const [collapse, setCollapse] = useState(false);
    return (
        <div className={`wrapper ${collapse ? 'collapse' : ''}`}>
        <div className="sidebar">
      <div className="sidebar-menu">
                <button className="sidebar-btn" onClick={() => setCollapse(c => !c)}>
                    <i className={collapse ? 'fas fa-bars' : 'fas fa-close'}></i>
                </button>
        <li className="item">
          <a href="#" className="menu-btn">
            <i className="fas fa-desktop"></i><span>Dashboard</span>
          </a>
        </li>
        <li className="item" id="profile">
          <a href="#profile" className="menu-btn">
            <i className="fas fa-user-circle"></i><span>Profile <i className="fas fa-chevron-down drop-down"></i></span>
          </a>
          <div className="sub-menu">
            <a href="#"><i className="fas fa-image"></i><span>Picture</span></a>
            <a href="#"><i className="fas fa-address-card"></i><span>Info</span></a>
          </div>
        </li>
        <li className="item" id="messages">
          <a href="#messages" className="menu-btn">
            <i className="fas fa-envelope"></i><span>Messages</span>
          </a>
        </li>
        <li className="item" id="settings">
          <a href="#settings" className="menu-btn">
            <i className="fas fa-cog"></i><span>Settings</span>
          </a>
        </li>
        <li className="item">
          <a href="#" className="menu-btn">
            <i className="fas fa-info-circle"></i><span>About</span>
          </a>
        </li>
      </div>
    </div>
    </div>
    )
}