import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Magnet, FadeIn, ContactButton } from './Reusable';

// IMPORT NEW GENUINE GENERATED REALISTIC COMPRESSOR IMAGES
import sperreImg from '../assets/images/sperre_marine_compressor_1779629703809.png';
import balmaImg from '../assets/images/balma_red_compressor_1779629727758.png';
import screwImg from '../assets/images/screw_compressor_1779628060403.png';
import dryerImg from '../assets/images/air_dryer_1779628083160.png';

interface SlideData {
  title: string;
  subtitle: string;
  brand: string;
  origin: string;
  desc: string;
  img: string;
  maxPressure: number;
  rpm: number;
  flowRate: string;
  temp: number;
  color: string;
  borderClr: string;
}

const SLIDES_DATA: SlideData[] = [
  {
    title: "SPERRE MARINE CORE",
    subtitle: "HL2/77 High-Pressure",
    brand: "SPERRE",
    origin: "NORWAY",
    desc: "Gold-standard high-pressure water-cooled marine starting air compressor featuring heavy-duty copper finned tubes.",
    img: sperreImg,
    maxPressure: 30.0,
    rpm: 1475,
    flowRate: "26 m³/h",
    temp: 74.2,
    color: "#D7E2EA",
    borderClr: "rgba(215, 226, 234, 0.3)"
  },
  {
    title: "BALMA PROFESSIONAL LT",
    subtitle: "Type 100 Cast-Iron Piston",
    brand: "BALMA ITALY",
    origin: "ITALY DESIGN",
    desc: "Sturdy double-cylinder twin belt design built for continuous commercial operations and raw mechanical reliability.",
    img: balmaImg,
    maxPressure: 11.5,
    rpm: 1150,
    flowRate: "850 L/min",
    temp: 68.4,
    color: "#EF4444",
    borderClr: "rgba(239, 68, 68, 0.3)"
  },
  {
    title: "SMART ENCLOSED SCREW",
    subtitle: "GX Direct-Drive Rotary",
    brand: "ATLAS CUSTOM",
    origin: "BELGIUM TECHNOLOGY",
    desc: "Compact, ultra-quiet encapsulated rotary screw delivering non-stop dry air with smart integrated computer controls.",
    img: screwImg,
    maxPressure: 10.0,
    rpm: 2900,
    flowRate: "1650 L/min",
    temp: 82.5,
    color: "#3B82F6",
    borderClr: "rgba(59, 130, 246, 0.3)"
  },
  {
    title: "PURE REFRIGERATED DRYER",
    subtitle: "Hydro-Separator moisture drain",
    brand: "ELGI THERMAL",
    origin: "INDIA OUTLET",
    desc: "High-grade cooling exchange system designed to condensate water instantly and provide 100% oil-free, dry, rustless performance.",
    img: dryerImg,
    maxPressure: 16.0,
    rpm: 1450,
    flowRate: "2200 L/min",
    temp: 3.5,
    color: "#10B981",
    borderClr: "rgba(16, 185, 129, 0.3)"
  }
];

export default function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Real-time fluctuating telemetry state variables
  const [livePressure, setLivePressure] = useState(30.0);
  const [liveRpm, setLiveRpm] = useState(1475);
  const [liveTemp, setLiveTemp] = useState(74.2);
  const [isVenting, setIsVenting] = useState(false);
  const [ventProgress, setVentProgress] = useState(0);

  const currentSlide = SLIDES_DATA[currentIdx];

  // Auto-play interval for cinematic video slider
  useEffect(() => {
    if (!isPlaying || isVenting) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES_DATA.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPlaying, isVenting]);

  // Telemetry fluctuation simulator
  useEffect(() => {
    if (isVenting) return;
    const timer = setInterval(() => {
      // Pressure fluctuates minutely
      setLivePressure((prev) => {
        const base = currentSlide.maxPressure;
        const offset = (Math.random() - 0.5) * 0.4;
        return Number(Math.max(0, base + offset).toFixed(1));
      });
      // RPM fluctuates
      setLiveRpm((prev) => {
        const base = currentSlide.rpm;
        const offset = Math.floor((Math.random() - 0.5) * 8);
        return base + offset;
      });
      // Temperature fluctuates
      setLiveTemp((prev) => {
        const base = currentSlide.temp;
        const offset = Number(((Math.random() - 0.5) * 0.6).toFixed(1));
        return base + offset;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [currentIdx, isVenting]);

  // Reset live stats immediately when slide changes (unless active venting)
  useEffect(() => {
    if (!isVenting) {
      setLivePressure(currentSlide.maxPressure);
      setLiveRpm(currentSlide.rpm);
      setLiveTemp(currentSlide.temp);
    }
  }, [currentIdx]);

  // Handle manual premium slide change
  const handleSelectSlide = (idx: number) => {
    if (isVenting) return;
    setCurrentIdx(idx);
  };

  // Trigger VIP live test pressure venting operation (visual effects!)
  const triggerPressureVent = () => {
    if (isVenting) return;
    setIsVenting(true);
    setVentProgress(0);

    // Dynamic sequence simulation of pressure purging
    let step = 0;
    const purgeInterval = setInterval(() => {
      step++;
      if (step <= 10) {
        // Drop pressure rapidly
        setLivePressure((prev) => Math.max(0, Number((prev - (currentSlide.maxPressure / 10)).toFixed(1))));
        setLiveRpm((prev) => Math.max(0, Math.floor(prev * 0.4)));
        setLiveTemp((prev) => Math.max(25, Number((prev - 4.5).toFixed(1))));
        setVentProgress(step * 10);
      } else if (step <= 20) {
        // System purge idle, mock steam clearing
        setLivePressure(0.0);
        setLiveRpm(0);
        setVentProgress(100);
      } else if (step <= 30) {
        // Smooth rebuild compressing back to max
        const rebuildStep = step - 20;
        setLivePressure((prev) => Number(((currentSlide.maxPressure / 10) * rebuildStep).toFixed(1)));
        setLiveRpm((prev) => Math.floor((currentSlide.rpm / 10) * rebuildStep));
        setLiveTemp((prev) => Number((25 + ((currentSlide.temp - 25) / 10) * rebuildStep).toFixed(1)));
      } else {
        clearInterval(purgeInterval);
        setIsVenting(false);
        setVentProgress(0);
        setLivePressure(currentSlide.maxPressure);
        setLiveRpm(currentSlide.rpm);
        setLiveTemp(currentSlide.temp);
      }
    }, 150);
  };

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Location", href: "#location" }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      if (id === 'services') {
        const yOffset = -70;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col justify-between overflow-hidden bg-[#0A0B0D] select-none text-[#D7E2EA] font-sans">
      
      {/* ATMOSPHERIC BACKGROUND VOLUMETRIC LIGHTING / RADIAL GRADIENT GLOWS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-radial from-zinc-800/10 to-transparent blur-[140px]" />
        
        {/* Animated dynamic atmospheric cyan/emerald flare to match pure compressed air airflows */}
        <motion.div 
          animate={{
            opacity: [0.15, 0.22, 0.15],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#D7E2EA]/[0.025] blur-[150px]" 
        />
        
        {/* Pressure Release Steam Spray simulated visual backdrop effect during active venting */}
        <AnimatePresence>
          {isVenting && ventProgress < 100 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={{ opacity: 0.25, scale: 2, y: -200 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-t from-white/20 to-transparent blur-3xl"
            />
          )}
        </AnimatePresence>
      </div>

      {/* HEADER NAVBAR */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full flex justify-between items-center px-6 md:px-12 pt-6 md:pt-8 z-30">
        <div className="text-sm font-black tracking-widest text-[#D7E2EA] uppercase flex flex-col pointer-events-auto">
          <span className="text-white">Iqbal & Zeeshan</span>
          <span className="text-[9px] text-[#D7E2EA]/50 font-semibold tracking-[0.25em] mt-0.5">Air Compressor Hub</span>
        </div>
        
        <div className="flex gap-4 sm:gap-8 items-center pointer-events-auto">
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-xs text-[#D7E2EA]/80 font-bold uppercase tracking-widest transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Quick connection indicator */}
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-mono tracking-widest uppercase text-[#D7E2EA]/40 hidden sm:inline">WARHOUSE_STK: READY</span>
        </div>
      </FadeIn>

      {/* HERO HERO CONTENT & CORE DISPLAY CAROUSEL */}
      <div className="relative flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 z-10 pt-4 pb-8 lg:py-0">
        
        {/* LEFT COLUMN: PRODUCT INTRO & SPECIFICATIONS HERO CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/40 border border-zinc-800/80 rounded-full w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D7E2EA]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D7E2EA]/70">
              {currentSlide.brand} / OVERSEAS IMPORT
            </span>
          </div>

          <div className="space-y-1">
            <motion.h1 
              key={currentIdx + "-h1"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tighter text-white leading-[1.05] uppercase"
            >
              {currentSlide.title}
            </motion.h1>
            <motion.p 
              key={currentIdx + "-h2"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base font-medium tracking-wide text-zinc-400 capitalize"
            >
              {currentSlide.subtitle}
            </motion.p>
          </div>

          <motion.p 
            key={currentIdx + "-desc"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xs sm:text-sm text-zinc-500 max-w-[460px] leading-relaxed font-light"
          >
            {currentSlide.desc}
          </motion.p>

          {/* SIMULATED CINEMATIC SELECTION TABS */}
          <div className="flex flex-wrap gap-2.5 pt-3">
            {SLIDES_DATA.map((slide, i) => (
              <button
                key={i}
                onClick={() => handleSelectSlide(i)}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-left transition-all duration-300 ${
                  i === currentIdx 
                    ? 'bg-zinc-900 border-zinc-700 shadow-lg scale-100' 
                    : 'bg-zinc-950/20 border-zinc-900/50 hover:border-zinc-800 hover:bg-zinc-950/40 opacity-55 hover:opacity-100'
                }`}
              >
                <div 
                  className="h-2 w-2 rounded-full transition-all duration-300"
                  style={{ backgroundColor: i === currentIdx ? slide.color : 'rgba(215, 226, 234, 0.1)' }} 
                />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono leading-none font-bold text-white tracking-wider">{slide.brand}</span>
                  <span className="text-[8px] text-zinc-400 font-mono mt-0.5 uppercase tracking-wide">{slide.origin}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* MIDDLE COLUMN: ROTATING COMPRESSOR CENTER PIECE WITH DYNAMIC ZOOM (CINEMATIC VIDEO PARKING) */}
        <div className="relative w-full sm:w-[380px] md:w-[440px] lg:w-[460px] aspect-square flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ 
                opacity: 1, 
                scale: 1.02, 
                y: 0,
                rotate: isVenting ? [0, -1, 1, -1, 0] : 0 
              }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1],
                rotate: { duration: 0.15, repeat: isVenting ? Infinity : 0 }
              }}
              className="relative w-full h-full pointer-events-auto flex justify-center items-center"
            >
              {/* Core interactive Magnet area */}
              <Magnet padding={120} strength={4}>
                <div className="relative drop-shadow-[0_25px_60px_rgba(215,226,234,0.1)] transition-transform duration-300">
                  {/* Glowing background halo reacting to selected model color */}
                  <div 
                    className="absolute inset-[15%] rounded-full opacity-[0.14] blur-3xl transition-all duration-700"
                    style={{ backgroundColor: currentSlide.color }} 
                  />
                  
                  {/* Real-time Cinematic Motion Simulator (Mimicking a HQ rotating-camera product video!) */}
                  <motion.img
                    animate={{
                      scale: [1, 1.05, 1],
                      y: [0, -6, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    src={currentSlide.img}
                    alt={currentSlide.title}
                    referrerPolicy="no-referrer"
                    className="w-[280px] sm:w-[350px] lg:w-[400px] h-auto object-contain select-none pointer-events-none"
                    draggable={false}
                  />

                  {/* Operational indicators floating */}
                  {isVenting && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono font-black text-rose-500 text-xs tracking-widest bg-black/95 px-3 py-1.5 border border-rose-500/30 rounded shadow-2xl animate-pulse">
                      SYSTEM PURGING STEAM
                    </div>
                  )}
                </div>
              </Magnet>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: HIGH-END VIP DIAGNOSIS & ACTIVE TELEMETRY TELEMETRY */}
        <div className="w-full lg:w-[300px] bg-zinc-950/55 backdrop-blur-md p-5 rounded-2xl border border-zinc-800/90 shadow-2xl space-y-5 text-left flex flex-col justify-between self-stretch lg:self-auto pointer-events-auto">
          <div>
            <div className="flex justify-between items-center pb-3 border-b border-zinc-900">
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">DIAGNOSTIC TELEMETRY</span>
              <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[8px] font-mono uppercase tracking-widest ${
                isVenting 
                  ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30' 
                  : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
              }`}>
                <span className={`h-1 w-1 rounded-full ${isVenting ? 'bg-rose-400 animate-ping' : 'bg-emerald-400 animate-pulse'}`} />
                {isVenting ? "VENT_PURGE" : "SYSTEM_ON"}
              </span>
            </div>

            {/* Simulated Live Dial Gauge Indicator */}
            <div className="relative py-4 flex flex-col justify-center items-center border-b border-zinc-900">
              {/* Mini dial SVG visual */}
              <svg className="h-28 w-28 -rotate-90" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="42" 
                  fill="none" 
                  stroke="rgba(215, 226, 234, 0.04)" 
                  strokeWidth="6" 
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="42" 
                  fill="none" 
                  stroke={currentSlide.color} 
                  strokeWidth="6" 
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - (livePressure / (currentSlide.maxPressure * 1.3)))}`}
                  className="transition-all duration-300"
                  strokeLinecap="round"
                  opacity={0.8}
                />
              </svg>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-1">
                <span className="text-[9px] font-mono text-zinc-500 block">PRESSURE</span>
                <span className="text-xl font-bold font-mono text-white tracking-tight">{livePressure}</span>
                <span className="text-[8px] font-mono text-zinc-400 block -mt-1 uppercase">BAR</span>
              </div>
            </div>

            {/* Readouts List Grid */}
            <div className="grid grid-cols-2 gap-3.5 pt-4 text-xs font-mono">
              <div>
                <span className="text-[9px] text-zinc-500 block uppercase">ENGINE SPEED</span>
                <span className="text-[13px] font-bold text-white transition-all duration-100">{liveRpm} <span className="text-[10px] text-zinc-400 font-light">RPM</span></span>
              </div>
              
              <div>
                <span className="text-[9px] text-zinc-500 block uppercase">TEMP DEGREE</span>
                <span className="text-[13px] font-bold text-white transition-all duration-100">{liveTemp} <span className="text-[10px] text-zinc-400 font-light">°C</span></span>
              </div>

              <div>
                <span className="text-[9px] text-zinc-500 block uppercase">FLOW CAPACITY</span>
                <span className="text-[13px] font-bold text-white">{currentSlide.flowRate}</span>
              </div>

              <div>
                <span className="text-[9px] text-zinc-500 block uppercase">ORIGIN STAMP</span>
                <span className="text-[11px] font-black text-[#D7E2EA] truncate block">{currentSlide.origin}</span>
              </div>
            </div>
          </div>

          {/* Action Trigger Purge: Fully customized interactive live simulator */}
          <div className="pt-2">
            <button
              onClick={triggerPressureVent}
              disabled={isVenting}
              className={`w-full py-2.5 rounded-xl text-[10px] font-mono font-bold tracking-[0.15em] uppercase border transition-all duration-300 ${
                isVenting 
                  ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' 
                  : 'bg-zinc-900 text-[#D7E2EA] border-zinc-800 hover:border-[#D7E2EA] hover:bg-zinc-950/80 cursor-pointer active:scale-95'
              }`}
            >
              {isVenting ? `VENTING COILS... ${ventProgress}%` : "TEST VENT SAFETY PRESSURE"}
            </button>
            <p className="text-[8px] font-mono text-zinc-500 text-center mt-2 uppercase tracking-wider">
              * Click to test interactive unloader pressure release valve.
            </p>
          </div>
        </div>
      </div>

      {/* FULL BOTTOM ROW BAR */}
      <div className="relative z-20 w-full flex flex-col sm:flex-row justify-between items-center px-6 md:px-12 pb-8 sm:pb-10 pt-4 gap-6 border-t border-zinc-900/60 bg-[#0A0B0D]/80 backdrop-blur-sm">
        
        {/* Left comment */}
        <FadeIn delay={0.3} y={15} as="div">
          <p className="text-[#D7E2EA]/90 font-medium uppercase tracking-wider leading-snug text-[0.7rem] sm:text-[0.8rem] md:text-[0.85rem] max-w-[280px] sm:max-w-[400px] text-center sm:text-left">
            Sindh's authorized dealer in Karachi for European heavy machinery starting air compressors, smart air dryers, and authentic parts.
          </p>
        </FadeIn>

        {/* Right contact button */}
        <FadeIn delay={0.4} y={15}>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {/* Quick manual pause/play of the video background slide */}
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-[9px] font-mono text-zinc-500 uppercase tracking-widest hover:border-zinc-700 hover:text-white transition-colors cursor-pointer"
            >
              {isPlaying ? "PAUSE PREVIEW" : "PLAY VIDEO SLIDER"}
            </button>
            <ContactButton label="Consult Engineers" />
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
