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
    const cameraRef = useRef()
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
    <Html
    
    position={[1.8,1,0]}
    rotation-y={-1.6}
    scale={0.2}
    transform>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uDjg0XqYiFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Html>
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