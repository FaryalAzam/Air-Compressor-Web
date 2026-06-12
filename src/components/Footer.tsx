import { MapPin, Phone, MessageSquare, Compass, Shield } from 'lucide-react';

export default function Footer() {
  const addressQuery = "Mashaallah Godown Syed Umeed Ali Shah Dargha Road Shershah village Karachi";
  const directionLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`;

  return (
    <footer id="location" className="bg-[#0C0C0C] text-[#D7E2EA] pt-24 pb-16 relative overflow-hidden scroll-mt-20">
      
      {/* Visual top dividers */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-zinc-800/10 via-[#D7E2EA]/30 to-zinc-800/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        <div className="grid gap-12 lg:grid-cols-12 items-start mb-20">
          
          {/* Main location details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#D7E2EA]/40 text-xs font-black uppercase tracking-[0.2em] block mb-2">Experience Center</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Sindh’s Premier <span className="text-[#D7E2EA]">Compressor Hub</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                Visit our Shershah workshop in Karachi to see active live compressor trials, verify Norwegian Sperre components, or consult our specialized repair technicians. Click below to launch direct navigation.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Address detail */}
              <div className="flex gap-4 items-start p-4 bg-zinc-900/40 rounded-2xl border border-zinc-800/80">
                <div className="h-10 w-10 bg-[#D7E2EA]/5 text-[#D7E2EA] border border-zinc-700/40 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-zinc-500 tracking-wider font-mono">Workshop Address</h4>
                  <p className="text-[#D7E2EA] text-sm font-bold mt-1.5 leading-relaxed">
                    Mashaallah Godown, Syed Umeed Ali Shah Dargha Road, Shershah Area, Karachi, Sindh, Pakistan
                  </p>
                </div>
              </div>

              {/* Instant Call numbers */}
              <div className="flex gap-4 items-start p-4 bg-zinc-900/40 rounded-2xl border border-zinc-800/80">
                <div className="h-10 w-10 bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-zinc-500 tracking-wider font-mono">Fast Contact Support</h4>
                  <a href="tel:+923002081031" className="text-white text-xl font-black block mt-1 hover:text-[#D7E2EA] transition-colors">
                    0300-2081031
                  </a>
                  <span className="text-[10px] text-zinc-400 block font-bold mt-0.5 font-mono">AVAILABLE FOR CALLS & WHATSAPP 24/7</span>
                </div>
              </div>

            </div>

            <div>
              <a
                href={directionLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #121316 0%, #292B32 50%, #1A1C20 100%)',
                  boxShadow: '0px 4px 20px rgba(215, 226, 234, 0.05), inset 0px 1px 2px rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(215, 226, 234, 0.3)',
                }}
                className="inline-flex items-center gap-2 text-[#D7E2EA] text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:border-[#D7E2EA]"
                id="btn-footer-map-directions"
              >
                <Compass size={16} />
                Launch Google Maps Navigation
              </a>
            </div>

          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7">
            <div className="relative h-[380px] sm:h-[420px] w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4674062562547!2d66.972322!3d24.881223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fccf8dbbb3f%3A0xe67c067d0d0e1bba!2sShershah%20Village%20Karachi!5e0!3m2!1sen!2s!4v1716000000000!5m2!1sen!2s"
                className="absolute inset-0 h-full w-full border-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-md p-4 rounded-xl border border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase block tracking-wider font-mono">Live Showroom Location</span>
                  <span className="text-xs font-semibold text-white">Shershah Village, Karachi, Sindh</span>
                </div>
                <a
                  href={directionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 hover:bg-zinc-700 text-white font-extrabold text-[11px] px-3.5 py-2.5 rounded border border-zinc-700 transition-colors uppercase tracking-wider font-mono"
                  id="btn-map-banner-nav"
                >
                  GET DIRECTIONS
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Footer legalities */}
        <div className="border-t border-zinc-900 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-xs font-semibold">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-[#0c0c0c] border border-zinc-800 rounded overflow-hidden flex items-center justify-center">
              <img 
                src="/logo.svg" 
                alt="I&Z Air Compressor Services Logo"
                className="h-7 w-7 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-zinc-300 font-bold block">Iqbal & Zeeshan Air Compressor</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mt-0.5">Shershah Karachi</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <p>© 2026 Iqbal & Zeeshan Air Compressor Pakistan. All rights reserved.</p>
            <p className="flex items-center gap-1 font-mono text-[10px] text-zinc-600 uppercase tracking-wider">
              <Shield size={10} className="text-emerald-500" /> AUTHORIZED SERVICE PROVIDER
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
