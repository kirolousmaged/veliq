"use client";

export default function GlobalBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 2, mixBlendMode: "screen" }}
    >
      {/* Indigo — top-left corner */}
      <div style={{
        position: "absolute",
        top: "-25%", left: "-25%",
        width: "55vw", height: "55vw",
        background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 60%)",
        borderRadius: "50%",
        filter: "blur(4px)",
      }} />

      {/* Purple — top-right corner */}
      <div style={{
        position: "absolute",
        top: "-20%", right: "-25%",
        width: "50vw", height: "50vw",
        background: "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 60%)",
        borderRadius: "50%",
        filter: "blur(4px)",
      }} />

      {/* Teal — mid-left edge */}
      <div style={{
        position: "absolute",
        top: "40%", left: "-30%",
        width: "45vw", height: "45vw",
        background: "radial-gradient(circle, rgba(45,212,191,0.11) 0%, transparent 60%)",
        borderRadius: "50%",
        filter: "blur(4px)",
      }} />

      {/* Pink — mid-right edge */}
      <div style={{
        position: "absolute",
        top: "50%", right: "-30%",
        width: "45vw", height: "45vw",
        background: "radial-gradient(circle, rgba(236,72,153,0.11) 0%, transparent 60%)",
        borderRadius: "50%",
        filter: "blur(4px)",
      }} />

      {/* Sky — bottom-left corner */}
      <div style={{
        position: "absolute",
        bottom: "-20%", left: "-20%",
        width: "40vw", height: "40vw",
        background: "radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 60%)",
        borderRadius: "50%",
        filter: "blur(4px)",
      }} />

      {/* Green — bottom-right corner */}
      <div style={{
        position: "absolute",
        bottom: "-20%", right: "-20%",
        width: "40vw", height: "40vw",
        background: "radial-gradient(circle, rgba(74,222,128,0.10) 0%, transparent 60%)",
        borderRadius: "50%",
        filter: "blur(4px)",
      }} />
    </div>
  );
}
