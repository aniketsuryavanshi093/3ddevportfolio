import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'

const ComputerCanvas = () => {
  const [Ismobile, setIsmobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-midth: 500px)')
    setIsmobile(mediaQuery.matches)
    const handleMediaquery = (event) => {
      setIsmobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaquery)
    return () => mediaQuery.removeEventListener("change", handleMediaquery)
  }, [])

  return (
    <Canvas shadows frameloop='demand' camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers Ismobile={Ismobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

const Computers = ({ Ismobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight groundColor={"black"} intensity={0.15} />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]}
        penumbra={1} intensity={1} castShadow shadow-mapSize={1023} angle={0.12} />
      <primitive scale={Ismobile ? 0.65 : 0.75} position={Ismobile ? [0, -3, -2.2] : [0, -3.75, -1.5]} rotation={[-0.01, -0.2, -0.1]} object={computer.scene} />
    </mesh>
  )
}
export default ComputerCanvas