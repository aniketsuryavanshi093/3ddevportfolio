import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useGLTF, useTexture } from "@react-three/drei"
import CanvasLoader from '../Loader'

// #
const BallCanvas = (props) => {
  return (
    <Canvas shadows frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={props.icon} />
      </Suspense>
    </Canvas>
  )

}

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl])
  return (
    <Float speed={1.75} floatIntensity={2} rotationIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.005]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={"#fff8eb"} polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} map={decal} />
      </mesh>
    </Float>
  )

}

export default BallCanvas