import { useState } from 'react'
import useSound from 'use-sound';
import buttonHoverSound from './x.wav';
import './App.css'

function App() {
  const soundUrl = buttonHoverSound;
  const [play] = useSound(soundUrl);

  return (
    <div>
         <button
      onClick={play}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        background: '#007BFF',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      Hover over me!
    </button>
    </div>
  )
}

export default App
