"use client";
// import robotGlb from "../../../public/object/robot.glb";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Robot() {
  const robotObj = useGLTF("/futuristic_flying_animated_robot_-_low_poly.glb");
  const { nodes, animations, scene } = robotObj;
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      // Assuming the animation is named "Action" or adjust to your animation's name
      Object.values(actions).forEach((action: any) => {
        action.reset().play().setLoop(THREE.LoopRepeat); // Loop the animation
      });
    }
  }, [actions]);

  return (
    <>
      <group
        position={[
          window.innerWidth / 900000 + window.innerWidth <= 768 ? 0.5 : 0,
          window.innerHeight / 90000000000000000099 - 2.3,
          0,
        ]}
        rotation={[0, window.innerWidth <= 768 ? -0.07 : 0, 0]}
        scale={2}
      >
        <primitive object={scene} />
      </group>
    </>
  );
}
