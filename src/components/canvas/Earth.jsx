
import Rocket from "../../../public/rocket/Rocket";
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Earth = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 768px)');
    setIsMobile(query.matches);
    const handler = (e) => setIsMobile(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  if (isMobile) return  (
    <Canvas aria-hidden="true" className=' h-screen -mt-20'
    frameloop="demand"
    shadows
    camera={{position:[100,4,0],fov:25}}
    gl={{preserveDrawingBuffer: true}}
    >
    <ambientLight/>
    <hemisphereLight intensity={0.45} groundColor={"black"}/>
    <pointLight intensity={0.5}/>
    <OrbitControls enableZoom={false} enabled={false}
    minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} />
      <Suspense fallback={null}>
        <Rocket />
      </Suspense>
    </Canvas>
  );

  return (
    <Canvas aria-hidden="true" className=' h-screen -mt-20'
    frameloop="demand"
    shadows
    camera={{position:[100,4,0],fov:25}}
    gl={{preserveDrawingBuffer: true}}
    >
    <ambientLight/>
    <hemisphereLight intensity={0.45} groundColor={"black"}/>
    <pointLight intensity={0.5}/>
    <OrbitControls enableZoom={false}
    minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} />
      <Suspense fallback={null}>
        <Rocket />
      </Suspense>
    </Canvas>
  );
}

export default Earth;
