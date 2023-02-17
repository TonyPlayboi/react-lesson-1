import {  useThree, extend, useFrame } from "@react-three/fiber"
import { Loader, Text3D,  useAnimations ,Clone ,useGLTF, GradientTexture ,softShadows, BakeShadows, useHelper, MeshReflectorMaterial ,Float , Text ,  Html, PivotControls,  TransformControls, OrbitControls, CameraShake, PerspectiveCamera, SoftShadows, Sparkles, Environment } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
import * as THREE from 'three'
import { Perf } from "r3f-perf"
import { DoubleSide } from "three"
import { useLoader  } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


 
export default function Experience ()

{
    const { camera, gl} = useThree()
    const kowRef = useRef()
    const cameraAnimation = useRef()


   const krowa = useGLTF('./gowno14.glb')




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

  
    // useFrame(() =>{

        
      

    //   burgerRef.current.rotation.y += 0.01

    //  })

  return <>



  <PerspectiveCamera
  ref={cameraAnimation}
  makeDefault
  position={[0,0,12]}
  fov={13}

  >

  </PerspectiveCamera>


<Environment

preset="forest"
></Environment>


<primitive ref={kowRef} object={ krowa.scene} scale={1 } position={[0,0,0]}

 >

 </primitive>

 <Html
 
 
 occlude={[kowRef]}
  rotation-y={1.65}
  position-x={1}
  scale={0.1}
  transform
  >
  <iframe className="klip" width="560" height="315" src="https://www.youtube.com/embed/uDjg0XqYiFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Html>


  <Perf
     position="top-left">
  </Perf>




    <Sparkles
    position={[0,1,1.7]}
    size={[5,10,10]}
    scale={[0.25,0.4, 0.25]}
    count={40}
    color= {'lightgreen'}
    ></Sparkles>


  <OrbitControls  
     makeDefault>
  </OrbitControls>
  
  

  </>
}