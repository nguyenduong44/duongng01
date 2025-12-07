import { Canvas } from "@react-three/fiber";
import { Model } from "./Model.tsx";
import { Center, OrbitControls } from "@react-three/drei";

const Canva3D = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 2, 4], fov: 20 }}
      className="w-full h-full"
    >
      <OrbitControls autoRotate autoRotateSpeed={3} />
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Center>
        <Model scale={10} />
      </Center>
    </Canvas>
  );
};

export default Canva3D;
