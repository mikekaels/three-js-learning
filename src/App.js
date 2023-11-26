import './App.css'
import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


function Room() {
  const gltf = useLoader(GLTFLoader, './room/scene.gltf')
  return (
    <mesh scale={0.05}>
      <primitive object={gltf.scene} dispose={null} />
    </ mesh>

  )
}


export default function App() {
  return (
    <div className='app'>
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <OrbitControls />
        <Room />
      </Canvas>
    </div>
  )

  return (
    <div className='app'>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 15, 10]} />
        <Box />
        <Plane />
      </Canvas>
    </div>
  );
}

function Box() {
  return (
    <mesh>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color={"hotpink"} />
    </mesh>
  );
}

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry attach={"geometry"} args={[5, 5]} />
      {/* <meshStandardMaterial attach={"geometry"} color={"seofoamgreen"} /> */}
    </mesh>
  )
}