"use client"

import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";


export default function Page(): JSX.Element {
  return (
   <>
    <div  style={{height:"100vh",width:"100vw"}}>
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </div>
   </>
  );
}
