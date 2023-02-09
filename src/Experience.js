import {  useThree, extend, useFrame } from "@react-three/fiber"
import {  MeshReflectorMaterial ,Float, Text,  Html, PivotControls,  TransformControls, OrbitControls, CameraShake } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'
import { useControls } from "leva"



export default function Experience ()

{
    const { position, color } = useControls({
      position: 
      {
          value: -2,
          min: -4,
          max: 5,
          step: 0.01
      },
      color: '#ff0000'
    })
    const { camera, gl} = useThree()
    const groupRef = useRef()
    const planeRef = useRef()
    const boxRef = useRef()
    const sphereRef = useRef()
     

  
    return <>

    <OrbitControls makeDefault></OrbitControls>

    <directionalLight position={[1, 2, 3]} ></directionalLight>

    <ambientLight intensity={0.5}></ambientLight>


    <group
      ref ={groupRef}>
    <mesh  ref = {boxRef} rotation-y={10} scale={2} position-x={position}>
       <boxGeometry></boxGeometry>
       <meshStandardMaterial color={color} ></meshStandardMaterial>
    </mesh>
    
    <TransformControls object={boxRef} mode="scale" ></TransformControls>
    <TransformControls object={boxRef} mode="rotate" ></TransformControls>
    <TransformControls object={boxRef} mode="translate" ></TransformControls>


    <Float
    speed={10}>
<PivotControls hoveredColor={'#ff3333'} axisColors={ [ '#9381ff', '#ff4d6d', '#7ae582']} lineWidth={4} depthTest={ false }anchor={[0,0,0]} scale={1.2} >
     <mesh ref= { sphereRef }  position-x={1.8}>
  
       <sphereGeometry></sphereGeometry>

       <meshStandardMaterial   color = "pink"> </meshStandardMaterial>

       <Html wrapperClass="label" 
       center
       distanceFactor={ 8 }
        >
        
        <button
        occlude = { [ boxRef]} className="chuj">Gowno</button></Html>
        
    </mesh>
 </PivotControls>
 </Float>



    </group>
    <mesh   rotation-x={30}  scale={6}  position-y={-1.2}>
        <planeGeometry>   </planeGeometry>
        {/* <meshStandardMaterial color="green" side= {THREE.DoubleSide} ></meshStandardMaterial> */}
        <MeshReflectorMaterial 
        resolution={512}
        mirror = {0.75}
        color="greenyellow"
        
        ></MeshReflectorMaterial>
    </mesh>
    <Float
    speed={10}>
    <Text  position={[0, 4, 0]} >Sosna Pawel</Text>

    </Float>
    <CameraShake
    intensity={0.4}
    ></CameraShake>

    

    
    

    </>
}