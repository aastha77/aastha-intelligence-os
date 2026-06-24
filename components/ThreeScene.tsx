"use client";


import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";



function Core() {


  const meshRef = useRef<Mesh | null>(null);



  useFrame(() => {

    if (meshRef.current) {

      meshRef.current.rotation.y += 0.01;

      meshRef.current.rotation.x += 0.005;

    }

  });



  return (
     

    <Float

        speed={2}

        rotationIntensity={1}

        floatIntensity={1}

    >
    <mesh 
        ref={meshRef}
        position={[0,0,0]}
    >


      <icosahedronGeometry 
        args={[1.3, 2]} 
      />


      <meshStandardMaterial

        color="#00ffff"

        wireframe

        emissive="#00ffff"

        emissiveIntensity={3}

      />


    </mesh>

    </Float>

  );

}





export default function ThreeScene() {


  return (

    <Canvas
        camera={{
        position:[0,0,5]
        }}
    >


      <ambientLight
        intensity={0.5}
      />



      <pointLight

        position={[3, 3, 3]}

        color="cyan"

        intensity={5}

      />



      <Core />

    <Pedestal />


      <OrbitControls

        enableZoom={false}

      />


    </Canvas>

  );

}


function Pedestal(){

  return (

    <mesh
      position={[0,-1.8,0]}
    >


      <boxGeometry
        args={[3,0.2,3]}
      />


      <meshStandardMaterial

        color="#0f172a"

        transparent

        opacity={0.45}

      />


    </mesh>

  );

}