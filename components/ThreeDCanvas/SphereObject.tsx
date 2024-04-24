import { SphereProps, useSphere } from "@react-three/cannon";
import { MeshProps } from "@react-three/fiber";
import { FC } from "react";

type SphereObjectProps = {
  mesh?: MeshProps;
  physics: SphereProps;
};

const SphereObject: FC<SphereObjectProps> = ({ mesh, physics }) => {
  const [ref, api] = useSphere(() => physics);

  return (
    <mesh ref={ref} {...mesh}>
      <sphereGeometry />
      <meshStandardMaterial wireframe />
    </mesh>
  );
};

export default SphereObject;
