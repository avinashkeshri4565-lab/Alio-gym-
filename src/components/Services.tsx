import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Dumbbell, Utensils, Bike, UserCheck } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: UserCheck, title: t.services.personalTraining, desc: '1-on-1 expert guidance to reach your goals faster.', color: 'brand' },
    { icon: Dumbbell, title: t.services.weightTraining, desc: 'Complete weight training floor with modern equipment.', color: 'brand' },
    { icon: Bike, title: t.services.cycling, desc: 'Intense cardio sessions for fat loss and endurance.', color: 'brand' },
    { icon: Utensils, title: t.services.dietSupport, desc: 'Personalized nutrition plans for your lifestyle.', color: 'brand' },
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-white mb-6 uppercase leading-[0.85]">
            Our <span className="text-brand">Premium</span> <br /> Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="brutalist-card p-10 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-brand mb-8 group-hover:neon-bg group-hover:text-black transition-all">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white italic mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-white/40 font-medium leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
