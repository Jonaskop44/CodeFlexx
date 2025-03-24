import { useEffect, useRef } from "react";

const WaveAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawWave(
        ctx,
        time,
        canvas.height * 0.5,
        canvas.width,
        50,
        "#8B5CF6",
        0.2
      );
      drawWave(
        ctx,
        time + 1,
        canvas.height * 0.6,
        canvas.width,
        40,
        "#3B82F6",
        0.2
      );
      drawWave(
        ctx,
        time + 2,
        canvas.height * 0.7,
        canvas.width,
        30,
        "#8B5CF6",
        0.2
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    const drawWave = (
      ctx: CanvasRenderingContext2D,
      time: number,
      yPos: number,
      width: number,
      amplitude: number,
      color: string,
      opacity: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, yPos);

      for (let x = 0; x < width; x++) {
        const y = yPos + Math.sin(x * 0.01 + time) * amplitude;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      ctx.fillStyle = `${color}${Math.floor(opacity * 255)
        .toString(16)
        .padStart(2, "0")}`;
      ctx.fill();
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default WaveAnimation;
