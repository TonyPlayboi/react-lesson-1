import {  useThree, extend, useFrame } from "@react-three/fiber"
import {  GradientTexture ,softShadows, BakeShadows, useHelper, MeshReflectorMaterial ,Float, Text,  Html, PivotControls,  TransformControls, OrbitControls, CameraShake, PerspectiveCamera, SoftShadows } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'
import { Perf } from "r3f-perf"
import { DoubleSide } from "three"


 
export default function Experience ()

{
    const { camera, gl} = useThree()
    const boxRef = useRef()
    const boxRef2 = useRef()

   


    useFrame(() =>{

        boxRef.current.rotation.y += 0.01
        boxRef2.current.rotation.y += 0.01
    })
     

  
    return <>

  <SoftShadows
    frustum={1.75}
    size={0.0001}
    near={9.5}
    samples={17}
    rings={11}
  ></SoftShadows>




  <mesh receiveShadow position={[0,3,1]} scale={[20,12,25]}>
    <boxGeometry></boxGeometry>
    <meshStandardMaterial side={DoubleSide} color={'#303030'}></meshStandardMaterial>
  </mesh>






    <Perf position="top-left"
    ></Perf>
    
    <OrbitControls maxAzimuthAngle={Math.PI /2}   maxDistance={10} minDistance={5} maxPolarAngle={1} minPolarAngle={1} makeDefault></OrbitControls>

    <pointLight
    distance={7.5}
    intensity={2} 
    position={[-4,2,-2]}
   ></pointLight>

  <pointLight
 
    distance={7.5}
    intensity={2} 
    position={[4.5,2,-2]}
   ></pointLight>
    
   

   <ambientLight intensity={0.3}></ambientLight>
    
    
    



    <Float
    speed={5}
    floatIntensity={0.1}
    >

    <Text  
    color={'orange'}
    position={[0, 4, 0]} >Hello!</Text>
    
    </Float>

    


    <mesh castShadow ref={boxRef} position={[4,-1,-1.5]}>
  <boxGeometry></boxGeometry>
  <meshStandardMaterial color={'darkorange'}></meshStandardMaterial>
</mesh>

    <Text castShadow  
    color={'white'}
    position={[5, -2, -8]} >Let's get serious</Text>





 
<mesh castShadow ref={boxRef2} position={[-4,-1,-1.5]}>
  <boxGeometry></boxGeometry>
  <meshStandardMaterial>
  <GradientTexture
      stops={[0, 1]} // As many stops as you want
      colors={['darkorange', 'yellow']} // Colors need to match the number of stops
      size={1024} // Size is optional, default = 1024
    />
  </meshStandardMaterial>
</mesh>
    <Text castShadow 
    color={'orange'}
    position={[-5, -2, -8]} >Let's get creative</Text>


    
   

    

    </>
}