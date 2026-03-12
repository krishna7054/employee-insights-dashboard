import { useRef, useEffect } from "react";

export default function SignatureCanvas({ setSignature }) {

  const canvasRef = useRef();

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let drawing = false;

    canvas.onmousedown = () => drawing = true;

    canvas.onmouseup = () => {
      drawing = false;
      setSignature(canvas.toDataURL());
    };

    canvas.onmousemove = (e) => {

      if (!drawing) return;

      const rect = canvas.getBoundingClientRect();

      ctx.lineWidth = 2;
      ctx.lineCap = "round";

      ctx.lineTo(
        e.clientX - rect.left,
        e.clientY - rect.top
      );

      ctx.stroke();
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      width="400"
      height="200"
      className="border"
    />
  );
}