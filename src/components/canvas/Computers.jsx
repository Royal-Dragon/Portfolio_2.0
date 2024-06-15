
import Rocket from "../../../public/rocket/Rocket";
import Scene from "../../../public/desktop_pc/Scene"
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ComputersCanvas = () => {
  return (
    <Canvas className=' h-screen -mt-20'
    frameloop="demand"
    shadows
    camera={{position:[26,4,0],fov:25}}
    gl={{preserveDrawingBuffer: true}}
    >
    <ambientLight/>
    <hemisphereLight intensity={0.45} groundColor={"black"}/>
    <pointLight intensity={0.5}/>
    <OrbitControls enableZoom={false} 
    minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} />
      <Suspense fallback={null}>
        {/* <Rocket /> */}
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default ComputersCanvas;
