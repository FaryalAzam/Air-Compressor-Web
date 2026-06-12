import { useState } from 'react';
import { SYMPTOMS, FailureSymptom } from '../types';
import { ShieldAlert, CheckCircle, Wrench, AlertTriangle, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function SymptomChecker() {
  const [activeSymptom, setActiveSymptom] = useState<FailureSymptom | null>(null);

  return (
    <section id="troubleshoot" className="bg-[#0c0c0c] py-24 sm:py-32 scroll-mt-20 border-t border-zinc-900/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block rounded-full bg-orange-600/10 text-orange-400 border border-orange-600/20 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            SHERSHAH REPAIR CENTER
          </span>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl tracking-tight uppercase">
            Having Trouble? <span className="text-orange-500">Diagnose</span> in 2 Seconds
          </h2>
          <p className="mt-4 text-zinc-400 font-medium">
            If your air compressor is experiencing issues, select a malfunction symptom from our expert diagnostics below to instantly evaluate the standard root cause and immediate solution action.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* List of Symptoms */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-xs font-bold text-[#D7E2EA]/40 uppercase tracking-widest mb-2 px-2 font-mono">Common Symptoms & Faults</h4>
            
            <div className="space-y-3">
              {SYMPTOMS.map((sym) => {
                const isActive = activeSymptom?.id === sym.id;
                return (
                  <button
                    key={sym.id}
                    onClick={() => setActiveSymptom(sym)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                      isActive
                        ? 'bg-[#15161a] border-orange-500/80 shadow-2xl text-white'
                        : 'bg-[#111215] border-zinc-900 hover:border-zinc-800 text-zinc-300 hover:bg-zinc-900/40'
                    }`}
                    id={`btn-symptom-${sym.id}`}
                  >
                    <div className={`mt-0.5 rounded-lg p-2.5 ${
                      isActive ? 'bg-orange-600 text-white' : 'bg-zinc-900 text-zinc-500 border border-zinc-800/40'
                    }`}>
                      <AlertTriangle size={18} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-base font-extrabold ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                          {sym.symptomName}
                        </span>
                        
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                          sym.urgency === 'Critical'
                            ? 'bg-rose-500/15 text-rose-400'
                            : 'bg-amber-500/15 text-amber-400'
                        }`}>
                          {sym.urgency}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Solution and Technical Action Plan */}
          <div className="lg:col-span-6">
            {activeSymptom ? (
              <motion.div
                key={activeSymptom.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#111215] rounded-3xl p-8 sm:p-10 border border-zinc-900 shadow-2xl relative"
              >
                <div className="flex items-center gap-3 border-b border-zinc-900 pb-6 mb-8">
                  <div className="h-10 w-10 bg-orange-600/10 text-orange-500 rounded-lg flex items-center justify-center border border-orange-500/20">
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-mono font-bold text-[#D7E2EA]/45 uppercase tracking-wider">Iqbal & Zeeshan Solutions</h5>
                    <span className="text-lg font-black text-white uppercase tracking-wide">Immediate Action Plan</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">Identify Root Cause:</span>
                    <p className="text-[#D7E2EA] text-base mt-1 font-semibold leading-relaxed">
                      {activeSymptom.likelyCause}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">Quick Recommended Action:</span>
                    <p className="text-[#D7E2EA] text-base mt-1 font-semibold leading-relaxed bg-[#0c0c0c] p-4 rounded-xl border border-zinc-900 italic">
                      {activeSymptom.solution}
                    </p>
                  </div>

                  <div className="bg-zinc-950 text-white rounded-2xl p-6 relative overflow-hidden border border-zinc-900">
                    <div className="absolute right-0 bottom-0 h-16 w-16 bg-orange-600/5 rounded-tl-full" />
                    <h6 className="font-extrabold text-white text-sm">Need an expert technician call?</h6>
                    <p className="text-xs text-zinc-500 mt-1">Our rapid diagnostics team can visit SITE/Shershah and repair on-site.</p>
                    
                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <a
                        href="tel:+923002081031"
                        className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-black px-4 py-2.5 rounded-lg uppercase tracking-wider transition-all"
                        id="btn-troubleshoot-call"
                      >
                        <Phone size={12} />
                        Call Technicians
                      </a>
                      
                      <a
                        href={`https://wa.me/923002081031?text=Asalam-o-Alikum%20I%20have%20an%20issue%20with%20my%20compressor%20causing%20"${encodeURIComponent(activeSymptom.symptomName)}"%20could%20you%20please%20help%20me%3F`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1"
                        id="btn-troubleshoot-whatsapp"
                      >
                        Ask on WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            ) : (
              <div className="h-full border border-dashed border-zinc-800 p-12 rounded-3xl flex flex-col items-center justify-center text-center text-slate-500 bg-[#0c0c0c]">
                <ShieldAlert size={48} className="text-zinc-700 mb-4 animate-pulse" />
                <h5 className="font-bold text-[#D7E2EA] text-base uppercase font-mono tracking-wider">Detailed Action Analyzer</h5>
                <p className="text-xs text-zinc-500 max-w-sm mt-2 leading-relaxed">
                  Protect your compressor pump motor and air tanks from expensive damage. Select any of the common symptoms on the left to analyze the correct repair guidelines.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
