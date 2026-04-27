import { useLanguage } from '../LanguageContext';
import { Star, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function Trust() {
  const { t } = useLanguage();

  const stats = [
    { icon: Star, value: t.trust.rating, label: 'Google Rating' },
    { icon: Users, value: t.trust.reviews, label: 'Happy Clients' },
    { icon: ShieldCheck, value: t.trust.support, label: 'Professional Staff' }
  ];

  return (
    <section className="bg-dark border-y border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-brand">
                <stat.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white italic leading-tight uppercase tracking-tighter">{stat.value}</h3>
                <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
