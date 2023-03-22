import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../Loader'
import React, { Suspense } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive scale={2.5} rotation-y={0} position-y={0} object={earth.scene} />
  )
}
const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop='demand' camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={CanvasLoader}>
        <OrbitControls enableZoom={false} autoRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth />
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas