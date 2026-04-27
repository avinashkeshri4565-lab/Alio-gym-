import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t.nav.home, id: 'home' },
    { name: t.nav.about, id: 'about' },
    { name: t.nav.services, id: 'services' },
    { name: t.nav.membership, id: 'membership' },
    { name: t.nav.diet, id: 'diet' },
    { name: t.nav.transformation, id: 'transformation' },
    { name: t.nav.reviews, id: 'reviews' },
    { name: t.nav.contact, id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 neon-bg rounded-none flex items-center justify-center font-black text-black text-xl group-hover:neon-glow transition-all">A</div>
          <div className="flex flex-col">
            <span className="font-display font-black text-lg leading-tight uppercase tracking-tighter text-white">
              ALIO <span className="text-brand">FITNESS</span>
            </span>
            <span className="text-[9px] tracking-[0.3em] font-black uppercase text-brand mt-0.5">GYM BETTIAH</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[11px] font-black hover:text-brand transition-colors uppercase tracking-[0.2em] relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-2 px-3 py-1.5 border border-white/20 text-white hover:border-brand hover:text-brand transition-all text-[11px] font-black uppercase tracking-widest"
          >
            {language === 'en' ? 'हिंदी' : 'ENG'}
          </button>
          <button 
            onClick={() => scrollToSection('membership')}
            className="hidden sm:block brutalist-button"
          >
            {t.hero.ctaJoin}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
            {isOpen ? <X className="w-8 h-8 text-brand" /> : <Menu className="w-8 h-8 text-brand" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-brand/20 backdrop-blur-xl h-[calc(100vh-64px)] overflow-y-auto"
          >
            <div className="flex flex-col p-8 gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-black text-left hover:text-brand transition-colors uppercase italic"
                >
                  {item.name}
                </button>
              ))}
              <div className="mt-8 pt-8 border-t border-white/10">
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="w-full py-4 bg-brand text-black font-black uppercase text-center rounded-xl flex items-center justify-center gap-2"
                >
                  {t.nav.whatsapp}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
