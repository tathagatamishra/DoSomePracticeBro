import React, { useState } from "react";
import Draggable from "react-draggable";
import "./FloatingDiv.css";
import cardImg from "./assets/Front.png";
import cardImg2 from "./assets/Front-1.png";
import logo from "./assets/logo.png";

const FloatingDiv = (props) => {
  return (
    <Draggable
      position={props.position}
      onStop={(e, data) => props.setPosition({ x: data.x, y: data.y })}
    >
      <div className="floating-div">
        <h1 className="heading">Card Preview</h1>
        <div className="cover"></div>
        <img className="logo" src={logo} style={props.logoStyle} />
        <img className="card" src={cardImg} />
      </div>
    </Draggable>
  );
};

export default FloatingDiv;
