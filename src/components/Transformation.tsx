import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Transformation() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const transformations = [
    { 
      name: 'Rahul Kumar', 
      time: '90 Days', 
      before: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&crop=faces', 
      after: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&crop=faces' 
    },
    { 
      name: 'Priya Singh', 
      time: '60 Days', 
      before: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop&crop=faces', 
      after: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2070&auto=format&fit=crop&crop=faces' 
    },
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % transformations.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length);

  return (
    <section id="transformation" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-[0.85] mb-6">
              Real <span className="text-brand">Results</span> <br /> Real People
            </h2>
            <p className="text-xl text-white/40 font-medium uppercase tracking-tight">{t.transformation.subtitle}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="w-14 h-14 rounded-none border border-white/20 flex items-center justify-center text-white hover:neon-bg hover:text-black transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={next} className="w-14 h-14 rounded-none border border-white/20 flex items-center justify-center text-white hover:neon-bg hover:text-black transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-none overflow-hidden border-2 border-white/5">
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === idx ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 grid grid-cols-2 ${activeIndex === idx ? 'z-10' : 'z-0'}`}
            >
              <div className="relative group overflow-hidden">
                <img src={item.before} alt="Before" className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-700" />
                <div className="absolute top-6 left-6 glass px-6 py-2 rounded-none font-black text-[10px] uppercase tracking-[0.3em] text-white/70 border border-white/10">Before</div>
              </div>
              <div className="relative group overflow-hidden border-l-2 border-brand/30">
                <img src={item.after} alt="After" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 right-6 neon-bg px-6 py-2 rounded-none font-black text-[10px] uppercase tracking-[0.3em] text-black shadow-xl">After</div>
              </div>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass border border-brand/50 p-6 rounded-none text-center min-w-[300px]">
                <h4 className="text-2xl font-black italic text-white uppercase tracking-tighter">{item.name}</h4>
                <div className="w-12 h-0.5 bg-brand mx-auto my-2" />
                <p className="neon-text font-black text-[10px] uppercase tracking-[0.4em]">{item.time} Transformation</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
