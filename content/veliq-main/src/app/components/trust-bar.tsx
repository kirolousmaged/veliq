"use client";

import Image from "next/image";

const clients = [
  { name: "Coach Mohamed Roshdy", logo: "/clients/coach-mohamed-roshdy.svg", url: "https://www.coachmohamedroshdy.com" },
  { name: "Yamin Estate", logo: "/clients/yamin-estate.png", url: "https://www.yamin.estate" },
  { name: "Saudi Hayat", logo: "/clients/saudi-hayat.png", url: "https://www.saudihayat.com" },
  { name: "Alfa Transport", logo: "/clients/alfa-transport.png", url: "https://www.alfatransport.sa" },
  { name: "Fanous Clinic", logo: "/clients/fanous-clinic.png", url: "https://www.fanousclinic.com" },
  { name: "CrewHub Studio", logo: "/clients/crewhub-studio.png", url: "https://crewhubstudio.com" },
  { name: "Initio", logo: "/clients/initio.svg", url: "https://www.initio.sa" },
  { name: "RedBone Gym", logo: "/clients/redbone-gym.png", url: "https://www.redbonegym.com" },
];

function ClientLogo({ name, logo, url }: { name: string; logo: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center gap-2 transition-transform duration-300 hover:scale-105"
    >
      <Image
        src={logo}
        alt={name}
        width={120}
        height={48}
        className="h-14 w-auto object-contain opacity-60 transition-all duration-500 hover:opacity-100"
      />
      <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">{name}</span>
    </a>
  );
}

export default function TrustBar() {
  return (
    <section className="relative py-12 overflow-hidden border-y border-white/[0.04]">
      <div className="pointer-events-none absolute inset-0 bg-white/[0.01]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
          Trusted by growing businesses
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          {clients.map((c) => (
            <ClientLogo key={c.name} name={c.name} logo={c.logo} url={c.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
