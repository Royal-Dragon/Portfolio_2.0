// App.jsx
import React, { useEffect, useRef } from 'react';
import { WebGLRenderer, PerspectiveCamera, Scene, BoxGeometry, MeshBasicMaterial, Mesh, sRGBEncoding } from 'three';

const ThreeExample = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const renderer = new WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = sRGBEncoding;

    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const scene = new Scene();

    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Cleanup
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeExample;
