import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "./index.scss";

const App = () => (
  <div>
    <Header />
    <Sidebar />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
