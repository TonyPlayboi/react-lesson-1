import { OrbitControls, ScrollControls } from "@react-three/drei";
import Room from "./Room";
 
export default function Experience (props)

{
    
  return (
    <>
      <ambientLight intensity={0.1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls   pages={3} damping={4.50}>
       <Room></Room>
      </ScrollControls>
    </>
  );
   
}

