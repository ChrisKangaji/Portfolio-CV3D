import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  // const computer = useGLTF('./desktop_pc/scene.gltf');
  const planet = useGLTF('./planet/scene.gltf');

  return (
    <mesh>
      {/* Starting with a mesh so that we can create our 3d model */}
      <hemisphereLight intensity={2.15} groundColor="black" />
      <pointLight intensity={2} />
      //Do some more shanges to the spotlight at some point
      <spotLight
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        // Computer model
        // object={computer.scene}
        // scale={0.75}
        // // position={[0, -2.5, -1.5]}
        // // rotation={[-0.001, -0.2, -0.045]}
        // position={[0, -3.5, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}

        //Planet model
        object={planet.scene}
        scale={isMobile ? 1.5 : 2}
        position={isMobile ? [0, -0.25, -1.5] : [0, -0.75, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    // Remove the listener when the component is unmounted    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas