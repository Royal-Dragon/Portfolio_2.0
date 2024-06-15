/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 rocket.gltf 
Author: drei.lu (https://sketchfab.com/drei.lu)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/space-exploration-wlp-series-8-91964c1ce1a34c3985b6257441efa500
Title: Space exploration [WLP series #8]
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/rocket.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.003, 0.024, -6.331]} rotation={[0.238, -0.545, 0.562]} scale={7}>
          <mesh geometry={nodes.planet001_1.geometry} material={materials.scene} />
          <mesh geometry={nodes.planet001_2.geometry} material={materials.scene} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/rocket.gltf')
