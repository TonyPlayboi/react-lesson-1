import {  useThree, extend, useFrame } from "@react-three/fiber"
import { Clone ,useGLTF, GradientTexture ,softShadows, BakeShadows, useHelper, MeshReflectorMaterial ,Float , Text ,  Html, PivotControls,  TransformControls, OrbitControls, CameraShake, PerspectiveCamera, SoftShadows } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'
import { Perf } from "r3f-perf"
import { DoubleSide } from "three"
import { useLoader  } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


 
export default function Experience ()

{
    const { camera, gl} = useThree()
    const boxRef = useRef()
    const boxRef2 = useRef()
    const kowRef = useRef()
    const kowRef1 = useRef()
    const kowRef2 = useRef()
    const burgerRef = useRef()
   

   const krowa = useGLTF('./krowawa4.glb')
   const burger = useGLTF('./burger.glb')
  

    useFrame(() =>{

        kowRef.current.rotation.y += 0.01
        kowRef1.current.rotation.z += 0.01
        kowRef2.current.rotation.x += 0.01
        burgerRef.current.rotation.y += 0.01
      
    })

  return <>


  <Perf
     position="top-left">
  </Perf>

    
  <OrbitControls  
     makeDefault>
  </OrbitControls>
  

  <pointLight
    distance={7.5}
    intensity={2} 
    position={[-4,2,-2]}>
  </pointLight>

  <pointLight
    distance={7.5}
    intensity={2} 
    position={[4.5,2,-2]}>
  </pointLight>
    
   

  <ambientLight 
    intensity={0.3}>
  </ambientLight>

 
  <pointLight 
    position={[5,7,3]} 
    intensity={5}>
  </pointLight>
   
   
  <Clone ref={kowRef} object={ krowa.scene} scale={0.5} position={[6,1,0]}

  ></Clone>

  <Clone ref={kowRef1} object={ krowa.scene} scale={0.5} position={[0,1,0]}

  ></Clone>

  <Clone ref={kowRef2} object={ krowa.scene} scale={0.5} position={[-8,1,0]}

  ></Clone>

<Clone  ref={burgerRef} object={ burger.scene} scale={0.5} position={[-8,1,0]}

></Clone>

  </>
}