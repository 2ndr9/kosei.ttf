import React, { useRef, useEffect } from "react";

const PureCanvas = React.forwardRef((props, ref: any) => <canvas ref={ref} />);

function App() {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx1: any = canvasRef.current!;
    const ctx = ctx1.getContext("2d");

    const handleResize = (e: any) => {
      ctx.canvas.height = window.innerHeight;
      ctx.canvas.width = window.innerWidth;
    };

    handleResize("e");
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <PureCanvas ref={canvasRef} />;
}

export default App;
