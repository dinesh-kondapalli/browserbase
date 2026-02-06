"use client";

import Image from "next/image";

const sponsors = [
  { name: "Vanta", logo: "/vanta.21af28b2.svg" },
  { name: "Perplexity", logo: "/perplexity.57f5b3a9.svg" },
  { name: "Numeral", logo: "/numeral.526af415.svg" },
  { name: "Clay", logo: "/clay.f8526af7.svg" },
  { name: "Microsoft", logo: "/microsoft.svg" },
  { name: "DeepMind", logo: "/deepmind.svg" },
  { name: "Commune", logo: "/commure.31b9e5cc.svg" },
  { name: "Vercel", logo: "/vercel.01e42209.svg" },
];

export default function SponsorsSection() {
  return (
    <section className="sponsors">
      <p className="sponsors__title">Trusted by AI-First companies worldwide</p>
      <div className="sponsors__grid">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="sponsors__item">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={100}
              height={40}
              className="sponsors__logo"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
