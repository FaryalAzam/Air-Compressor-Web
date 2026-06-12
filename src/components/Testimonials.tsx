import { REVIEWS } from '../types';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block rounded-full bg-orange-100/80 text-orange-700 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            Client Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-5xl tracking-tight">
            Trusted by Karachi’s <span className="text-orange-600">Industries</span>
          </h2>
          <p className="mt-4 text-slate-600 font-medium">
            Hamare custom solutions aur bulletproof customer service ki wajah se Karachi ke sainkron factories hum par mukammal bharosa karti hain.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-[#fafaf9] p-8 rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
              id={`review-box-${rev.id}`}
            >
              <div>
                <div className="flex gap-1 mb-6 text-orange-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <Quote className="text-orange-200 mb-4 h-8 w-8" />
                
                <p className="text-slate-700 font-medium text-sm leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="border-t border-slate-200/80 pt-5 mt-4">
                <h5 className="font-extrabold text-slate-950 text-base">{rev.clientName}</h5>
                <span className="text-xs text-orange-600 font-bold block mt-0.5">{rev.companyName}</span>
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider mt-1">{rev.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
