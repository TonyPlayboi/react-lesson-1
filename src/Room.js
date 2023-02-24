import {  useThree, extend, useFrame } from "@react-three/fiber"
import {  useScroll, ScrollControls,
        ContactShadows,useTexture ,Loader, Text3D,
        useAnimations ,Clone ,useGLTF, Float , Text ,  
        Html, OrbitControls, PerspectiveCamera,  Environment} from "@react-three/drei"
        
import { useRef, useEffect, useState, useLayoutEffect } from "react"
import * as THREE from 'three'
import gsap from "gsap"
import { Perf } from "r3f-perf"
import { DoubleSide } from "three"
import { useLoader  } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export const FLOOR_HEIGHT = 2.3
export const NB_FLOORS = 3

export default function Room (props) 
{
    const cameraAnimation = useRef()


    const nodes = useGLTF('./Doctor1.glb')
    const kaktus = useGLTF('./kaktus2.glb')
    const bakedTexture = useTexture('./Kaktuisy.jpg')

    console.log(nodes.animations)
   
    const cameraRef = useRef()
    const kaktusGroup= useRef()
    

    const animations = useAnimations(kaktus.animations, kaktus.scene)
    const bujanka = useAnimations(nodes.animations, nodes.scene)
  

    bakedTexture.flipY = false
    



    const [active, setActive] = useState(false)

    const ref = useRef()
    const tl = useRef()

  

    useEffect(() =>
    {
      const action = animations.actions.atak
      const jechana = bujanka.actions.Doctor
      const jechana1 = bujanka.actions.Action
      jechana1.play()
      jechana.play()
    
      
      
      action.play()
    }, [])

  

  return <>
<group
position={[0,-0.5,0]}
>

<ContactShadows
    position-y={-0.95}
    position-z={0.2}
    position-x={0}
    opacity={1}
    scale={30}
    blur={1.5}
  ></ContactShadows>
 <primitive
 position={[-3.5,-0.5,0]}
 rotation={[0,0.2,0]}

 scale={0.4}

 object={nodes.scene} ></primitive>



<Html
transform
wrapperClass="htmlScreen"
distanceFactor={ 1.17 }
position={[1.5,0.3,0]}

>
  <iframe src="https://www.videotools.pl/"
  
  ></iframe>
</Html>

</group>


<group
position={[-2,1.2,-1]}
scale={0.75}
rotation-y={0.3}

>
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

</group>



   <Environment
   
   preset="city"
   ></Environment>


 

   <Perf
     position="top-left">
  </Perf>

  <PerspectiveCamera
  ref={cameraAnimation}
  makeDefault
 
  position={[-0.6,0.5,20]}
  fov={14}
>
</PerspectiveCamera>
  
 <pointLight
  position={[-2,4,2]}
  intensity={0.9}
  color={'white'}
  
  >
</pointLight>

  </>
}