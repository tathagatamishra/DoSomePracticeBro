import React from 'react'
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three'


export default function App() {
  return (
    <>
      <OrbitControls />
      <directionalLight position={[1,2,3]} />
      <ambientLight intensity={.3} />


      <mesh position={[0, .501, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color='greenyellow' side={THREE.DoubleSide} />
      </mesh>
    </>
  )
}

