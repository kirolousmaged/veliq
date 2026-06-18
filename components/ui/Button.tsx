"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "white";
  bgColor?: string;
  textColor?: string;
  className?: string;
  openInNewTab?: boolean;
}

export default function Button({
  label,
  href,
  onClick,
  variant = "primary",
  bgColor,
  textColor,
  className = "",
  openInNewTab = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold leading-none tracking-[-0.2px] cursor-pointer select-none";

  const variants = {
    primary: "bg-[rgb(99,102,241)] text-white",
    outline: "border border-[rgb(201,201,201)] text-white",
    white: "bg-white text-black",
  };

  const style: React.CSSProperties = {};
  if (bgColor) style.backgroundColor = bgColor;
  if (textColor) style.color = textColor;

  const classes = `${base} ${variants[variant]} ${className}`;

  const arrowIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (href) {
    return (
      <motion.div
        className="inline-flex"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
      >
        <Link
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
          className={classes}
          style={style}
          onClick={onClick}
        >
          {label}
          {arrowIcon}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      className={classes}
      style={style}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {label}
      {arrowIcon}
    </motion.button>
  );
}
