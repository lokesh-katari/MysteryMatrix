"use client";
import React from "react";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { ManCharacter } from "./ManCharacter";

const Experience = () => {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.3} />
      <ContactShadows blur={2} />
      <OrbitControls />
      <ManCharacter />
      <ManCharacter position-x={1} hairColor="red" />
      {/* <mesh>
  <boxGeometry attach="geometry" />
  <meshBasicMaterial attach="material" color="hotpink" />
  </mesh> */}
    </>
  );
};

export default Experience;
