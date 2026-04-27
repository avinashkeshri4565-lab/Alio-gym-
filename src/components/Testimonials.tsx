import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const { t } = useLanguage();

  const reviews = [
    { text: t.testimonials.review1, author: 'Saurabh T.', rating: 5 },
    { text: t.testimonials.review2, author: 'Anjali M.', rating: 5 },
    { text: t.testimonials.review3, author: 'Rohit K.', rating: 5 },
  ];

  return (
    <section id="reviews" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white uppercase leading-none mb-6">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="brutalist-card p-10 relative hover:border-brand/40 group transition-all"
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 border-l border-b border-white/10 flex items-center justify-center text-white/20 group-hover:neon-text group-hover:border-brand transition-all">
                <Quote className="w-5 h-5" />
              </div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-brand text-brand" />
                ))}
              </div>
              
              <p className="text-lg text-white/70 font-medium italic mb-10 leading-relaxed uppercase tracking-tight">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-none flex items-center justify-center font-black text-brand italic">
                  {item.author[0]}
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-sm tracking-tighter">{item.author}</h4>
                  <p className="text-brand font-black text-[9px] uppercase tracking-[0.2em] mt-0.5">Verified Member</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
