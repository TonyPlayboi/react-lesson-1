import {  useThree, extend, useFrame } from "@react-three/fiber"
import { Cloud, Text3D,  useAnimations ,Clone ,useGLTF, GradientTexture ,softShadows, BakeShadows, useHelper, MeshReflectorMaterial ,Float , Text ,  Html, PivotControls,  TransformControls, OrbitControls, CameraShake, PerspectiveCamera, SoftShadows, Sparkles } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
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
    const cameraAnimation = useRef()

   const krowa = useGLTF('./gowno14.glb')
   const burger = useGLTF('./burger.glb')
   const animations = useAnimations(krowa.animations, krowa.scene)
   console.log(krowa)

  //  useEffect(() =>
  //  {
  //     const action = animations.actions.sraka
  //     action.play()

      

  //     window.setTimeout(() => 
  //     {

  //       animations.actions.sraka.play()
  //       animations.actions.sraka.crossFadeFrom(animations.actions.sraka, 1)
  //     }, 2000)
  //  }, [])
  
    useFrame(() =>{

        
      
      
     })

  return <>

  <PerspectiveCamera
  ref={cameraAnimation}
  makeDefault
  position={[0,2,7]}
  >

  </PerspectiveCamera>

<primitive ref={kowRef} object={ krowa.scene} scale={1.5 } position={[0,1,1]}
 ></primitive>


  <Perf
     position="top-left">
  </Perf>

  




    <Sparkles
    position={[0,1,1.7]}
    size={[5,10,10]}
    scale={[0.25,0.4, 0.25]}
    count={40}
    color= {'lightgreen'}
   
    >

    </Sparkles>

    

  <OrbitControls  
     makeDefault>
  </OrbitControls>
  
  
  <ambientLight 
    intensity={0.3}>
  </ambientLight>

  <pointLight 
  color={'orange'}
  intensity={1}
  position={[0,0.3,2.8]}
  ></pointLight>
   <pointLight 
  color={'white'}
  intensity={1}
  position={[1,1,-2]}
  ></pointLight>

   
 
 <Text3D 
      font="./fonts/helvetiker_regular.typeface.json"
      position={[2,0,0]}
      rotation={[0,0,0]}
      size={ 0.75 }
      height={ 0.2 }
      curveSegments={ 12 }
      bevelEnabled
      bevelThickness={ 0.02 }
      bevelSize={ 0.02 }
      bevelOffset={ 0 }
      bevelSegments={ 5 } >
  Gejuch
  <meshStandardMaterial color={'orange'}></meshStandardMaterial>
 </Text3D>





  </>
}