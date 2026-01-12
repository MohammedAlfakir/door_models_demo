import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DoorModels from "door_models";

function App() {
  const doorMaterials = {
    D_SRF_DECOR_2: "EG_H1181",
    D_SRF_DECOR: "https://threejs.org/examples/textures/hardwood2_diffuse.jpg",

    D_GASKET: "#1A1A1A",
    D_FR_COLOR: { value: "#B0E0E6", opacity: 0.5 },
    Body: "#8F7470",
    D_PRF_COLOR: "#4C4A48",
    Hinge: "#C0C0C0",
    HingeCuts: "#A9A9A9",
    handleColor: "#A9A9A9",
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
      {/* Axes Helper */}
      <axesHelper size={10} color="red" />
      {/* Grid Helper */}
      <gridHelper size={10} color="green" />
      <DoorModels
        doorName="P_SD_FH_AF40_40"
        materials={doorMaterials}
        totalWidth={974}
        totalHeight={2700}
        totalDepth={109}
        doorPivot="left"
        doorOpening="out"
        is2D={{
          value: false,
          position: [0, 0, 0],
          dimensions: [0.5, 0.1, 0.1],
        }}
      />
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
