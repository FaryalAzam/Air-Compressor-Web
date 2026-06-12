import React from 'react';
import { FadeIn } from './Reusable';

const SERVICES_DATA = [
  {
    num: "01",
    name: "Machinery Sales",
    desc: "Offering a complete inventory of brand-new and certified-reconditioned piston, screw, and heavy scroll compressors, directly stocked in our Karachi godown."
  },
  {
    num: "02",
    name: "Marine High-Pressure",
    desc: "Niche experts in Sperre Norway HL2/77 & HL2/90 marine and high-pressure water-cooled system setups, rebuilding block housings to precision specs."
  },
  {
    num: "03",
    name: "24/7 Breakdown Repair",
    desc: "On-site troubleshooting for textile, CNC, or marble factories. Instant valve plate repair, bearing installations, and seal leak rectifications."
  },
  {
    num: "04",
    name: "Pure Air Treatment",
    desc: "Advanced configuration of refrigerated air dryers and multi-micron moisture auto-drains to supply smooth oil-free, dry, rustless pneumatics."
  },
  {
    num: "05",
    name: "Safety Valve Calibration",
    desc: "Calibration of mechanical unloaders, pressure limit regulators, and smart PLC controller electronics to protect copper coils from overloading."
  }
];

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-[15]"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* HEADING */}
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[10rem] tracking-tight leading-none mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        {/* LIST OF SERVICES */}
        <div className="flex flex-col">
          {SERVICES_DATA.map((service, i) => (
            <FadeIn 
              key={service.num} 
              delay={i * 0.1} 
              y={30}
              className="border-b border-[#0c0c0c19] last:border-none py-8 sm:py-10 md:py-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-14"
            >
              {/* Number on the left */}
              <div className="font-sans font-black text-[#0C0C0C] text-[3rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] leading-none select-none tracking-tighter sm:w-1/4">
                {service.num}
              </div>

              {/* Name and description stacked on the right */}
              <div className="flex flex-col gap-2 sm:w-3/4">
                <h3 className="font-medium uppercase text-[#0C0C0C] text-[1.25rem] sm:text-[1.65rem] md:text-[2.1rem] leading-tight tracking-tight">
                  {service.name}
                </h3>
                <p className="font-light leading-relaxed text-[#0C0C0C] opacity-60 text-[0.85rem] sm:text-[1.05rem] md:text-[1.25rem] max-w-2xl">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
