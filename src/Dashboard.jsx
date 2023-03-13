import React, { useState } from "react";
import "./Dashboard.css";

export default function Counter() {

    return (
    <div className="main-container">
        <div className="content">
            <div className="cards">
                <div className="card">
                    <div className="box">
                        <h1>2194</h1>
                        <h3>Employees</h3>
                    </div>
                    <div className="icon-case">
                    <i className="fas fa-user fa-2xl"></i>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>53</h1>
                        <h3>Avg Match</h3>
                    </div>
                    <div className="icon-case">
                        <i className="fas fa-calculator fa-2xl"></i>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>35</h1>
                        <h3>Openings</h3>
                    </div>
                    <div className="icon-case">
                        <i className="fas fa-check-to-slot fa-2xl"></i>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>350000</h1>
                        <h3>Avg Income</h3>
                    </div>
                    <div className="icon-case">
                        <i className="fas fa-money-check-dollar fa-2xl"></i>
                    </div>
                </div>
            </div>
            <div className="content-2">
                <div className="recent-payments">
                    <div className="card-title">
                        <h2>All Positions</h2>
                        <a href="#" className="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Match</th>
                            <th>Option</th>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Software Engineer</td>
                            <td>63%</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Software Engineer</td>
                            <td>63%</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Software Engineer</td>
                            <td>63%</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Software Engineer</td>
                            <td>63%</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Software Engineer</td>
                            <td>63%</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Software Engineer</td>
                            <td>63%</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                    </table>
                </div>
                <div className="new-students">
                    <div className="card-title">
                        <h2>New Employees</h2>
                        <a href="#" className="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>option</th>
                        </tr>
                        <tr>
                            <td><i className="fas fa-user ml-5"></i></td>
                            <td>James Q</td>
                            <td><i className="fas fa-user-gear ml-5"></i></td>
                        </tr>
                        <tr>
                            <td><i className="fas fa-user ml-5"></i></td>
                            <td>James Q</td>
                            <td><i className="fas fa-user-gear ml-5"></i></td>

                        </tr>
                        <tr>
                            <td><i className="fas fa-user ml-5"></i></td>
                            <td>James Q</td>
                            <td><i className="fas fa-user-gear ml-5"></i></td>

                        </tr>
                        <tr>
                            <td><i className="fas fa-user ml-5"></i></td>
                            <td>James Q</td>
                            <td><i className="fas fa-user-gear ml-5"></i></td>

                        </tr>
                        <tr>
                            <td><i className="fas fa-user ml-5"></i></td>
                            <td>James Q</td>
                            <td><i className="fas fa-user-gear ml-5"></i></td>

                        </tr>
                        <tr>
                            <td><i className="fas fa-user ml-5"></i></td>
                            <td>James Q</td>
                            <td><i className="fas fa-user-gear ml-5"></i></td>

                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}