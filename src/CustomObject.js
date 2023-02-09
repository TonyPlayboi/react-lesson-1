import * as THREE from 'three'
import { useRef, useEffect } from 'react'


export default function CustomObject()
{

    const geometryRef = useRef()


    const verticesCount = 10 * 3
    const positions = new Float32Array(verticesCount * 3)

    for(let i = 0; i < verticesCount * 3; i++)
    {
        positions[i] = (Math.random() - 0.5) * 3
    }

    useEffect(() =>
    {

        geometryRef.current.computeVertexNormals()

    }, [])


    return <>
    
    
    <mesh>
        <bufferGeometry ref={ geometryRef }>
            <bufferAttribute  attach="attributes-position"
                                count={ verticesCount }
                                itemSize = {3}
                                array={positions}>
                                
+
            </bufferAttribute>
        </bufferGeometry>
        <meshStandardMaterial color={"red"} side= {THREE.DoubleSide}></meshStandardMaterial>
    </mesh>
    </>
    
    
   
}