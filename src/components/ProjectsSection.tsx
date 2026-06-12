import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, MessageSquare, BadgePercent, Cpu, Zap, Eye } from 'lucide-react';

// IMPORT NEW GENUINE GENERATED REALISTIC COMPRESSOR IMAGES (FAST LOADING, LOCAL ASSETS)
import balmaPistonImg from '../assets/images/balma_red_compressor_1779629727758.png';
import balmaDetailsImg from '../assets/images/balma_details_pump_1780070731214.png';
import generalPistonImg from '../assets/images/piston_compressor_1779628035578.png';
import sperreMarineImg from '../assets/images/sperre_marine_compressor_1779629703809.png';
import sperrePartsImg from '../assets/images/sperre_parts_pipes_1780070756350.png';
import valvesGaugesImg from '../assets/images/valves_gauges_1780070800836.png';
import screwImg from '../assets/images/screw_compressor_1779628060403.png';
import screwInternalsImg from '../assets/images/screw_internals_1780070778170.png';
import airDryerImg from '../assets/images/air_dryer_1779628083160.png';

interface ProjectType {
  num: string;
  name: string;
  category: string;
  url: string;
  techSpecs: { label: string; val: string }[];
  accentColor: string;
  tag: string;
  images: {
    col1_img1: string;
    col1_img2: string;
    col2_img: string;
  };
}

const PROJECTS_DATA: ProjectType[] = [
  {
    num: "01",
    name: "Balma LT 100 Piston",
    category: "Italy Design / Piston System",
    url: "https://wa.me/923002081031?text=Asalam-o-Alikum%20Iqbal%20and%20Zeeshan%252520Compressor.%20I%20am%20interested%20in%252520the%20Balma%20LT%20100%25252520Piston%25252520compressor%20rates.",
    accentColor: "#EF4444",
    tag: "98.4% Efficiency Duty Cycle",
    techSpecs: [
      { label: "TANK SPACE", val: "100 Litres (LT)" },
      { label: "CYLINDER PUMP", val: "Double Cylinder Piston" },
      { label: "POWER FRAME", val: "5.5 HP - 10 HP Belt" }
    ],
    images: {
      col1_img1: balmaDetailsImg,
      col1_img2: balmaDetailsImg, // Reusing high-quality local images
      col2_img: balmaPistonImg
    }
  },
  {
    num: "02",
    name: "Sperre HL2 Marine Unit",
    category: "Norway Import / Deep Sea Grade",
    url: "https://wa.me/923002081031?text=Asalam-o-Alikum%20Iqbal%20and%20Zeeshan%20Compressor.%20Please%20quote%20me%20rates%20for%20the%20Sperre%20HL2%20Marine%20Compressor%20system.",
    accentColor: "#D7E2EA",
    tag: "30-40 BAR High Pressure Marine",
    techSpecs: [
      { label: "COOLING SYSTEM", val: "Radial Copper Coiled Water-Cooled" },
      { label: "SPEED RATING", val: "1475 RPM Balanced" },
      { label: "MAX PRESSURE", val: "30 BAR Starting Air" }
    ],
    images: {
      col1_img1: sperrePartsImg,
      col1_img2: valvesGaugesImg,
      col2_img: sperreMarineImg
    }
  },
  {
    num: "03",
    name: "Heavy Industrial Screw Systems",
    category: "Custom Build / Continuous flow",
    url: "https://wa.me/923002081031?text=Asalam-o-Alikum%20Iqbal%20and%20Zeeshan%20Compressor.%20I%20need%20details%20and%20rates%20for%2520Heavy%2520Duty%20Rotary%20Screw%20system%20solutions.",
    accentColor: "#3B82F6",
    tag: "Encapsulated Quiet Enclosure",
    techSpecs: [
      { label: "AIREND BLOCK", val: "High Volume Twin-Screw Rotor" },
      { label: "DRYER STAGE", val: "Hydro-Separator refrigerated drying" },
      { label: "sound shield", val: "Encased Anti-vibration cabinet" }
    ],
    images: {
      col1_img1: screwInternalsImg,
      col1_img2: airDryerImg,
      col2_img: screwImg
    }
  }
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section 
      ref={containerRef}
      id="products" 
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 pb-20 px-4 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto w-full pt-16 sm:pt-24">
        {/* HEADING with elegant glowing subtitle */}
        <div className="text-center mb-16 sm:mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-90 w/20 border border-zinc-900 rounded-full mb-3"
          >
            <Cpu size={12} className="text-[#D7E2EA] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#D7E2EA]/50 uppercase">KARACHI STOCK HUB</span>
          </motion.div>
          
          <h2 className="hero-heading block font-black uppercase text-center text-[3.2rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[10rem] tracking-tight leading-none select-none">
            MACHINERY
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-mono tracking-widest uppercase mt-4 max-w-lg leading-relaxed">
            * 100% genuine industrial air machines tested on real-load unloader gauges.
          </p>
        </div>

        {/* STACKING PROJECT CARDS CONTAINER */}
        <div className="flex flex-col gap-10 sm:gap-14 pb-4 md:pb-12">
          {PROJECTS_DATA.map((proj, index) => (
            <ProjectCard 
              key={proj.num} 
              project={proj} 
              index={index} 
              totalCards={PROJECTS_DATA.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ 
  project, 
  index, 
  totalCards,
}: { 
  project: ProjectType; 
  index: number; 
  totalCards: number;
  key?: React.Key;
}) {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Real-time listener for screen widths for responsive sticky positioning
  useEffect(() => {
    const checkMobileWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobileWidth();
    window.addEventListener('resize', checkMobileWidth, { passive: true });
    return () => window.removeEventListener('resize', checkMobileWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ["start start", "end start"]
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      ref={cardContainerRef} 
      className={`${isMobile ? 'relative h-auto' : 'sticky h-[75vh] md:h-[85vh]'} w-full flex items-center justify-center pointer-events-none py-6 md:py-0`}
      style={{
        top: isMobile ? 'auto' : `calc(88px + ${index * 32}px)`,
        zIndex: index + 1
      }}
    >
      <motion.div 
        style={{ 
          scale: isMobile ? 1 : scale,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-full h-full rounded-[24px] sm:rounded-[36px] md:rounded-[45px] border border-zinc-800/80 bg-[#111215] p-5 sm:p-7 md:p-9 flex flex-col justify-between group overflow-hidden box-border shadow-2xl relative pointer-events-auto"
      >
        {/* TOP ROW */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-5">
            <span 
              className="font-sans font-black opacity-15 text-[2.5rem] sm:text-[3.2rem] md:text-[4.5rem] leading-none select-none transition-all duration-350"
              style={{ color: hovered ? project.accentColor : '#D7E2EA' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] uppercase font-mono text-[#D7E2EA]/40 tracking-[0.2em] leading-none mb-1.5 flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: project.accentColor }} />
                {project.category}
              </span>
              <h3 className="text-base sm:text-xl md:text-2xl font-black uppercase text-white tracking-wide leading-none">
                {project.name}
              </h3>
            </div>
          </div>

          {/* CUSTOM VIP WHATSAPP BUTTON WITH MAGNETIC GLOW */}
          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-xl border group/btn transition-all duration-300 self-stretch sm:self-auto text-center"
            style={{ 
              borderColor: hovered ? project.accentColor : 'rgba(215, 226, 234, 0.15)',
              background: 'linear-gradient(135deg, #131418 0%, #17181D 100%)'
            }}
          >
            {/* Hover sliding bg */}
            <span 
              className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none opacity-10" 
              style={{ backgroundColor: project.accentColor }}
            />
            
            <div className="flex items-center justify-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.16em] text-white">
              <MessageSquare size={13} style={{ color: project.accentColor }} />
              <span>Get Live Rates</span>
              <ArrowUpRight size={13} className="text-zinc-500 group-hover/btn:text-white transition-colors duration-200" />
            </div>
          </a>
        </div>

        {/* BOTTOM SECTION: MULTI-COLUMN INTERACTIVE DETAIL LAYOUT */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 flex-1 items-stretch min-h-0 w-full overflow-hidden">
          
          {/* LEFT TELEMETRY + TECH SPECS AND SPECIFICATIONS SPEC SHEET (5 Columns on Desktop, 12 Columns on Mobile) */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-between gap-4 h-full min-h-0">
            
            {/* VIP High-End Specs panel */}
            <div className="flex-1 bg-zinc-950/70 rounded-[20px] p-4 font-mono text-[10px] space-y-4 border border-zinc-900 flex flex-col justify-center">
              <div className="flex items-center gap-2 pb-2.5 border-b border-zinc-900">
                <Zap size={11} className="text-zinc-400" />
                <span className="text-[#D7E2EA]/50 uppercase tracking-[0.15em]">WAREHOUSE ENGINE SPEC SHEET</span>
              </div>
              
              <div className="space-y-3">
                {project.techSpecs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-0.5">
                    <span className="text-zinc-500 tracking-wider uppercase">{spec.label}</span>
                    <span className="text-[#D7E2EA] font-semibold tracking-wide text-right uppercase bg-zinc-900/40 px-2.5 py-1 rounded border border-zinc-800/50">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-zinc-900 text-zinc-500 text-[9px] uppercase tracking-wider">
                <BadgePercent size={11} className="text-emerald-500" />
                <span>Status: Brand New Imported Condition</span>
              </div>
            </div>

            {/* Supplementary detail image (shown ONLY on desktop, hidden on mobile for extreme fast load) */}
            <div className="hidden md:block relative overflow-hidden rounded-[20px] border border-zinc-900 bg-zinc-950 h-[140px] lg:h-[180px] shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 p-3 flex items-end">
                <span className="text-[9px] font-mono tracking-wider text-zinc-400 uppercase">
                  CLOSE-UP TELEMETRY PORT
                </span>
              </div>
              <img 
                src={project.images.col1_img1} 
                alt={`${project.name} mechanical detail`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter saturate-[0.85]"
                loading="lazy"
              />
            </div>
          </div>

          {/* MAIN PRESTIGE SHOWCASE PRODUCT IMAGE (7 Columns on Desktop, 12 Columns on Mobile) */}
          <div className="col-span-12 md:col-span-7 relative overflow-hidden rounded-[20px] sm:rounded-[30px] border border-zinc-900 bg-zinc-950 h-[220px] sm:h-[280px] md:h-full min-h-0">
            {/* Micro zoom hover indicator */}
            <div className="absolute bottom-4 left-4 z-10 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-900 flex items-center gap-1.5">
              <Eye size={11} className="text-zinc-400" />
              <span className="text-[9px] font-mono tracking-wider uppercase text-[#D7E2EA]/70">
                {project.tag}
              </span>
            </div>

            {/* Glowing active model color flair in the center */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full opacity-[0.06] blur-2xl transition-all duration-500"
              style={{ backgroundColor: project.accentColor }}
            />
            
            <img 
              src={project.images.col2_img} 
              alt={`${project.name} primary unit`}
              className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
          
        </div>
      </motion.div>
    </div>
  );
}
