import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Canvas
    camera={{
      fov: 45,
      position: [5,2,1]
    }}
  >
    <App />
  </Canvas>
)