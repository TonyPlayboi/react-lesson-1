import {  useThree, extend, useFrame } from "@react-three/fiber"
import {  useScroll, ScrollControls, PresentationControls,
        ContactShadows,useTexture ,Loader, Text3D,
        useAnimations ,Clone ,useGLTF, Float , Text ,  
        Html, OrbitControls, PerspectiveCamera,  Environment, Sparkles} from "@react-three/drei"
        
import { useRef, useEffect, useState, useLayoutEffect } from "react"
import * as THREE from 'three'
import gsap from "gsap"
import { Perf } from "r3f-perf"
import { DoubleSide } from "three"
import { useLoader  } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"



export default function Room (props) 
{
    const cameraAnimation = useRef()
    const tvOclude = useRef()

    const nodes = useGLTF('./Doctor1.glb')
    const tv = useGLTF('./tv2.glb')
   

    console.log(nodes.animations)
   
    const cameraRef = useRef()
    const kaktusGroup= useRef()
    const cubeRef = useRef()
    
    

    
    const bujanka = useAnimations(nodes.animations, nodes.scene)
  

   
    



    const [active, setActive] = useState(false)


  useFrame(({}) =>{
    cubeRef.current.rotation.y += 0.01

  })
  

    useEffect(() =>
    {
      
      const jechana = bujanka.actions.Doctor
      const jechana1 = bujanka.actions.Action
      jechana1.play()
      jechana.play()
    
      
      
      
    }, [])

  

  return <>

<PresentationControls
    global
    rotation={ [ 0.1, 0, 0 ] }
    polar={ [ - 0.4, 0.2 ] }
    azimuth={ [ - 0.5, 0.2 ] }
    config={ { mass: 2, tension: 400 } }
    snap={ { mass: 4, tension: 400 } }
>
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

    <mesh
    ref={cubeRef}
    scale={0.5}
    onClick={(event) => setActive(!active)}
    position={[-3,0,0]}
    
    >
      <boxGeometry></boxGeometry>
      <meshNormalMaterial></meshNormalMaterial>
    </mesh>
  <primitive
  
  ref={tvOclude}
  object={tv.scene}
  scale={1.5}
  position={[1.4,0.8,-1]}
  >
    <Html
    
    scale={active ? 1.2 : 0.6}
transform
wrapperClass="htmlScreen"
distanceFactor={ 0.6 }
position={[0.05,0,1,0.1]}


>
  <iframe src="https://www.videotools.pl/"
  
  ></iframe>
</Html>

  </primitive>
  
 <primitive
 position={[-3.5,-0.5,0]}
 rotation={[0,0.2,0]}

 scale={0.4}

 object={nodes.scene} ></primitive>





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
</PresentationControls>


   <Environment
   
   preset="city"
   ></Environment>


 

   <Perf
     position="top-left">
  </Perf>

  <PerspectiveCamera
  ref={cameraAnimation}
  makeDefault
 
  position={[0,0.3,20]}
  fov={13}
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