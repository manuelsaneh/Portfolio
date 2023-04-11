import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'

const Galaxy = () => {

  const galaxy = useGLTF('./galaxy/scene.gltf')

  return (
    <primitive 
      object={galaxy.scene}
      scale={1.5}
      position-y={0}
      rotation-y={0}
    />
  )
}


const GalaxyCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-2] flex'>
      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-10, 4, 6]
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Galaxy />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default GalaxyCanvas

//position: [-4, 3, 6]