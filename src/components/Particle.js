import React, { useEffect, useRef } from "react";

/**
 * Futuristic node network — nodes connect to each other and to the cursor.
 */
function Particle() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, active: false });
  const nodesRef = useRef([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedNodes();
    };

    const seedNodes = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = Math.min(90, Math.floor((w * h) / 18000));
      const nodes = [];

      for (let i = 0; i < count; i += 1) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 1.2 + Math.random() * 1.8,
          pulse: Math.random() * Math.PI * 2,
        });
      }
      nodesRef.current = nodes;
    };

    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const onLeave = () => {
      mouseRef.current.active = false;
    };

    const onTouch = (e) => {
      if (!e.touches[0]) return;
      mouseRef.current.x = e.touches[0].clientX;
      mouseRef.current.y = e.touches[0].clientY;
      mouseRef.current.active = true;
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const linkDist = Math.min(160, w * 0.14);
      const cursorDist = Math.min(220, w * 0.2);

      ctx.clearRect(0, 0, w, h);

      // Soft grid under nodes
      ctx.save();
      ctx.strokeStyle = "rgba(103, 232, 249, 0.05)";
      ctx.lineWidth = 1;
      const step = 56;
      for (let x = 0; x <= w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.restore();

      if (!prefersReduced) {
        for (let i = 0; i < nodes.length; i += 1) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;
          n.pulse += 0.02;

          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          n.x = Math.max(0, Math.min(w, n.x));
          n.y = Math.max(0, Math.min(h, n.y));

          // Mild attraction toward cursor
          if (mouse.active && mouse.x != null) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const d = Math.hypot(dx, dy);
            if (d < cursorDist && d > 1) {
              n.vx += (dx / d) * 0.012;
              n.vy += (dy / d) * 0.012;
            }
          }

          // Dampen
          n.vx *= 0.995;
          n.vy *= 0.995;
        }
      }

      // Node-to-node links
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.28;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Cursor links + glow hub
      if (mouse.active && mouse.x != null) {
        for (let i = 0; i < nodes.length; i += 1) {
          const n = nodes[i];
          const dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);
          if (dist < cursorDist) {
            const t = 1 - dist / cursorDist;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(103, 232, 249, ${0.14 + t * 0.5})`;
            ctx.lineWidth = 1 + t * 1.2;
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = `rgba(34, 211, 238, ${0.35 + t * 0.5})`;
            ctx.arc(n.x, n.y, n.r + t * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        const grad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          28
        );
        grad.addColorStop(0, "rgba(34, 211, 238, 0.4)");
        grad.addColorStop(1, "rgba(34, 211, 238, 0)");
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(mouse.x, mouse.y, 28, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgba(165, 243, 252, 0.95)";
        ctx.arc(mouse.x, mouse.y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i];
        const glow = 0.4 + Math.sin(n.pulse) * 0.15;
        ctx.beginPath();
        ctx.fillStyle = `rgba(103, 232, 249, ${glow})`;
        ctx.shadowColor = "rgba(34, 211, 238, 0.5)";
        ctx.shadowBlur = 6;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="node-network"
      className="node-network"
      aria-hidden="true"
    />
  );
}

export default Particle;
