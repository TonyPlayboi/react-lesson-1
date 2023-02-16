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

   const krowa = useGLTF('./Beaver2.glb')
   const burger = useGLTF('./burger.glb')
   const animations = useAnimations(krowa.animations, krowa.scene)
   console.log(krowa)

   useEffect(() =>
   {
      const action = animations.actions.sraka
      action.play()

      

      window.setTimeout(() => 
      {

        animations.actions.sraka.play()
        animations.actions.sraka.crossFadeFrom(animations.actions.sraka, 1)
      }, 2000)
   }, [])
  
    useFrame(() =>{

        
      burgerRef.current.rotation.y += 0.01
      
     })

  return <>

  <PerspectiveCamera
  ref={cameraAnimation}
  makeDefault
  position={[0,0,15]}
  >

  </PerspectiveCamera>

<primitive ref={kowRef} object={ krowa.scene} scale={1 } position={[4,1,1]}
 ></primitive>


  <Perf
     position="top-left">
  </Perf>

    <Sparkles
    size={[20,20,20]}
    scale={3}
    count={40}
    color= {'lightgreen'}
    >

    </Sparkles>

    <Cloud
    color="red"
    ></Cloud>

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
   
   <Float speed={10}>
 <Text3D 
      font="./fonts/helvetiker_regular.typeface.json"
      position={[1,-3,0]}
      size={ 0.75 }
      height={ 0.2 }
      curveSegments={ 12 }
      bevelEnabled
      bevelThickness={ 0.02 }
      bevelSize={ 0.02 }
      bevelOffset={ 0 }
      bevelSegments={ 5 } >
  Gejuch
  <meshStandardMaterial color={'darkorange'}></meshStandardMaterial>
 </Text3D>
 </Float>



<Clone  ref={burgerRef} object={ burger.scene} scale={0.5} position={[0,1,0]}

></Clone>

  </>
}