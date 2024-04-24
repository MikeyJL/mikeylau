import { PlaneProps, usePlane } from "@react-three/cannon";
import { MeshProps } from "@react-three/fiber";
import { FC } from "react";

type PlaneObjectProps = {
  mesh?: MeshProps;
  physics: PlaneProps;
};

const PlaneObject: FC<PlaneObjectProps> = ({ mesh, physics }) => {
  const [ref, api] = usePlane(() => physics);

  return (
    <mesh ref={ref} {...mesh}>
      <planeGeometry />
      <meshStandardMaterial wireframe />
    </mesh>
  );
};

export default PlaneObject;
