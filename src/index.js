import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas, useThree } from '@react-three/fiber'
import Experience from './Experience.js'
import * as THREE from 'three'
import { ScrollControls} from "@react-three/drei"

import { StrictMode,  } from 'react'
import { Perf } from 'r3f-perf'




const root = ReactDOM.createRoot(document.querySelector('#root'))




root.render(

   
   
   <Canvas

      resize={true}
      shadows

      camera={{
         
         fov: 50,
         
          
       
      }}
   >
     {/* <color args={ [ '#695b5b']} attach="background"></color>  */}


   <Experience
 
   ></Experience>
   


   </Canvas>
 
   
   
  
)