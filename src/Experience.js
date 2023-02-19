import {  useThree, extend, useFrame } from "@react-three/fiber"
import { PresentationControls ,ContactShadows,useTexture ,Loader, Text3D,  useAnimations ,Clone ,useGLTF, GradientTexture ,softShadows, BakeShadows, useHelper, MeshReflectorMaterial ,Float , Text ,  Html, PivotControls,  TransformControls, OrbitControls, CameraShake, PerspectiveCamera, SoftShadows, Sparkles, Environment, Center, Cloud } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
import * as THREE from 'three'
import { Perf } from "r3f-perf"
import { DoubleSide } from "three"
import { useLoader  } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


 
export default function Experience ()

{
    
   
    const cameraAnimation = useRef()


    const nodes = useGLTF('./roomAJ1.glb')
    const kaktus = useGLTF('./kaktus2.glb')
    const bakedTexture = useTexture('./roomAJ1.jpg')
    const bakedTexture1 = useTexture('./camera.jpg')
    const cameraRef = useRef()
    bakedTexture.flipY = false
    bakedTexture1.flipY = false


    console.log(nodes)
   
    




   const animations = useAnimations(kaktus.animations, kaktus.scene)
   console.log(animations)

    useEffect(() =>
    {
      const action = animations.actions.atak
      action.play()
    }, [])

  

  return <>





<PresentationControls
    global
    rotation={ [ 0.13, 0.1, 0 ] }
    polar={ [ - 0.4, 0.2 ] }
    azimuth={ [ - 1, 0.75 ] }
    config={ { mass: 2, tension: 400 } }
    snap={ { mass: 4, tension: 400 } }

>


<primitive 
position={[-2,-0.9,0.4]}
rotation={[0,1,0]}

object={kaktus.scene} ></primitive>
   
<mesh
receiveShadow
position={[-2,-0.9,0]}
rotation={[0,1,0]}
castShadow
geometry={nodes.nodes.roomAj.geometry}
>
  <meshBasicMaterial map={ bakedTexture }></meshBasicMaterial>

 
</mesh>
<Float>
<Text3D
        font="./fonts/helvetiker_regular.typeface.json"
        size={ 0.55 }
        
        position={ [ 1, 0.75, 0 ] }
        rotation-y={ - 0.5 }
        height={ 0.2 }
        curveSegments={ 12 }
        bevelEnabled
        bevelThickness={ 0.02 }
        bevelSize={ 0.02 }
        bevelOffset={ 0 }
        bevelSegments={ 5 }
        
        
    >
        Let's get 
       <meshStandardMaterial
       color={"yellow"}
       ></meshStandardMaterial>
    </Text3D>

    <Text3D
      castShadow
        font="./fonts/helvetiker_regular.typeface.json"
        size={ 0.55 }
        
        position={ [ 1.1, -0.1, 0 ] }
        rotation-y={ - 0.5 }
        height={ 0.2 }
        curveSegments={ 12 }
        bevelEnabled
        bevelThickness={ 0.02 }
        bevelSize={ 0.02 }
        bevelOffset={ 0 }
        bevelSegments={ 5 }
        
        
    >
        serious
        <meshStandardMaterial
        color={'orange'}
        ></meshStandardMaterial>
    </Text3D>
</Float>


</PresentationControls>







   <Environment
   
   preset="city"
   ></Environment>
  <ContactShadows
    position-y={-0.9}
    position-z={0.2}
    position-x={0}
    opacity={1}
    scale={30}
    blur={1.5}
  ></ContactShadows>

 

   <Perf
     position="top-left">
  </Perf>

  <PerspectiveCamera
  ref={cameraAnimation}
  makeDefault
 
  position={[-0.6,0.5,20]}
  fov={13}
>
</PerspectiveCamera>
{/* 
  <OrbitControls  
     makeDefault>
  </OrbitControls> */}
  
 <pointLight
  position={[-2,4,2]}
  intensity={0.9}
  color={'white'}
  
  >


 
 </pointLight>

  </>
}