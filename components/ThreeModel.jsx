import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Box() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z += 0.02;
  });

  return (
    <mesh scale={2} ref={ref}>
      <meshNormalMaterial wireframe />
      <sphereGeometry args={[1, 10]} />
      <meshLambertMaterial
        attach="material"
        color="#10B981"
        wireframe
        roughness={0}
      />
    </mesh>
  );
}

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export default function ThreeModel() {
  return (
    <div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 10, position: [0, 0, 4] }}>
        <CameraController />
        <ambientLight />
        <directionalLight />
        <Box />
      </Canvas>
    </div>
  );
}
