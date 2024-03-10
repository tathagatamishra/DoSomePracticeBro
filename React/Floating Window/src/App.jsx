import React, { useEffect, useState } from "react";
import "./App.css";
import FloatingDiv from "./FloatingDiv";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const recenterDiv = () => {
    setPosition({ x: 0, y: 0 });
  };

  const [logoX, setLogoX] = useState('-50%');
  const [logoY, setLogoY] = useState('-50%');
  const [logoStyle, setLogoStyle] = useState({});

  useEffect(() => {
    setLogoStyle({
      transform: `translate(${logoX}, ${logoY})`,
    });
  }, [logoX, logoY]);

  return (
    <div className="App">
      <button className="recenter" onClick={recenterDiv}>
        Recenter
      </button>
      <h1>Draggable Floating Div Example</h1>

      <input type="checkbox" name="Vertical" id="Vertical" />
      <input type="checkbox" name="Horizontal" id="Horizontal" />
      <input type="text" onChange={(e) => setLogoX(e.target.value)} />
      <input type="text" onChange={(e) => setLogoY(e.target.value)} />

      <FloatingDiv
        logoX={logoX}
        logoY={logoY}
        setPosition={setPosition}
        position={position}
        logoStyle={logoStyle}
      />
    </div>
  );
};

export default App;
