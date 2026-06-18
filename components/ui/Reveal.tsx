"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { motion, useInView } from "framer-motion";

// Framer's signature "appear" easing — a smooth, slightly-overshooting ease-out.
// This is the curve the Mattter template uses on virtually every reveal.
const FRAMER_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds (e.g. index * 0.08 for lists). */
  delay?: number;
  /** Vertical travel distance in px. Default 40 (Framer's default). */
  y?: number;
  /** Animation duration in seconds. Default 0.9. */
  duration?: number;
  /** Re-trigger every time it enters view instead of only once. */
  repeat?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "li" | "span";
};

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.9,
  repeat = false,
  className,
  style,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger a touch before the element is fully on screen so motion reads as
  // "arriving with" the scroll rather than catching up after it.
  const inView = useInView(ref, { once: !repeat, margin: "0px 0px -120px 0px" });

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: FRAMER_EASE }}
    >
      {children}
    </MotionTag>
  );
}

export { FRAMER_EASE };
