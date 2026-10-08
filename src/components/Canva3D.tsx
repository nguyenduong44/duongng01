import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model.tsx";
import { Center, OrbitControls } from "@react-three/drei";

const Canva3D = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [3, 2, 4], fov: 20 }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enableZoom={false}
          enablePan={false}
        />
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Center>
          <Model scale={10} />
        </Center>
      </Suspense>
    </Canvas>
  );
};

export default Canva3D;
