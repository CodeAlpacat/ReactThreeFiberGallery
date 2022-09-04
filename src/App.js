import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  Image,
  useCursor,
  Environment,
} from "@react-three/drei";
import space from "./space.glb";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Ground } from "./components/Ground";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Player } from "./components/Player";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { New_gallery } from "./components/New_gallery";
import { useConvexPolyhedron } from "@react-three/cannon";
// const Scene = () => {
//   const [ref] = useConvexPolyhedron(() => ({
//     mass: 10,
//   }));
//   const gltf = useLoader(GLTFLoader, character);
//   return (
//     <primitive
//       scale={0.3}
//       object={gltf.scene}
//       position={[0, 100, 0]}
//       ref={ref}
//     />
//   );
// };



const Floor = (props) => {
  const [ref] = usePlane(() => ({ mass: 0, rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref} receiveShadow opacity={0.1}>
      <planeBufferGeometry attach="geometry" args={[0, 0]} />
      <meshStandardMaterial attach="material" opacity={0.1} />
    </mesh>
  );
};

const Box = (props) =>  {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [0.4, 0.2, 0.5],
    ...props,
  }));
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxGeometry />
      <meshLambertMaterial color="hotpink" />
    </mesh>
  );
}

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        {/* <Sky sunPosition={[100, 20, 100]} /> */}
        <ambientLight intensity={0.25} />
        <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
        {/* <OrbitControls /> */}
        <Physics gravity={[0, -200, 0]}>
          {/* <Scene /> */}
          <Floor position={[0, 0, 0]} />
          <New_gallery position={[0, 0, 0]} />
          <Box/>
          <Player position={[10, 20, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
