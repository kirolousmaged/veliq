"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What specific services do you provide?",
    a: "We specialize in four core pillars: Brand Identity, Web Design (Framer), UI/UX for products, and Technical SEO. We focus purely on digital experiences, so we do not handle print marketing or mobile app coding (Swift/Kotlin).",
  },
  {
    q: "How long does a typical project take?",
    a: "Speed is a priority, but quality takes time. A standard 5-page marketing site typically takes 4–6 weeks from kickoff to launch. Comprehensive branding and complex platform migrations usually range from 8–12 weeks.",
  },
  {
    q: "Why do you use Framer instead of WordPress?",
    a: "Framer allows us to bridge the gap between design and development. It enables us to ship sites 2× faster, ensures pixel-perfect design accuracy, and generates clean React code that outperforms WordPress in both speed and SEO ranking.",
  },
  {
    q: "Can I update the website myself after launch?",
    a: "Absolutely. One of the main reasons we use Framer is for its user-friendly CMS. Once we launch, we provide a library of training videos showing you exactly how to edit text, swap images, and publish blog posts without writing code.",
  },
  {
    q: "How do payments and deposits work?",
    a: "We structure our payments to be fair for both parties. We require a 50% deposit to secure your slot in our production calendar. The remaining 50% is due upon project completion, just before we hand over the final credentials.",
  },
  {
    q: "Do you offer ongoing support or maintenance?",
    a: 'Yes. While our sites are built to be low-maintenance, we offer monthly "Growth" retainers covering new landing page designs, advanced SEO monitoring, and design iterations to ensure your digital presence scales with your company.',
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <motion.div
      className="shrink-0 flex items-center justify-center rounded-full"
      style={{ width: "32px", height: "32px", backgroundColor: "rgb(99,102,241)" }}
      animate={{ rotate: open ? 45 : 0 }}
      transition={{ duration: 0.22 }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div
      className="rounded-[14px] overflow-hidden"
      style={{
        backgroundColor: "rgb(14,14,14)",
        border: "1px solid rgb(24,24,24)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 gap-4 text-left cursor-pointer"
      >
        <span className="text-white" style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "-0.03em" }}>
          {q}
        </span>
        <PlusIcon open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="px-5 pb-5"
              style={{ fontSize: "14px", fontWeight: 400, color: "rgb(201,201,201)", lineHeight: 1.6 }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });

  return (
    <section ref={ref} className="w-full bg-black section-padding">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-20">

        <motion.h2
          className="heading-1 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          FAQ.
        </motion.h2>

        {/* Full-width FAQ list */}
        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <FaqItem q={faq.q} a={faq.a} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
