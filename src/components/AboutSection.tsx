import React from 'react';
import { FadeIn, AnimatedText, ContactButton } from './Reusable';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* SUBTLE BLUEPRINT CORNER GRID COORDINATES FOR VIP LOOK */}
      <div className="absolute top-[4%] left-[4%] z-10 select-none pointer-events-none font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase hidden sm:block">
        <p>SYS: PNEU_OK</p>
        <p className="mt-1">LAT: 24.8812° N</p>
      </div>

      <div className="absolute bottom-[4%] left-[4%] z-10 select-none pointer-events-none font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase hidden sm:block">
        <p>LOC: SHERSHAH_KHI</p>
        <p className="mt-1">SEC: 24/7_STBY</p>
      </div>

      <div className="absolute top-[4%] right-[4%] z-10 select-none pointer-events-none font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase text-right hidden sm:block">
        <p>RE-COMP_RATED</p>
        <p className="mt-1">EFF: 98.7%</p>
      </div>

      <div className="absolute bottom-[4%] right-[4%] z-10 select-none pointer-events-none font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase text-right hidden sm:block">
        <p>Sperre NORWAY</p>
        <p className="mt-1">Balma ITALY</p>
      </div>

      {/* AMBIENT BACKGROUND GLOW SPOT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#D7E2EA]/[0.015] blur-[120px] pointer-events-none z-0" />

      {/* HIGHLIGHT CONTENT BLOCK CONTAINER */}
      <div className="relative z-20 flex flex-col justify-center items-center max-w-4xl text-center w-full">
        {/* HEADING */}
        <FadeIn delay={0} y={40} as="h2" className="mb-10 sm:mb-14 md:mb-16">
          <span className="hero-heading block font-black uppercase leading-none tracking-tight text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[10rem]">
            About me
          </span>
        </FadeIn>

        {/* CHARACTER-BY-CHARACTER SCROLL REVEAL TEXT */}
        <div className="w-full max-w-[560px] mb-16 sm:mb-20 md:mb-24 px-4">
          <AnimatedText 
            text="We supply commercial, industrial, and marine air compressors in Karachi and across Sindh. Specializing in European brands like Sperre Norway, Balma Italy, and Alup Germany, we guarantee high-efficiency performance, genuine spare parts, and 24/7 technical repair support."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[1rem] sm:text-[1.15rem] md:text-[1.35rem]"
          />
        </div>

        {/* CONTACT BUTTON BELOW TEXT */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton label="Request Technical Quote" />
        </FadeIn>
      </div>
    </section>
  );
}
