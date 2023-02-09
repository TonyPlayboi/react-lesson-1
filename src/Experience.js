import {  useThree, extend, useFrame } from "@react-three/fiber"
import { BakeShadows, useHelper, MeshReflectorMaterial ,Float, Text,  Html, PivotControls,  TransformControls, OrbitControls, CameraShake } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'
import { Perf } from "r3f-perf"



export default function Experience ()

{
    const { camera, gl} = useThree()
    const groupRef = useRef()
    const planeRef = useRef()
    const boxRef = useRef()
    const sphereRef = useRef()
    const directionalLightRef = useRef()
    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 2)
     

  
    return <>

    {/* <BakeShadows></BakeShadows> */}

    <Perf position="top-left"
    ></Perf>
    
    <OrbitControls makeDefault></OrbitControls>

    <directionalLight ref={directionalLightRef} castShadow position={[1, 2, 3]} ></directionalLight>

    <ambientLight intensity={0.5}></ambientLight>
    
    <TransformControls object={directionalLightRef} mode="translate" ></TransformControls>
    

                          {/* Floatująca kostaq */}
  <Float  speed={10}>
    <PivotControls hoveredColor={'#ff3333'} axisColors={ [ '#9381ff', '#ff4d6d', '#7ae582']} lineWidth={4} depthTest={ false }anchor={[0,0,0]} scale={1.2} >
     <mesh ref= { sphereRef } castShadow  position-x={1.8}>
  
       <sphereGeometry></sphereGeometry>

       <meshStandardMaterial   color = "pink"> </meshStandardMaterial>

       <Html wrapperClass="label"  center distanceFactor={ 8 } >
        
        <button className="chuj">Gowno</button>
        </Html>    
     </mesh>
    </PivotControls>
  </Float>
                         {/* Floatująca kostaq */}



    
    <Float>
    <mesh receiveShadow ref={planeRef} rotation-z={31.4}    rotation-x={31.3}  scale={18}  position-y={-1.3} position-z={-8}>
        <planeGeometry>   </planeGeometry>
        {/* <meshStandardMaterial color="green" side= {THREE.DoubleSide} ></meshStandardMaterial> */}
        <MeshReflectorMaterial 
        resolution={512}
        mirror = {0.75}
        color="greenyellow"
        
        ></MeshReflectorMaterial>
    </mesh>
    </Float>
    <Float
    speed={10}>
    <Text  position={[0, 4, 0]} >Sosna Pawel</Text>

    </Float>


                              {/* Ground */}

    <mesh receiveShadow scale={14} rotation-x={29.9} position-y={-2}>
      <planeBufferGeometry></planeBufferGeometry>
        <meshStandardMaterial color={'green'}></meshStandardMaterial>
      
    </mesh>

                            {/* Ground */}


                          
    <CameraShake intensity={0.4}></CameraShake>


                          

    

    
    

    </>
}