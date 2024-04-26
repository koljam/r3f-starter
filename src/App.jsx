import { Canvas } from "@react-three/fiber";
import { Experience } from "./scene/Experience";
import UiLayer from "./ui/UiLayer";

function App() {
  return (
    <>
      <UiLayer />
      <Canvas shadows camera={{ position: [10, 3, -100], fov: 55 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
