import { useState } from 'react';
import { PRODUCTS, CompressorProduct } from '../types';
import { Box, Check, MessageSquare, Tag, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductCatalog() {
  const [filterType, setFilterType] = useState<string>('all');
  const [activeProduct, setActiveProduct] = useState<CompressorProduct | null>(PRODUCTS[0]);

  const filteredProducts = filterType === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.type === filterType);

  return (
    <section id="products" className="bg-slate-950 py-24 sm:py-32 scroll-mt-20 relative overflow-hidden text-white">
      
      {/* Background neon style accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-600/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em]">Our Machine Categories</span>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl tracking-tight">
              Compressor <span className="text-orange-600">Inventory</span> & Stock
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl text-sm sm:text-base">
              Har qisam ke air compressors, heavy screw, single/double stage pistons, aur high-capacity air dryers hamesha Shershah godown me ready millen gy.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2.5 bg-slate-900/60 p-2 rounded-2xl border border-slate-800">
            {['all', 'piston', 'screw', 'dryer'].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setFilterType(type);
                  const found = PRODUCTS.find(p => type === 'all' ? true : p.type === type);
                  if (found) setActiveProduct(found);
                }}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all focus:outline-none ${
                  filterType === type
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                id={`btn-filter-${type}`}
              >
                {type}s
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Side: Product Selector List */}
          <div className="lg:col-span-4 space-y-3">
            {filteredProducts.map((p) => {
              const isSelected = activeProduct?.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProduct(p)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 border-orange-500 shadow-xl shadow-orange-600/10 text-white'
                      : 'bg-slate-900/40 border-slate-850 hover:border-slate-800 text-slate-300 hover:bg-slate-900/80'
                  }`}
                  id={`btn-product-item-${p.id}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-black tracking-tight">{p.name}</span>
                    <Box size={14} className={isSelected ? 'text-white' : 'text-orange-500'} />
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-3">
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {p.hpRange}
                    </span>
                    <span className={`text-xs ${isSelected ? 'text-white' : 'text-slate-400'} font-medium`}>
                      See Specifications
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: High-End Active Showcase */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeProduct && (
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900 border border-slate-800/80 rounded-[2.5rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl"
                >
                  {/* Visual Image / Placeholder Frame */}
                  <div className="relative h-[320px] lg:h-full bg-slate-950 p-8 flex flex-col justify-between border-r border-slate-850/60 lg:min-h-[460px]">
                    
                    {/* Visual Decorative Grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />
                    
                    <span className="relative z-10 inline-flex items-center gap-1 bg-orange-600/10 border border-orange-600/30 px-3 py-1 rounded-full text-[10px] font-bold text-orange-400 uppercase tracking-widest">
                      <Tag size={10} /> IQBAL & ZEESHAN ASSETS
                    </span>

                    <div className="relative z-10 my-auto text-center border-2 border-dashed border-slate-800 p-6 rounded-2xl bg-slate-950/80 flex flex-col items-center">
                      <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center text-orange-500 border border-slate-850 mb-3">
                        <Eye size={22} className="animate-pulse" />
                      </div>
                      <span className="text-xs font-black text-slate-200 tracking-wide block">
                        📸 {activeProduct.name} Picture Here
                      </span>
                      <p className="text-[11px] text-slate-500 mt-2 text-center leading-relaxed">
                        {activeProduct.placeholderDescription}
                      </p>
                      <span className="text-[10px] font-mono text-orange-400 px-2 py-0.5 mt-4 bg-orange-400/10 rounded border border-orange-400/20 uppercase font-black">
                        Placeholder Box
                      </span>
                    </div>

                    <div className="relative z-10 text-[11px] font-semibold text-slate-500 text-center">
                      Industrial Grade • 100% Repaired & Serviced
                    </div>
                  </div>

                  {/* Specification & Details */}
                  <div className="p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded">
                        {activeProduct.type} compressor
                      </span>
                      
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f8fafc] mt-4 leading-tight">
                        {activeProduct.name}
                      </h3>

                      <p className="text-sm text-slate-400 font-medium mt-3 bg-slate-950/40 p-3 rounded-lg border border-slate-850">
                        {activeProduct.bestFor}
                      </p>

                      <div className="mt-6 space-y-3">
                        {activeProduct.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-semibold">
                            <Check className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-850 flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-slate-500 block uppercase tracking-wider text-[9px] font-black">HP range</span>
                          <span className="text-sm font-black text-white font-mono">{activeProduct.hpRange}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block uppercase tracking-wider text-[9px] font-black">Pressure range</span>
                          <span className="text-sm font-black text-white font-mono">{activeProduct.pressureRange}</span>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/923002081031?text=Asalam-o-Alikum%20Iqbal%20and%20Zeeshan%20Air%20Compressor.%20I%20am%20interested%20in%20your%20"${encodeURIComponent(activeProduct.name)}"%20listed%20on%20your%20website%20stock.%20Please%20quote%20me%20accurate%20rates.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-orange-600 hover:bg-orange-700 text-xs font-black uppercase tracking-wider py-4 px-5 rounded-2xl shadow-xl hover:shadow-orange-600/10 transition-transform hover:-translate-y-0.5"
                        id="btn-product-whatsapp-chat"
                      >
                        <MessageSquare size={14} />
                        Discuss on WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
