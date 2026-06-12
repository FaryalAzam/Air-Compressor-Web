import { useState } from 'react';
import { INDUSTRIES, IndustrySpec } from '../types';
import { Calculator, CheckCircle, ArrowRight, Smartphone, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function RecommendationEngine() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrySpec | null>(null);
  const [customHp, setCustomHp] = useState<string>('5');
  const [customUsage, setCustomUsage] = useState<string>('intermittent');
  const [showResult, setShowResult] = useState(false);

  const handleSelectPreset = (ind: IndustrySpec) => {
    setSelectedIndustry(ind);
    setShowResult(true);
  };

  const getCustomRecommendation = () => {
    const hp = parseFloat(customHp) || 5;
    let type = 'Piston Compressor';
    let capacity = '200 to 300 Liters';
    let summary = 'Ideal for low-load operation';

    if (hp > 15 || customUsage === 'continuous') {
      type = 'Rotary Screw Compressor (Highly Efficient)';
      capacity = '500+ Liters Storage with Air Dryer';
      summary = 'Continuous silent heavy industrial usage';
    } else if (hp >= 10) {
      type = 'Double Stage Heavy-Duty Piston Compressor';
      capacity = '300 to 500 Liters';
      summary = 'High pressure requirement up to 12 Bar';
    } else {
      type = 'Single Stage Piston Compressor';
      capacity = '100 to 200 Liters';
      summary = 'Intermittent load, compact workshop service';
    }

    return { type, capacity, summary };
  };

  const formattedWhatsAppUrl = (isCustom: boolean) => {
    let text = '';
    if (isCustom) {
      const rec = getCustomRecommendation();
      text = `Hello Iqbal & Zeeshan Compressor! I checked your website and need a price estimate for a ${rec.type} of around ${customHp} HP, with a tank capacity of ${rec.capacity}. My usage is ${customUsage}. Please call me back.`;
    } else if (selectedIndustry) {
      text = `Hello Iqbal & Zeeshan Air Compressor! I visited your website and calculated my requirement for my workshop: "${selectedIndustry.name} (${selectedIndustry.subtitle})". Recommended: ${selectedIndustry.recommendedType} type, ${selectedIndustry.hpRecommended}, tank capacity ${selectedIndustry.receiverCapacity}. Please send me prices and availability.`;
    } else {
      text = `Hello Iqbal & Zeeshan Compressor! I need an air compressor for my business. Please guide me on prices and models.`;
    }
    return `https://wa.me/923002081031?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="calculator-section" className="bg-[#0C0C0C] border-t border-zinc-900/60 py-24 text-white relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange-600/5 blur-[130px] pointer-events-none" />
      <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-orange-600/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-400 border border-orange-500/20 uppercase tracking-widest font-mono">
            <Calculator size={11} className="text-orange-500 animate-pulse" /> Smart Compressor Assistant
          </span>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl tracking-tight leading-tight uppercase">
            Not Sure Which <span className="text-orange-500">Compressor</span> You Need?
          </h2>
          <p className="mt-4 text-base text-zinc-400 font-medium">
            Select your industry type, and our responsive recommendation assistant will automatically analyze and present the optimal air system configuration for you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Presets and Calculator Controls */}
          <div className="lg:col-span-7 bg-[#111215] p-6 sm:p-10 rounded-3xl border border-zinc-900 shadow-2xl backdrop-blur-md">
            <h3 className="text-lg font-black uppercase tracking-wide mb-6 text-zinc-200">
              Option A: Select your Industry Type
            </h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {INDUSTRIES.map((ind) => {
                const isSelected = selectedIndustry?.id === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => handleSelectPreset(ind)}
                    className={`p-5 rounded-2xl text-left border transition-all relative ${
                      isSelected 
                        ? 'bg-[#15161a] border-orange-500 shadow-lg shadow-orange-500/10'
                        : 'bg-zinc-900/20 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/50'
                    }`}
                    id={`btn-preset-${ind.id}`}
                  >
                    <h4 className="font-extrabold text-[#f1f5f9] text-base leading-snug">{ind.name}</h4>
                    <span className="text-[10px] font-mono font-semibold text-orange-400 mt-1 block uppercase tracking-wider">{ind.subtitle}</span>
                    <p className="text-xs text-zinc-500 mt-2 line-clamp-2">{ind.description}</p>
                    
                    {isSelected && (
                      <span className="absolute top-4 right-4 h-2 w-2 rounded-full bg-orange-500 animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="my-8 border-t border-zinc-900 relative flex justify-center">
              <span className="bg-[#111215] px-4 text-[10px] font-mono font-black text-zinc-500 uppercase absolute -top-2.5">Or Choose Custom Specs</span>
            </div>

            <h3 className="text-lg font-black uppercase tracking-wide mb-6 text-zinc-200">
              Option B: Custom Range Selector
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-[10px] font-mono font-black text-zinc-500 uppercase tracking-widest mb-2">Desired Horsepower (HP)</label>
                <select
                  value={customHp}
                  onChange={(e) => {
                    setCustomHp(e.target.value);
                    setSelectedIndustry(null);
                    setShowResult(true);
                  }}
                  className="w-full bg-[#0C0C0C] border border-zinc-900 rounded-xl px-4 py-3.5 text-zinc-300 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  id="select-custom-hp"
                >
                  <option value="2">2 HP - Little load</option>
                  <option value="5">5 HP - Small Unit</option>
                  <option value="10">10 HP - Medium Workshop</option>
                  <option value="15">15 HP - Heavy Piston load</option>
                  <option value="30">30 HP - Industrial Screw</option>
                  <option value="50">50 HP - Complete Mill Setup</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-black text-zinc-500 uppercase tracking-widest mb-2">Daily Run Time</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setCustomUsage('intermittent');
                      setSelectedIndustry(null);
                      setShowResult(true);
                    }}
                    className={`py-3.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center border transition-colors ${
                      customUsage === 'intermittent' && !selectedIndustry
                        ? 'bg-orange-600 text-white border-orange-600'
                        : 'bg-[#0C0C0C] border-zinc-900 hover:border-zinc-800 text-zinc-400'
                    }`}
                    id="btn-usage-intermittent"
                  >
                    Intermittent
                  </button>
                  <button
                    onClick={() => {
                      setCustomUsage('continuous');
                      setSelectedIndustry(null);
                      setShowResult(true);
                    }}
                    className={`py-3.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center border transition-colors ${
                      customUsage === 'continuous' && !selectedIndustry
                        ? 'bg-orange-600 text-white border-orange-600'
                        : 'bg-[#0C0C0C] border-zinc-900 hover:border-zinc-800 text-zinc-400'
                    }`}
                    id="btn-usage-continuous"
                  >
                    Continuous (24hr)
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Dynamic Result Viewer Panel */}
          <div className="lg:col-span-5">
            {showResult ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#111215] p-8 sm:p-10 rounded-3xl border border-zinc-900 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-24 w-24 bg-orange-600/5 rounded-bl-[100px] pointer-events-none" />
                
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-orange-400">
                  Recommended Configuration
                </span>

                {selectedIndustry ? (
                  // Industry-preset configuration
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-2xl font-black text-white tracking-tight leading-tight uppercase font-sans">
                        {selectedIndustry.recommendedType} Air Compressor
                      </h4>
                      <p className="text-xs font-mono text-orange-400 font-bold mt-1 uppercase tracking-wider">
                        Optimal recommendation for your workflow
                      </p>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed bg-[#0C0C0C] p-4 rounded-xl border border-zinc-900/60">
                      {selectedIndustry.description}
                    </p>

                    <dl className="grid grid-cols-2 gap-4">
                      <div className="bg-[#0C0C0C] p-4 rounded-xl border border-zinc-900/40">
                        <dt className="text-[9px] font-mono font-black uppercase tracking-wider text-zinc-500">Motor Power</dt>
                        <dd className="text-base font-black font-mono text-white mt-1">{selectedIndustry.hpRecommended}</dd>
                      </div>
                      <div className="bg-[#0C0C0C] p-4 rounded-xl border border-zinc-900/40">
                        <dt className="text-[9px] font-mono font-black uppercase tracking-wider text-zinc-500">Receiver Tank</dt>
                        <dd className="text-base font-black font-mono text-white mt-1">{selectedIndustry.receiverCapacity}</dd>
                      </div>
                      <div className="bg-[#0C0C0C] p-4 rounded-xl border border-zinc-900/40">
                        <dt className="text-[9px] font-mono font-black uppercase tracking-wider text-zinc-500">Working Pressure</dt>
                        <dd className="text-base font-black font-mono text-white mt-1">{selectedIndustry.pressureBar}</dd>
                      </div>
                      <div className="bg-[#0C0C0C] p-4 rounded-xl border border-zinc-900/40">
                        <dt className="text-[9px] font-mono font-black uppercase tracking-wider text-zinc-500">Repair Cycle</dt>
                        <dd className="text-base font-black font-mono text-orange-400 mt-1">6 Months Dry</dd>
                      </div>
                    </dl>
                  </div>
                ) : (
                  // Custom recommendation
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-2xl font-black text-white tracking-tight leading-tight uppercase font-sans">
                        {getCustomRecommendation().type}
                      </h4>
                      <p className="text-xs font-mono text-orange-400 font-bold mt-1 uppercase tracking-wider">
                        Tailored setup guidelines
                      </p>
                    </div>

                    <p className="text-sm text-zinc-400 bg-[#0C0C0C] p-4 rounded-xl border border-zinc-900/60">
                      {getCustomRecommendation().summary}
                    </p>

                    <dl className="grid grid-cols-2 gap-4">
                      <div className="bg-[#0C0C0C] p-4 rounded-xl border border-zinc-900/40">
                        <dt className="text-[9px] font-mono font-black uppercase tracking-wider text-zinc-500">Selected Horsepower</dt>
                        <dd className="text-base font-black font-mono text-white mt-1">{customHp} HP</dd>
                      </div>
                      <div className="bg-[#0C0C0C] p-4 rounded-xl border border-zinc-900/40">
                        <dt className="text-[9px] font-mono font-black uppercase tracking-wider text-zinc-500">Rec. Tank Size</dt>
                        <dd className="text-base font-black font-mono text-white mt-1">{getCustomRecommendation().capacity}</dd>
                      </div>
                    </dl>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-zinc-900">
                  <a
                    href={formattedWhatsAppUrl(!!selectedIndustry ? false : true)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-750 text-white font-bold py-4 px-6 rounded-2xl shadow-xl transition-all hover:-translate-y-0.5"
                    id="btn-whatsapp-quote"
                  >
                    <MessageSquare size={16} />
                    <span>Discuss and Get Price Quote</span>
                  </a>
                  <span className="text-[10px] text-center block text-zinc-500 mt-2.5 font-mono">
                    Direct Official Hotline: 0300-2081031 (Shershah, Karachi)
                  </span>
                </div>

              </motion.div>
            ) : (
              <div className="h-full border border-dashed border-zinc-800 p-10 rounded-3xl flex flex-col items-center justify-center text-center text-[#D7E2EA]/30">
                <Calculator size={48} className="text-zinc-700 mb-4 animate-bounce" />
                <h4 className="text-sm font-black text-zinc-400 uppercase font-mono tracking-wider">Awaiting your Selection</h4>
                <p className="text-xs text-zinc-500 max-w-xs mt-2 leading-relaxed">
                  Select your workshop type or select desired HP on the left side to instantly receive detailed specifications of air receiver & pressure outputs.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
