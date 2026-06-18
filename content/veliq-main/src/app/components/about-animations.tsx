"use client";

import { useEffect } from "react";

export default function AboutAnimations() {
  useEffect(() => {
    // Parallax effect on background orbs when scrolling
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const particles = document.querySelectorAll(".about-particle");
      particles.forEach((p, i) => {
        const speed = 0.03 + i * 0.015;
        const el = p as HTMLElement;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
