import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Rocket(props) {
  const { nodes, materials } = useGLTF('./rocket/rocket.gltf'); // Ensure this path is correct
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.003, 0.024, -6.331]} rotation={[0.238, -0.545, 0.562]} scale={7}>
          <mesh geometry={nodes.planet001_1.geometry} material={materials.scene} />
          <mesh geometry={nodes.planet001_2.geometry} material={materials.scene} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./rocket/rocket.gltf'); // Ensure this path is correct
