import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import SphereObject from "./SphereObject";

const ThreeDCanvas: FC = () => {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <ambientLight intensity={0.05} />
        <directionalLight color="#FCA5A5" position={[0, 2, 5]} />
        <Physics gravity={[0, 0, 0]}>
          <SphereObject
            physics={{
              position: [0, -1, 3],
              mass: 5,
              velocity: [0.1, 0, 0],
              angularVelocity: [0.1, 0, 0.3],
            }}
          />

          <SphereObject
            physics={{
              position: [2, 1, 0],
              mass: 5,
              velocity: [0.1, 0, 0],
              angularVelocity: [0.2, 0.1, 0],
            }}
          />
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDCanvas;
