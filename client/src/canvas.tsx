import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

interface IRect {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

const PureCanvas = React.forwardRef((props, ref: any) => {
  const canvasRef = ref;
  let mouseX: number | null = null;
  let mouseY: number | null = null;
  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    return canvas.getContext("2d");
  };
  const [base64Data, setbase64Data] = useState();
  const [fontName, setFontName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    const canvas: any = canvasRef.current;
    mouseX = null;
    mouseY = null;
    setbase64Data(canvas.toDataURL("image/png"));
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
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    mouseX = x;
    mouseY = y;
  };

  const Reset = () => {
    const ctx = getContext();
    ctx.clearRect(0, 0, window.innerWidth, window.innerWidth);

    const canvas: any = canvasRef.current;
    setbase64Data(canvas.toDataURL("image/png"));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    axios
      .post("https://18.180.152.54/", {
        base64: String(base64Data).replace(/^.*,/, ""),
        font_name: fontName,
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        window.location.href = window.location.href;
      });
  };

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Loading isLoading={isLoading}></Loading>
      <canvas
        id="canvas"
        onMouseDown={OnClick}
        onMouseMove={OnMove}
        onMouseUp={DrawEnd}
        onMouseOut={DrawEnd}
        ref={canvasRef}
        style={{
          border: "2px solid",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "0",
          marginLeft: "auto",
          marginRight: "auto",
          width: `428px`,
        }}
      >
        <button
          onClick={Reset}
          style={{ marginTop: "3px", marginBottom: "10px" }}
        >
          リセット
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          width: "428px",
          marginLeft: "auto",
          marginRight: "auto",
          // marginTop: "0",
        }}
      >
        <p style={{ marginLeft: "5%", marginTop: 0 }}>
          更新する文字:{" "}
          <input
            type="text"
            required
            maxLength={1}
            value={fontName}
            onChange={(event) => setFontName(event.target.value)}
            pattern="[\u30A1-\u30F6 || \u3041-\u3096 || \uFF66-\uFF9F || \uFF10-\uFF19 || \uFF21-\uFF3A || \uFF41-\uFF5A || \u3400-\u9FFF || \uF900-\uFAFF || \uD840-\uD87F || \uDC00-\uDFFF || 0-9 || !-/:-@[-`{-~ || ！-／：-＠［-｀｛-～、-〜”’・]"
            title="特殊な記号は対応していません。"
          />
        </p>
        <button type="submit" style={{ margin: "19px", width: "100px" }}>
          アップロード
        </button>
      </form>
    </div>
  );
});

const Canvas: React.FC = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx1: any = canvasRef.current!;
    const ctx = ctx1.getContext("2d");

    const handleResize = () => {
      ctx.canvas.height =
        window.innerHeight < 428 || window.innerWidth < 428
          ? window.innerWidth * 0.8
          : 428;
      ctx.canvas.width =
        window.innerHeight < 428 || window.innerWidth < 428
          ? window.innerWidth * 0.8
          : 428;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ margin: "0 10%" }}>
      <PureCanvas ref={canvasRef} />
    </div>
  );
};

export default Canvas;
