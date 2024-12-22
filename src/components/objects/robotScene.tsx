"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Robot from "./robot";

export default function RobotScene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      // className="pointer-events-none"
      children={
        <>
          <directionalLight position={[10, 10, 3]} intensity={2} />
          <Suspense fallback={null}>
            <Robot />
          </Suspense>
        </>
      }
    />
  );
}
