import { Canvas } from "@react-three/fiber";
import { Experience } from "./scene/Experience";
import UiLayer from "./ui/UiLayer";

function App() {
  return (
    <>
      <UiLayer />
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 55 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
