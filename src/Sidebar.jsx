import React, { useState } from "react";
import { NavLink } from "react-router-dom"
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
            <NavLink to="/" className="menu-btn" style={({ isActive }) => ({ color: isActive ? "limegreen" : "white" })}>
              <i className="fas fa-desktop"></i><span>Dashboard</span>
            </NavLink>
        </li>
        <li className="item" id="employees">
          <NavLink to="/employees" className="menu-btn" style={({ isActive }) => ({ color: isActive ? "limegreen" : "white" })}>
            <i className="fas fa-user-circle"></i><span>Employees</span>
          </NavLink>
        </li>
        <li className="item" id="messages">
          <NavLink to="/messages" className="menu-btn" style={({ isActive }) => ({ color: isActive ? "limegreen" : "white" })}>
            <i className="fas fa-envelope"></i><span>Messages</span>
          </NavLink>
        </li>
        <li className="item" id="settings">
          <NavLink to="/settings" className="menu-btn" style={({ isActive }) => ({ color: isActive ? "limegreen" : "white" })}>
            <i className="fas fa-cog"></i><span>Settings</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/about" className="menu-btn" style={({ isActive }) => ({ color: isActive ? "limegreen" : "white" })}>
            <i className="fas fa-info-circle"></i><span>About</span>
          </NavLink>
        </li>
      </div>
    </div>
    </div>
    )
}