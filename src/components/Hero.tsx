import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { MessageCircle, Play } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  // Replace heroBackgroundImage here
  const heroBackgroundImage = "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=2069&auto=format&fit=crop";

  return (
    <section id="home" className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-110 animate-subtle-zoom"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-brand text-black text-[10px] font-black tracking-[0.3em] uppercase mb-8 neon-glow">
              {t.hero.tagline}
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] mb-10 tracking-tighter uppercase">
              Transform <br /> Your Body <br /> <span className="text-brand">In 6 Months</span>
            </h1>
            <p className="text-lg text-white/70 font-medium max-w-2xl mx-auto mb-12 hidden md:block">
              {t.problem.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto brutalist-button px-12 py-5 text-lg flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5 fill-current" />
              {t.hero.ctaJoin}
            </button>
            <a 
              href="https://wa.me/91XXXXXXXXXX"
              className="w-full sm:w-auto px-12 py-5 bg-white/5 backdrop-blur-xl border border-white/20 hover:border-brand/50 text-white font-black uppercase text-lg transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              {t.hero.ctaWhatsApp}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 hidden xl:block opacity-30"
      >
        <div className="w-32 h-32 border-4 border-brand/20 rounded-2xl rotate-12 flex items-center justify-center">
          <div className="w-20 h-2 bg-brand/40" />
        </div>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 hidden xl:block opacity-30"
      >
        <div className="w-24 h-24 border-2 border-white/20 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
