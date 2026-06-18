"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CLIENT_LOGOS = [
  {
    name: "Sirius",
    svg: `<svg width="122" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#7C7C7C"><path d="M35.546 5.039c2.687 2.783 4.255 6.563 4.45 10.393 0 1.311-.008 2.626.004 3.937-1.421-.067-2.846 0-4.267-.04-3.176-.184-6.281-1.346-8.773-3.302-3.352-2.544-5.6-6.433-6.182-10.563-.294-1.803-.107-3.634-.16-5.448 1.565.031 3.134-.067 4.694.055a16.286 16.286 0 0 1 10.234 4.968ZM40 20.583c-.016 1.405.008 2.81-.008 4.22-.25 3.508-1.612 6.968-3.972 9.61-2.528 2.913-6.142 4.91-10.004 5.421-1.79.225-3.602.083-5.401.17.004-1.229.008-2.453 0-3.681.084-3.02 1.07-5.988 2.735-8.516.843-1.165 1.7-2.362 2.87-3.236a15.8 15.8 0 0 1 7.75-3.712c1.99-.37 4.02-.22 6.03-.276ZM19.477.018c-.072 1.248.06 2.5-.08 3.744-.115 5.326-3.14 10.496-7.746 13.255-2.58 1.583-5.636 2.433-8.674 2.323-.995-.004-1.986.012-2.977-.016.06-1.976-.103-3.972.283-5.929.74-4.346 3.355-8.342 7.089-10.747C10.087.825 13.402-.084 16.678.01c.936 0 1.867 0 2.799.008Zm-.422 33.334c.481 2.141.402 4.35.402 6.527l-.096.094c-2.082-.047-4.187.114-6.245-.299-4.618-.87-8.741-3.893-11.006-7.96-1.425-2.532-2.126-5.437-2.094-8.33-.004-.926.016-1.855-.012-2.78 1.724 0 3.455-.07 5.17.122 4.152.449 8.017 2.67 10.629 5.862 1.576 1.976 2.718 4.3 3.252 6.764Z"/><path d="M53.55 23.333c.16.86.46 1.6.9 2.22.44.6 1.01 1.07 1.71 1.41.72.34 1.56.51 2.52.51.76 0 1.42-.1 1.98-.3.58-.2 1.02-.49 1.32-.87.32-.4.48-.89.48-1.47-.02-.88-.43-1.6-1.23-2.16-.8-.58-2.11-1.09-3.93-1.53-2.3-.56-4.09-1.34-5.37-2.34-1.26-1-1.89-2.31-1.89-3.93 0-1.24.32-2.32.96-3.24.64-.94 1.54-1.66 2.7-2.16 1.16-.5 2.5-.75 4.02-.75 1.54 0 2.91.3 4.11.9 1.22.6 2.19 1.43 2.91 2.49.72 1.06 1.16 2.29 1.32 3.69l-3.93.18c-.08-.78-.32-1.46-.72-2.04-.4-.6-.92-1.06-1.56-1.38-.64-.32-1.37-.48-2.19-.48-1.1 0-1.99.26-2.67.78-.66.52-.98 1.21-.96 2.07.02.6.23 1.11.63 1.53.42.4.94.72 1.56.96.62.24 1.41.48 2.37.72l.36.09c2.36.58 4.2 1.4 5.52 2.46 1.32 1.04 1.98 2.35 1.98 3.93 0 1.3-.36 2.42-1.08 3.36-.7.94-1.65 1.66-2.85 2.16-1.2.48-2.54.72-4.02.72-1.66 0-3.14-.3-4.44-.9-1.3-.6-2.34-1.45-3.12-2.55-.78-1.1-1.23-2.38-1.35-3.84l3.96-.24Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h122v40H0z"/></clipPath></defs></svg>`,
  },
  {
    name: "Shopify",
    svg: `<svg width="136" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.417 10.625A9.375 9.375 0 0 1 11.042 20H1.667v-9.375a9.375 9.375 0 1 1 18.75 0Zm0 18.75A9.375 9.375 0 0 1 29.792 20h9.375v9.375a9.375 9.375 0 1 1-18.75 0Z" fill="#7C7C7C"/><path d="M1.667 29.375a9.375 9.375 0 0 0 9.375 9.375h9.375v-9.375a9.375 9.375 0 1 0-18.75 0Zm37.5-18.75a9.375 9.375 0 0 0-9.375-9.375h-9.375v9.375a9.375 9.375 0 0 0 18.75 0Zm19.378 20.668c-1.826 0-3.418-.273-4.775-.82-1.358-.557-2.417-1.392-3.179-2.505-.752-1.123-1.138-2.534-1.157-4.234h5.039c.049.694.24 1.28.571 1.758.342.469.801.825 1.377 1.07.586.244 1.27.366 2.05.366.714 0 1.32-.098 1.817-.293.508-.196.899-.464 1.172-.806a1.84 1.84 0 0 0 .41-1.186c0-.41-.127-.757-.38-1.04-.254-.293-.64-.547-1.158-.762-.508-.225-1.162-.425-1.963-.6l-2.3-.528c-1.874-.43-3.354-1.128-4.438-2.095-1.084-.976-1.626-2.3-1.626-3.97 0-1.347.366-2.529 1.099-3.544.732-1.016 1.738-1.807 3.017-2.374 1.29-.566 2.764-.85 4.424-.85 1.69 0 3.16.289 4.41.865 1.25.567 2.216 1.367 2.9 2.403.683 1.025 1.035 2.216 1.054 3.574h-5.068c-.059-.782-.371-1.387-.937-1.817-.557-.44-1.348-.659-2.373-.659-.684 0-1.255.088-1.714.264-.45.175-.791.42-1.026.732a1.763 1.763 0 0 0-.337 1.055c0 .43.127.796.381 1.098.254.303.62.557 1.099.762.488.205 1.06.381 1.714.528l1.86.424c1.074.235 2.026.547 2.856.938.83.39 1.529.854 2.095 1.392a5.317 5.317 0 0 1 1.304 1.86c.293.703.44 1.49.44 2.358 0 1.387-.347 2.578-1.04 3.574-.684.987-1.67 1.744-2.96 2.271-1.289.527-2.841.791-4.658.791Z" fill="#7C7C7C"/></svg>`,
  },
  {
    name: "Layers",
    svg: `<svg width="100" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 5L50 25L90 5M10 20L50 40L90 20M10 35L50 55L90 35" stroke="#7C7C7C" stroke-width="2" stroke-linecap="round"/></svg>`,
    useText: true,
    text: "Layers",
  },
  {
    name: "Contra",
    svg: "",
    useText: true,
    text: "Contra",
  },
  {
    name: "Arc",
    svg: "",
    useText: true,
    text: "Arc",
  },
];

const FADE_IN = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });

  return (
    <section
      ref={ref}
      className="w-full bg-black section-padding"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-2">
          {/* Spacer (30%) */}
          <div className="hidden md:block md:w-[30%] shrink-0" />

          {/* Right content (70%) */}
          <div className="w-full md:w-[70%] flex flex-col gap-14">
            {/* Main paragraph */}
            <motion.p
              className="para-32 text-white"
              variants={FADE_IN}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
            >
              At Mattter®, we believe intelligence should be structural, not
              supplemental. We are a design and automation lab dedicated to
              removing friction. By integrating advanced AI and kinetic
              workflows, we transform static companies into self-driving
              entities—enabling you to operate faster, smarter, and with
              absolute clarity.
            </motion.p>

            {/* Client logos grid */}
            <div className="grid grid-cols-3 gap-2">
              {CLIENT_LOGOS.map((logo, i) => (
                <motion.div
                  key={logo.name}
                  className="h-[100px] bg-[rgb(20,20,20)] rounded-[30px] flex items-center justify-center overflow-hidden"
                  style={{ aspectRatio: "1.825" }}
                  variants={FADE_IN}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i + 1}
                >
                  {logo.useText ? (
                    <span className="text-[rgb(124,124,124)] font-semibold text-base tracking-tight">
                      {logo.text}
                    </span>
                  ) : (
                    <div
                      className="w-[85px]"
                      dangerouslySetInnerHTML={{ __html: logo.svg }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
