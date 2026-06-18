"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Site-wide custom cursor — a small dot that trails the mouse with spring lag
 * and grows into a ring over interactive elements. Uses mix-blend-mode so it
 * stays visible over both the dark UI and the green/video sections.
 * Only mounts on devices with a fine pointer (real mouse), never on touch.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  // Raw pointer position
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Spring-smoothed for the trailing feel
  const springConfig = { stiffness: 500, damping: 34, mass: 0.6 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  useEffect(() => {
    // Only enable for devices that actually have a precise pointer.
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      // Grow when over anything clickable / marked interactive.
      const el = e.target as HTMLElement | null;
      const interactive = !!el?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]'
      );
      setHovering(interactive);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: "rgb(99,102,241)",
        borderRadius: "4px",
      }}
      animate={{
        width: hovering ? 26 : 13,
        height: hovering ? 26 : 13,
        borderRadius: hovering ? "7px" : "4px",
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.5 }}
    />
  );
}
