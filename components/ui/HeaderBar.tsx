"use client";

interface HeaderBarProps {
  label: string;
}

export default function HeaderBar({ label }: HeaderBarProps) {
  return (
    <div className="w-full flex items-center gap-4 px-6 py-4">
      <div className="flex-1 h-px bg-[rgb(30,30,30)]" />
      <span
        className="text-[rgb(201,201,201)] whitespace-nowrap"
        style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.04em" }}
      >
        ({label})
      </span>
      <div className="flex-1 h-px bg-[rgb(30,30,30)]" />
    </div>
  );
}
