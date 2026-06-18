"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  {
    label: "Client Satisfaction",
    value: 100,
    suffix: "%",
    detail: "★  Across 30+ happy clients",
  },
  {
    label: "Projects Delivered",
    value: 45,
    suffix: "+",
    detail: "Web, mobile, SEO & marketing",
  },
  {
    label: "Countries Served",
    value: 4,
    suffix: "",
    detail: "Egypt · Saudi Arabia · UAE · US",
  },
  {
    label: "Average ROAS",
    value: 4,
    suffix: ".8x",
    detail: "On ad-spend optimization",
  },
];

function CountUp({ to, suffix, active }: { to: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const duration = 1200;
    const steps = 40;
    const interval = duration / steps;
    let step = 0;

    const id = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (step >= steps) clearInterval(id);
    }, interval);

    return () => clearInterval(id);
  }, [active, to]);

  const display = String(count).padStart(String(to).length, "0");

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });

  return (
    <section ref={ref} className="w-full bg-black section-padding">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16">

        {/* Stat cards — 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col justify-between p-8 rounded-[20px]"
              style={{
                backgroundColor: "rgb(14,14,14)",
                border: "1px solid rgb(28,28,28)",
                minHeight: "200px",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <span className="text-[rgb(201,201,201)]" style={{ fontSize: "13px", fontWeight: 600 }}>
                {stat.label}
              </span>

              <span
                className="text-white tabular-nums"
                style={{
                  fontSize: "clamp(56px, 7vw, 80px)",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                }}
              >
                <CountUp to={stat.value} suffix={stat.suffix} active={inView} />
              </span>

              <div className="w-full h-px bg-[rgb(28,28,28)]" />

              <span className="text-[rgb(201,201,201)]" style={{ fontSize: "13px", fontWeight: 400 }}>
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
