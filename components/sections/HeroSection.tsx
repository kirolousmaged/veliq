"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Background — gummy bears 3D scene, full cover, no overlay darkening */}
      <video
        src="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Content layer */}
      <div className="absolute inset-0" style={{ zIndex: 10 }}>

        {/* Description + CTA — left side, vertically at ~38% */}
        <motion.div
          className="absolute flex flex-col gap-6"
          style={{ top: "38%", left: "24px", maxWidth: "340px" }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p
            style={{
              fontSize: "17px",
              fontWeight: 500,
              color: "white",
              lineHeight: 1.55,
              letterSpacing: "-0.01em",
            }}
          >
            A digital design practice crafting brands with substance. We merge
            interactive physics with strategic identity to build websites that feel
            real.
          </p>

          <motion.div
            className="self-start"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full px-7 py-3.5 text-white"
              style={{
                backgroundColor: "rgb(15,128,84)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>

        {/* MATTTER® ghost wordmark — pinned at bottom, full width, see-through.
            Reveals by rising up from below the fold (Framer hero signature). */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <motion.h1
            className="w-full select-none"
            style={{
              fontSize: "22vw",
              fontWeight: 900,
              letterSpacing: "-0.06em",
              lineHeight: 0.82,
              color: "rgba(255,255,255,0.22)",
              paddingLeft: "14px",
            }}
            initial={{ y: "30%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            MATTTER®
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
