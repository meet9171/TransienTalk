import { useEffect, useRef } from "react";

const GradientCircles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const circles = Array.from({ length: 3 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 200 + 100,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const mousemove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", mousemove);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach((circle) => {
        // Update position based on velocity
        circle.x += circle.vx;
        circle.y += circle.vy;

        // Bounce off walls
        if (circle.x < 0 || circle.x > canvas.width) circle.vx *= -1;
        if (circle.y < 0 || circle.y > canvas.height) circle.vy *= -1;

        // Create gradient
        const gradient = ctx.createRadialGradient(
          circle.x,
          circle.y,
          0,
          circle.x,
          circle.y,
          circle.radius
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        // Draw circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default GradientCircles;