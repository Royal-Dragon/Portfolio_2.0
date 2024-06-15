import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

const SimpleBall = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  
  return (
    <Float  speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({icon}) => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <SimpleBall imgUrl={icon}  />
    </Canvas>
  );
};

export default BallCanvas;
