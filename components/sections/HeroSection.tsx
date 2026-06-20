"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const INDIGO = "rgb(99,102,241)";
const PURPLE = "rgb(168,85,247)";
const TEAL   = "rgb(45,212,191)";
const PINK   = "rgb(236,72,153)";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: "100vh", backgroundColor: "rgb(0,0,0)" }}
    >
      {/* Centred content stack */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/branding/colored-logo.png"
            alt="VELIQ"
            width={160}
            height={52}
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(1rem, 1.8vw, 20px)",
            fontWeight: 400,
            lineHeight: 1.65,
            maxWidth: "44ch",
            letterSpacing: "-0.01em",
          }}
        >
          <span style={{ color: INDIGO }}>Your</span>{" "}
          <span style={{ color: PURPLE }}>dedicated</span>{" "}
          <span style={{ color: TEAL }}>backbone</span>{" "}
          <span style={{ color: PINK }}>team.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full px-8 py-3.5 text-white"
            style={{
              backgroundColor: "rgb(99,102,241)",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
