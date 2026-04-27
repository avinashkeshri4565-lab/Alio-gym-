import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Check, Flame } from 'lucide-react';

export function Membership() {
  const { t } = useLanguage();

  const plans = [
    { ...t.membership.basic, popular: false },
    { ...t.membership.premium, popular: true },
    { ...t.membership.trainer, popular: false },
  ];

  return (
    <section id="membership" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            🚨 {t.membership.urgency}
          </div>
          <h2 className="text-5xl md:text-9xl font-black italic tracking-tighter text-white uppercase leading-[0.85] mb-4">
            {t.membership.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`brutalist-card p-10 flex flex-col h-full relative ${
                plan.popular 
                  ? 'border-brand border-2 scale-105 z-20 neon-glow' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand text-black font-black text-[10px] px-4 py-1 uppercase tracking-widest">
                  Best Value
                </div>
              )}
              
              <div className="mb-10">
                <span className="text-white/40 font-black tracking-[0.2em] uppercase text-[10px]">
                  {plan.name}
                </span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-5xl font-black text-brand italic tracking-tighter">{plan.price}</span>
                  <span className="text-white/40 font-bold uppercase text-[10px]">/ month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature: string, fIdx: number) => (
                  <li key={fIdx} className="flex items-center gap-3 text-white/60 font-bold text-xs uppercase tracking-tight">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 font-black uppercase text-sm tracking-widest transition-all ${
                plan.popular ? 'brutalist-button' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 rounded-none'
              }`}>
                {t.membership.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
