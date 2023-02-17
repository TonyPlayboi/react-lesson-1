import {  useThree, extend, useFrame } from "@react-three/fiber"
import { useTexture ,Loader, Text3D,  useAnimations ,Clone ,useGLTF, GradientTexture ,softShadows, BakeShadows, useHelper, MeshReflectorMaterial ,Float , Text ,  Html, PivotControls,  TransformControls, OrbitControls, CameraShake, PerspectiveCamera, SoftShadows, Sparkles, Environment } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
import * as THREE from 'three'
import { Perf } from "r3f-perf"
import { DoubleSide } from "three"
import { useLoader  } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


 
export default function Experience ()

{
    
   
    const cameraAnimation = useRef()


    const nodes = useGLTF('./room.glb')
    const camera = useGLTF('./camera14.glb')
    const bakedTexture = useTexture('./room.jpg')
    const bakedTexture1 = useTexture('./camera.jpg')
    bakedTexture.flipY = false
    bakedTexture1.flipY = false

   
    




   const animations = useAnimations(camera.animations, camera.scene)
   console.log(animations)

    useEffect(() =>
    {
      const action = animations.actions.kurwa
      action.play()
    }, [])

  

  return <>

<primitive
object={camera.scene}
rotation={[0,4.3,0]}
></primitive>

 

  

  <mesh
  geometry={nodes.nodes.Plane001.geometry}
  >
    <meshBasicMaterial map={ bakedTexture }></meshBasicMaterial>
  </mesh>

 

   <Perf
     position="top-left">
  </Perf>

  <PerspectiveCamera
  ref={cameraAnimation}
  makeDefault
  position={[-12,6,8]}
  fov={13}
>
</PerspectiveCamera>

  <OrbitControls  
     makeDefault>
  </OrbitControls>
  
 <pointLight
  position={[-2,4,2]}
  intensity={0.9}
  color={'white'}
  
  >


 
 </pointLight>

  </>
}