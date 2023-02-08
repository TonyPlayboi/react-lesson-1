import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import * as THREE from 'three'
import { StrictMode } from 'react'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
   <StrictMode>
   <Canvas
   // flat
      
      gl={{
         antialias: true,
         toneMapping: THREE.ACESFilmicToneMapping,
         
      }}
   
      camera={{
         fov: 60
      }}
   >
      
   <Experience>
   
   </Experience>
   </Canvas>
   </StrictMode>
)