import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// FADE IN COMPONENT
export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'section' | 'nav' | 'li' | 'ul';
  className?: string;
  key?: React.Key;
}) {
  const Component = (motion as any)[as] || motion.div;
  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

// MAGNET COMPONENT WITH LOCAL EVENT HANDLERS AND CACHED RECT (ELIMINATES LAYOUT THRASHING)
export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
  inactiveTransition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
}: {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = () => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
      setIsHovered(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current) return;
    const rect = rectRef.current;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < padding) {
      setPosition({
        x: distanceX / strength,
        y: distanceY / strength
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
    rectRef.current = null;
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: 'transform',
        display: 'inline-block'
      }}
    >
      {children}
    </div>
  );
}

// ANIMATED WORD BY WORD TEXT FOR MAX SCROLL PERFORMANCE
export function AnimatedText({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ');

  return (
    <span className={`${className} flex flex-wrap justify-center gap-x-[0.24em] gap-y-1 sm:gap-y-2`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0.16, y: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            duration: 0.4,
            delay: Math.min(index * 0.012, 1.2), // Upper bound delay to keep fast initial reveal
            ease: "easeOut"
          }}
          className="inline-block transition-colors duration-150 hover:text-white"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// CONTACT BUTTON
export function ContactButton({ 
  label = "Contact Me", 
  onClick, 
  href = "https://wa.me/923002081031?text=Asalam-o-Alikum%20Iqbal%20and%20Zeeshan%20Compressor.%20I%20am%20interested%20in%20your%20premium%20air%20compressor%20solutions." 
}: { 
  label?: string; 
  onClick?: () => void; 
  href?: string;
}) {
  const style: React.CSSProperties = {
    background: 'linear-gradient(135deg, #121316 0%, #292B32 50%, #1A1C20 100%)',
    boxShadow: '0px 4px 20px rgba(215, 226, 234, 0.08), inset 0px 1px 2px rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(215, 226, 234, 0.4)',
  };

  const buttonContent = (
    <button
      onClick={onClick}
      style={style}
      className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-[#D7E2EA] font-semibold uppercase tracking-widest cursor-pointer transition-all duration-300 hover:scale-105 hover:border-[#D7E2EA] hover:shadow-[0_0_20px_rgba(215,226,234,0.15)] active:scale-95"
    >
      {label}
    </button>
  );

  if (onClick) return buttonContent;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
      {buttonContent}
    </a>
  );
}

// LIVE PROJECT BUTTON
export function LiveProjectButton({ label = "Live Project", href }: { label?: string; href?: string }) {
  const defaultWhatsApp = "https://wa.me/923002081031?text=Hi%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20completed%20compressor%2520systems.";
  return (
    <a 
      href={href || defaultWhatsApp}
      target="_blank" 
      rel="noopener noreferrer"
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer text-center inline-block"
    >
      {label}
    </a>
  );
}
