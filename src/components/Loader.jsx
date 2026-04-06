import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={{ color: "white" }}>
        {progress.toFixed(0)}% loaded
      </div>
    </Html>
  );
};

export default CanvasLoader;