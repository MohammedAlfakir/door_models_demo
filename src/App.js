import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DoorModels from "door_models";

function App() {
  const doorMaterials = {
    D_SRF_DECOR_2:
      "https://threejs.org/examples/textures/hardwood2_diffuse.jpg",
    D_SRF_DECOR: "#A52A2A",
    D_GASKET: "#1A1A1A",
    D_FR_COLOR: { value: "#B0E0E6", opacity: 0.5 },
    Body: "#8F7470",
    D_PRF_COLOR: "#4C4A48",
    Hinge: "#C0C0C0",
    HingeCuts: "#A9A9A9",
  };

  return (
    <Canvas
      camera={{ fov: 50, position: [0, 0, 5] }}
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Light */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7.5]} intensity={1} castShadow />
      {/* Door Model */}
      <DoorModels
        doorName="P_SD_FH_AF40_40OCC"
        materials={doorMaterials}
        totalWidth={1000}
        totalHeight={2400}
        totalDepth={120}
        doorPivot="left"
        doorOpening="out"
      />
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
