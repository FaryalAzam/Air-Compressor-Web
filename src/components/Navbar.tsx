import { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield, Cpu, FlameKindling } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Our Services', id: 'services' },
    { label: 'Compressor Products', id: 'products' },
    { label: 'Diagnostic Guide', id: 'troubleshoot' },
    { label: 'Karachi Location', id: 'location' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 shadow-lg border-b border-orange-500/20 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
            id="nav-logo"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#0c0c0c] border border-orange-500/20 overflow-hidden shadow-lg shadow-orange-500/5 transition-transform group-hover:scale-105">
              <img 
                src="/logo.svg" 
                alt="I&Z Air Compressor Services Logo"
                className="h-10 w-10 relative z-10 object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-xl bg-orange-600/5 blur opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white leading-tight">
                IQBAL & <span className="text-orange-500">ZEESHAN</span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
                Air Compressor Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-semibold tracking-wide text-slate-200 transition-colors hover:text-orange-500 focus:outline-none"
                id={`btn-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Actions for Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+923002081031"
              className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-extrabold text-orange-400 backdrop-blur-sm transition-all hover:bg-orange-500 hover:text-white"
              id="cta-nav-phone"
            >
              <Phone size={14} />
              <span>0300-2081031</span>
            </a>
            
            <button
              onClick={onQuoteClick}
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-2.5 text-xs font-black tracking-wider text-white uppercase shadow-md shadow-orange-600/20 hover:shadow-orange-600/45 transition-all hover:-translate-y-0.5"
              id="cta-nav-estimate"
            >
              <span className="relative z-10">Estimate Compressor Need</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+923002081031"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600/20 border border-orange-500/30 text-orange-400"
              id="cta-nav-phone-mobile"
            >
              <Phone size={18} />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-200 hover:text-orange-500 focus:outline-none"
              id="mobile-menu-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-orange-500/30 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left text-lg font-bold text-slate-100 py-2 border-b border-slate-900 hover:text-orange-500"
                    id={`btn-mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <a
                  href="https://wa.me/923002081031?text=Asalam%20o%20Alikum%20Iqbal%20and%20Zeeshan%20Compressor%20Service.%20I%20visited%20your%20website%20and%20need%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 text-center text-sm font-black text-white hover:bg-green-700"
                  id="cta-mobile-whatsapp"
                >
                  Chat on WhatsApp (0300-2081031)
                </a>
                
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="rounded-xl bg-orange-600 py-3.5 text-center text-sm font-black text-white"
                  id="cta-mobile-estimate"
                >
                  Estimate Compressor Capacity
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                <Shield size={12} className="text-orange-500" />
                <span>Mashaallah Godown, Shershah Area, Karachi</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
