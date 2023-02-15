import {  useThree, extend, useFrame } from "@react-three/fiber"
import { useAnimations ,Clone ,useGLTF, GradientTexture ,softShadows, BakeShadows, useHelper, MeshReflectorMaterial ,Float , Text ,  Html, PivotControls,  TransformControls, OrbitControls, CameraShake, PerspectiveCamera, SoftShadows } from "@react-three/drei"
import { useRef, useEffect } from "react"
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
   

   const krowa = useGLTF('./Cube5.glb')
   const burger = useGLTF('./burger.glb')
   const animations = useAnimations(krowa.animations, krowa.scene)
   console.log(krowa)

   useEffect(() =>
   {
      const action = animations.actions.bujana
      action.play()

      window.setTimeout(() => 
      {

        animations.actions.shrink.play()
        animations.actions.shrink.crossFadeFrom(animations.actions.bujana, 1)
      }, 2000)
   }, [])
  
    useFrame(() =>{

        
      burgerRef.current.rotation.y += 0.01
      
     })

  return <>

<primitive ref={kowRef} object={ krowa.scene} scale={1 } position={[4,1,1]}
 ></primitive>


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
   
   
 




<Clone  ref={burgerRef} object={ burger.scene} scale={0.5} position={[0,1,0]}

></Clone>

  </>
}