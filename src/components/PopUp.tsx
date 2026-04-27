import { useState, useEffect } from 'react';
import { X, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

export function PopUp() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem('popup_seen');
      if (!hasSeen) {
        setIsVisible(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('popup_seen', 'true');
  };

  const handleClaim = () => {
    handleClose();
    document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full max-w-md bg-dark border-2 border-brand rounded-none p-10 popup-entry overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rotate-45 -mr-16 -mt-16 border border-brand/20"></div>
            
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-brand transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center relative z-10">
              <div className="inline-block bg-red-600 text-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Special Offer
              </div>
              
              <h2 className="text-4xl font-black text-white mb-4 leading-none uppercase tracking-tighter">
                Get 20% OFF <br />
                <span className="text-brand">On First Membership</span>
              </h2>
              
              <p className="text-zinc-400 font-bold text-sm mb-8">
                पहली Membership पर 20% OFF पाएं
              </p>

              <p className="text-red-500 font-black text-[11px] mb-8 uppercase tracking-widest animate-pulse">
                {t.popup.urgency}
              </p>

              <button
                onClick={handleClaim}
                className="w-full brutalist-button py-5 text-base"
              >
                {t.popup.cta}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
