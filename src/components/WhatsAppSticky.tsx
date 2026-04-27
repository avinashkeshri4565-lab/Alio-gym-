import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppSticky() {
  return (
    <motion.a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-[90] w-16 h-16 neon-bg text-black rounded-none flex items-center justify-center hover:neon-glow transition-all"
    >
      <MessageCircle className="w-8 h-8 fill-current text-black" />
      <div className="absolute -top-3 -left-3 bg-red-600 text-white text-[8px] font-black px-2 py-0.5 uppercase tracking-widest animate-pulse">
        Live
      </div>
    </motion.a>
  );
}
