import React, { useRef, useState } from "react";

interface IRect {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

const Canvas: React.FC = (props) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let mouseX: number | null = null;
  let mouseY: number | null = null;
  const [base64Data, setbase64Data] = useState();

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    return canvas.getContext("2d");
  };

  const OnClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.button !== 0) {
      return;
    }
    const canvas: any = canvasRef.current;
    const rect: IRect = canvas.getBoundingClientRect();
    const x = ~~(e.clientX - rect.left);
    const y = ~~(e.clientY - rect.top);
    Draw(x, y);
  };

  const OnMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.buttons !== 1) {
      return;
    }
    const canvas: any = canvasRef.current;
    const rect: IRect = canvas.getBoundingClientRect();
    const x = ~~(e.clientX - rect.left);
    const y = ~~(e.clientY - rect.top);
    Draw(x, y);
  };

  const DrawEnd = (e: React.MouseEvent<HTMLCanvasElement>) => {
    mouseX = null;
    mouseY = null;
    Save();
  };

  const Draw = (x: number, y: number) => {
    const ctx = getContext();
    ctx.beginPath();
    ctx.globalAlpha = 1.0;
    if (mouseX === null || mouseY === null) {
      ctx.moveTo(x, y);
    } else {
      ctx.moveTo(mouseX, mouseY);
    }
    ctx.lineTo(x, y);
    ctx.lineCap = "square";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    mouseX = x;
    mouseY = y;
  };

  const Reset = () => {
    const ctx = getContext();
    // ctx.clearRect(0, 0, length, length);

    Save();
  };

  const Save = () => {
    const canvas: any = canvasRef.current;
    setbase64Data(canvas.toDataURL("image/png", 0.85));
  };

  return (
    <section>
      <div>
        <h1>あ</h1>
        <div
          id="canvasParent"
          style={{ width: "100%", height: 0, paddingTop: "100%" }}
        >
          <canvas
            id="canvas"
            onMouseDown={OnClick}
            onMouseMove={OnMove}
            onMouseUp={DrawEnd}
            onMouseOut={DrawEnd}
            ref={canvasRef}
            style={{
              border: "2px solid",
            }}
          />
        </div>
      </div>
      <div>
        <button onClick={Reset}>リセット</button>
        <button onClick={Save}>保存</button>
      </div>
    </section>
  );
};

export default Canvas;
