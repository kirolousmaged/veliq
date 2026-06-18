"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale" | "fade-down";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 700,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const baseStyles: Record<string, React.CSSProperties> = {
    "fade-up": { opacity: 0, transform: "translateY(40px)" },
    "fade-down": { opacity: 0, transform: "translateY(-40px)" },
    "fade-in": { opacity: 0 },
    "slide-left": { opacity: 0, transform: "translateX(-50px)" },
    "slide-right": { opacity: 0, transform: "translateX(50px)" },
    scale: { opacity: 0, transform: "scale(0.9)" },
  };

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: "translateY(0) translateX(0) scale(1)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(visible ? visibleStyle : baseStyles[animation]),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
