import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

import "./index.scss";
import "./App.css";

const App = () => (
  <div className="container">
    <Sidebar />
    <div className="main">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
