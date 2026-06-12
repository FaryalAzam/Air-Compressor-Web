import React from 'react';

interface CompressorCard {
  brand: string;
  origin: string;
  type: string;
  bars: string;
  power: string;
  rpm: string;
  highlight: string;
  color: string;
}

const BRAND_CARDS_ROW1: CompressorCard[] = [
  {
    brand: "SPERRE MARINE",
    origin: "NORWAY",
    type: "Type HL2/77A High Pressure",
    bars: "30 BAR (435 PSI)",
    power: "6.8 kW / 9.1 HP",
    rpm: "1475 RPM",
    highlight: "Heavy Duty Marine Grade",
    color: "rgba(215, 226, 234, 0.04)"
  },
  {
    brand: "BALMA ITALY",
    origin: "ITALY",
    type: "Type LT 100 Cast-iron Pump",
    bars: "10-12 BAR (175 PSI)",
    power: "5.5 HP - 10 HP",
    rpm: "1150 RPM",
    highlight: "Double Cylinders Twin Belt",
    color: "rgba(239, 68, 68, 0.04)"
  },
  {
    brand: "ATLAS COPCO",
    origin: "SWEDEN",
    type: "GX Smart Rotary Screw",
    bars: "10 BAR (145 PSI)",
    power: "7.5 kW - 15 kW",
    rpm: "2900 RPM",
    highlight: "100% Continuous Flow",
    color: "rgba(215, 226, 234, 0.04)"
  },
  {
    brand: "INGERSOLL RAND",
    origin: "USA",
    type: "Type 30 Heavy Cast-Iron",
    bars: "15 BAR (218 PSI)",
    power: "10 HP - 20 HP",
    rpm: "950 RPM",
    highlight: "Elite Auto-Stop Control",
    color: "rgba(59, 130, 246, 0.04)"
  }
];

const BRAND_CARDS_ROW2: CompressorCard[] = [
  {
    brand: "ALUP SYSTEM",
    origin: "GERMANY",
    type: "SCK Encapsulated Screw",
    bars: "8 BAR (116 PSI)",
    power: "15 kW / 20 HP",
    rpm: "3000 RPM",
    highlight: "Super Silent Cabinet (<64dB)",
    color: "rgba(215, 226, 234, 0.04)"
  },
  {
    brand: "MICHELIN BLUE",
    origin: "FRANCE",
    type: "Vertical Space-Saver / Single-Pump",
    bars: "10 BAR (145 PSI)",
    power: "3 HP - 5 HP",
    rpm: "1050 RPM",
    highlight: "Space-Saver Stand",
    color: "rgba(37, 99, 235, 0.04)"
  },
  {
    brand: "SPERRE HEAD",
    origin: "NORWAY",
    type: "HL2/90 Water Cooled",
    bars: "40 BAR Max Peak",
    power: "11 kW / 15 HP",
    rpm: "1400 RPM",
    highlight: "Copper Finned Tubes",
    color: "rgba(245, 158, 11, 0.04)"
  },
  {
    brand: "ELGI SCREW",
    origin: "INDIA",
    type: "Direct Drive Encased Unit",
    bars: "9.5 BAR Constant",
    power: "22 kW / 30 HP",
    rpm: "2850 RPM",
    highlight: "High Volume Air End",
    color: "rgba(215, 226, 234, 0.04)"
  }
];

// Doubled lists for smooth infinite CSS loops
const ROW1_DOUBLED = [...BRAND_CARDS_ROW1, ...BRAND_CARDS_ROW1, ...BRAND_CARDS_ROW1];
const ROW2_DOUBLED = [...BRAND_CARDS_ROW2, ...BRAND_CARDS_ROW2, ...BRAND_CARDS_ROW2];

export default function MarqueeSection() {
  return (
    <div 
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-10 overflow-hidden flex flex-col gap-6 relative"
    >
      {/* Dynamic Keyframes injected safely to avoid modifying core configs */}
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        @keyframes marquee-rtl {
          0% { transform: translate3d(-33.333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 28s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 28s linear infinite;
        }
        .marquee-container:hover .animate-marquee-ltr,
        .marquee-container:hover .animate-marquee-rtl {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative subtitle */}
      <div className="max-w-6xl mx-auto w-full px-6 mb-4 text-center sm:text-left">
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#D7E2EA]/30 uppercase block">
          ⚡ BRAND QUALITY STANDS - GENUINE SHERSHAH IMPORT STOCK
        </span>
      </div>

      <div className="marquee-container w-full flex flex-col gap-5 overflow-hidden">
        {/* ROW 1: MOVES LEFT */}
        <div className="w-full overflow-hidden whitespace-nowrap flex relative z-10">
          <div className="flex gap-4 animate-marquee-ltr will-change-transform">
            {ROW1_DOUBLED.map((card, i) => (
              <div 
                key={`r1-${i}`}
                style={{ backgroundColor: '#111215', borderColor: 'rgba(215, 226, 234, 0.06)' }}
                className="flex-shrink-0 w-[300px] sm:w-[410px] h-[190px] sm:h-[240px] rounded-[20px] sm:rounded-[24px] border p-5 sm:p-6 flex flex-col justify-between hover:border-[#D7E2EA]/35 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#D7E2EA]/40 uppercase">
                      ORIGIN: {card.origin}
                    </span>
                    <h4 className="text-base sm:text-xl font-black text-[#D7E2EA] tracking-wide mt-1 uppercase">
                      {card.brand}
                    </h4>
                  </div>
                  <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 text-[8px] sm:text-[9px] font-mono font-bold text-[#D7E2EA]/70 uppercase tracking-widest">
                    {card.highlight}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 sm:pt-4 border-t border-[#D7E2EA]/5">
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-mono text-[#D7E2EA]/30 block uppercase tracking-wider">MAX PRESSURE</span>
                    <span className="text-xs sm:text-sm font-bold text-[#D7E2EA] font-mono">{card.bars}</span>
                  </div>
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-mono text-[#D7E2EA]/30 block uppercase tracking-wider">RATED SPEED</span>
                    <span className="text-xs sm:text-sm font-bold text-[#D7E2EA] font-mono">{card.rpm}</span>
                  </div>
                  <div className="col-span-2 mt-1">
                    <span className="text-[8px] sm:text-[9px] font-mono text-[#D7E2EA]/30 block uppercase tracking-wider font-semibold">ENGINE MODEL</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-[#D7E2EA]/85 block truncate mt-0.5">{card.type} ({card.power})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: MOVES RIGHT */}
        <div className="w-full overflow-hidden whitespace-nowrap flex relative z-10">
          <div className="flex gap-4 animate-marquee-rtl will-change-transform">
            {ROW2_DOUBLED.map((card, i) => (
              <div 
                key={`r2-${i}`}
                style={{ backgroundColor: '#111215', borderColor: 'rgba(215, 226, 234, 0.06)' }}
                className="flex-shrink-0 w-[300px] sm:w-[410px] h-[190px] sm:h-[240px] rounded-[20px] sm:rounded-[24px] border p-5 sm:p-6 flex flex-col justify-between hover:border-[#D7E2EA]/35 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#D7E2EA]/40 uppercase">
                      ORIGIN: {card.origin}
                    </span>
                    <h4 className="text-base sm:text-xl font-black text-[#D7E2EA] tracking-wide mt-1 uppercase">
                      {card.brand}
                    </h4>
                  </div>
                  <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 text-[8px] sm:text-[9px] font-mono font-bold text-[#D7E2EA]/70 uppercase tracking-widest">
                    {card.highlight}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 sm:pt-4 border-t border-[#D7E2EA]/5">
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-mono text-[#D7E2EA]/30 block uppercase tracking-wider">MAX PRESSURE</span>
                    <span className="text-xs sm:text-sm font-bold text-[#D7E2EA] font-mono">{card.bars}</span>
                  </div>
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-mono text-[#D7E2EA]/30 block uppercase tracking-wider">RATED SPEED</span>
                    <span className="text-xs sm:text-sm font-bold text-[#D7E2EA] font-mono">{card.rpm}</span>
                  </div>
                  <div className="col-span-2 mt-1">
                    <span className="text-[8px] sm:text-[9px] font-mono text-[#D7E2EA]/30 block uppercase tracking-wider font-semibold">ENGINE MODEL</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-[#D7E2EA]/85 block truncate mt-0.5">{card.type} ({card.power})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
