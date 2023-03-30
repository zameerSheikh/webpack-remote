import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

import "./index.scss";
import "./App.scss";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Sidebar />
      <div className="main">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
