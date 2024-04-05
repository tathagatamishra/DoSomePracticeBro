import { useState } from "react";
import useSound from "use-sound";
import audio from "./x.wav";
import "./App.css";

function App() {
  // const [play] = useSound(audio);

  let playAudio = () => {
    new Audio(audio).play();
  };

  return (
    <div>
      <button
        onClick={playAudio}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          background: "#007BFF",
          border: "none",
          borderRadius: "5px",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
          outline: "none",
        }}
      >
        Hover over me!
      </button>
    </div>
  );
}

export default App;
