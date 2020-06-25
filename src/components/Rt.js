import React from "react";
import logo from "../css/images/logo.png";
const NavigationBar = ({ x }) => (
  <div className="routeTitle">
    <h1 className={`rt${x}`}>Rt. {x}</h1>
  </div>
);
export default NavigationBar;
