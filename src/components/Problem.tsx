import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { AlertCircle, Target, TrendingUp } from 'lucide-react';

export function Problem() {
  const { t } = useLanguage();
  
  // Replace secondSectionBackgroundImage here
  const secondSectionBackgroundImage = "https://images.unsplash.com/photo-1541534741688-6078c64b52d3?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${secondSectionBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/90 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.85] tracking-tighter uppercase">
              {t.problem.title}
            </h2>
            <div className="w-32 h-2 bg-brand mb-10" />
            <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl">
              {t.problem.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: AlertCircle, text: 'No results after months of hard work?' },
              { icon: Target, text: 'Confused about the right diet plan?' },
              { icon: TrendingUp, text: 'Lack of motivation and consistency?' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="brutalist-card p-10 group"
              >
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-none flex items-center justify-center mb-8 text-brand group-hover:neon-bg group-hover:text-black transition-all">
                  <item.icon className="w-7 h-7" />
                </div>
                <p className="text-xl font-black text-white uppercase leading-tight italic tracking-tighter">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
