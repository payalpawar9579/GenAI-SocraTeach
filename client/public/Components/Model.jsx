// Robot.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; // Import your existing Model component

const Robot = () => {
  return (
    <Canvas>
      {/* Ambient light to create soft lighting */}
      <ambientLight intensity={0.5} />
      {/* Directional light for better shadows and highlights */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* Load the 3D robot model */}
      <Model /> {/* Use your Model component here */}
      <OrbitControls /> {/* Allow users to rotate around the model */}
    </Canvas>
  );
};

export default Robot;
