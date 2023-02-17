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

<<<<<<< HEAD
   const krowa = useGLTF('./gowno14.glb')
=======
   const krowa = useGLTF('./Beaver2.glb')
>>>>>>> ac0b740d25d9076d47f323101ada146a83e176b2
   const burger = useGLTF('./burger.glb')
   const animations = useAnimations(krowa.animations, krowa.scene)
   console.log(krowa)

<<<<<<< HEAD
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
=======
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
>>>>>>> ac0b740d25d9076d47f323101ada146a83e176b2
  
    useFrame(() =>{

        
<<<<<<< HEAD
      
      
=======
      burgerRef.current.rotation.y += 0.01
      
>>>>>>> ac0b740d25d9076d47f323101ada146a83e176b2
     })

  return <>

  <PerspectiveCamera
  ref={cameraAnimation}
  makeDefault
<<<<<<< HEAD
  position={[0,2,7]}
=======
  position={[0,0,15]}
>>>>>>> ac0b740d25d9076d47f323101ada146a83e176b2
  >

  </PerspectiveCamera>

<<<<<<< HEAD
<primitive ref={kowRef} object={ krowa.scene} scale={1.5 } position={[0,1,1]}
=======
<primitive ref={kowRef} object={ krowa.scene} scale={1 } position={[4,1,1]}
>>>>>>> ac0b740d25d9076d47f323101ada146a83e176b2
 ></primitive>


  <Perf
     position="top-left">
  </Perf>

<<<<<<< HEAD
  




    <Sparkles
    position={[0,1,1.7]}
    size={[5,10,10]}
    scale={[0.25,0.4, 0.25]}
    count={40}
    color= {'lightgreen'}
   
=======
    <Sparkles
    size={[20,20,20]}
    scale={3}
    count={40}
    color= {'lightgreen'}
>>>>>>> ac0b740d25d9076d47f323101ada146a83e176b2
    >

    </Sparkles>

<<<<<<< HEAD
    
=======
    <Cloud
    color="red"
    ></Cloud>
>>>>>>> ac0b740d25d9076d47f323101ada146a83e176b2

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

   
<<<<<<< HEAD
 
 <Text3D 
      font="./fonts/helvetiker_regular.typeface.json"
      position={[2,0,0]}
      rotation={[0,0,0]}
=======
   <Float speed={10}>
 <Text3D 
      font="./fonts/helvetiker_regular.typeface.json"
      position={[1,-3,0]}
>>>>>>> ac0b740d25d9076d47f323101ada146a83e176b2
      size={ 0.75 }
      height={ 0.2 }
      curveSegments={ 12 }
      bevelEnabled
      bevelThickness={ 0.02 }
      bevelSize={ 0.02 }
      bevelOffset={ 0 }
      bevelSegments={ 5 } >
  Gejuch
<<<<<<< HEAD
  <meshStandardMaterial color={'orange'}></meshStandardMaterial>
 </Text3D>




=======
  <meshStandardMaterial color={'darkorange'}></meshStandardMaterial>
 </Text3D>
 </Float>



<Clone  ref={burgerRef} object={ burger.scene} scale={0.5} position={[0,1,0]}

></Clone>
>>>>>>> ac0b740d25d9076d47f323101ada146a83e176b2

  </>
}