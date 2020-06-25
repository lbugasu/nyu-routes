import React from "react";
import logo from "../css/images/logo.png";
import RT from "../components/Rt";
import AllRts from "../components/allRts";
import LogoMenu from "../components/logoMenu";

const NavigationBar = ({ x }) => (
  <>
    <RT x={x} />

    <AllRts x={x} />
    <LogoMenu />
  </>
);

export default NavigationBar;
