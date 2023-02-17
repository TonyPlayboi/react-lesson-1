import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import * as THREE from 'three'
import { StrictMode } from 'react'
import { Perf } from 'r3f-perf'



const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
   
   <Canvas
      shadows

      camera={{
         
         fov: 30,
         
          
       
      }}
   >
     <color args={ [ 'red']} attach="background"></color> 
   <Experience>
   
   </Experience>
   </Canvas>
  
)