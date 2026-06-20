"use client";

export default function GlobalBackground() {
  return (
    <>
      {/* ─── Desktop: fixed corner glows ─── */}
      <div
        aria-hidden
        className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 2, mixBlendMode: "screen" }}
      >
        {/* Indigo — top-left corner */}
        <div style={{
          position: "absolute", top: "-25%", left: "-25%",
          width: "55vw", height: "55vw",
          background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 60%)",
          borderRadius: "50%", filter: "blur(4px)",
        }} />
        {/* Purple — top-right corner */}
        <div style={{
          position: "absolute", top: "-20%", right: "-25%",
          width: "50vw", height: "50vw",
          background: "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 60%)",
          borderRadius: "50%", filter: "blur(4px)",
        }} />
        {/* Teal — mid-left edge */}
        <div style={{
          position: "absolute", top: "40%", left: "-30%",
          width: "45vw", height: "45vw",
          background: "radial-gradient(circle, rgba(45,212,191,0.11) 0%, transparent 60%)",
          borderRadius: "50%", filter: "blur(4px)",
        }} />
        {/* Pink — mid-right edge */}
        <div style={{
          position: "absolute", top: "50%", right: "-30%",
          width: "45vw", height: "45vw",
          background: "radial-gradient(circle, rgba(236,72,153,0.11) 0%, transparent 60%)",
          borderRadius: "50%", filter: "blur(4px)",
        }} />
        {/* Sky — bottom-left corner */}
        <div style={{
          position: "absolute", bottom: "-20%", left: "-20%",
          width: "40vw", height: "40vw",
          background: "radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 60%)",
          borderRadius: "50%", filter: "blur(4px)",
        }} />
        {/* Green — bottom-right corner */}
        <div style={{
          position: "absolute", bottom: "-20%", right: "-20%",
          width: "40vw", height: "40vw",
          background: "radial-gradient(circle, rgba(74,222,128,0.10) 0%, transparent 60%)",
          borderRadius: "50%", filter: "blur(4px)",
        }} />
      </div>

      {/* ─── Mobile: big centered glows spanning the whole page, scrolling with content ─── */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 2, mixBlendMode: "screen" }}
      >
        {[
          { top: "4%",  c: "rgba(99,102,241,0.30)",  c2: "rgba(168,85,247,0.15)", w: "150vw" },
          { top: "20%", c: "rgba(168,85,247,0.22)",  c2: "rgba(99,102,241,0.12)", w: "135vw" },
          { top: "36%", c: "rgba(45,212,191,0.18)",  c2: "rgba(56,189,248,0.11)", w: "140vw" },
          { top: "52%", c: "rgba(236,72,153,0.18)",  c2: "rgba(168,85,247,0.11)", w: "135vw" },
          { top: "68%", c: "rgba(56,189,248,0.18)",  c2: "rgba(45,212,191,0.11)", w: "140vw" },
          { top: "84%", c: "rgba(99,102,241,0.22)",  c2: "rgba(74,222,128,0.11)", w: "150vw" },
        ].map((g, i) => (
          <div key={i} style={{
            position: "absolute", top: g.top, left: "50%", transform: "translateX(-50%)",
            width: g.w, height: g.w,
            background: `radial-gradient(circle, ${g.c} 0%, ${g.c2} 38%, transparent 66%)`,
            borderRadius: "50%", filter: "blur(10px)",
          }} />
        ))}
      </div>
    </>
  );
}
