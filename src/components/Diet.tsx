import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Leaf, Zap, Apple } from 'lucide-react';

export function Diet() {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    { id: 'protein', title: t.diet.protein, icon: Zap, details: 'Ultra-refined whey protein for muscle recovery.', price: '₹4,999', img: 'https://images.unsplash.com/photo-1593073166039-e48a96e46480?q=80&w=2070&auto=format&fit=crop' },
    { id: 'peanut', title: t.diet.peanutButter, icon: Leaf, details: 'High protein, natural peanut butter with zero sugar.', price: '₹450', img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=2000&auto=format&fit=crop' },
    { id: 'plan', title: t.diet.dietPlans, icon: Apple, details: 'Customized macro-based meal plans for your body type.', price: '₹999', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop' },
    { id: 'sups', title: t.diet.supplements, icon: ShoppingBag, details: 'Essential vitamins, minerals, and pre-workout boosters.', price: '₹1,299', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=2069&auto=format&fit=crop' },
  ];

  return (
    <section id="diet" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white uppercase mb-6">
            {t.diet.title}
          </h2>
          <div className="w-20 h-1 bg-brand mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer brutalist-card overflow-hidden hover:border-brand transition-all"
            >
              <div className="aspect-[4/5] relative">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-3 py-1 neon-bg mb-4 font-black text-[9px] uppercase tracking-widest shadow-lg">
                    Shop Item
                  </div>
                  <h3 className="text-xl font-black text-white italic uppercase tracking-tighter leading-tight">{product.title}</h3>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center bg-white/5 group-hover:bg-brand transition-colors group-hover:text-black">
                <span className="font-black uppercase tracking-[0.2em] text-[9px]">View Detail</span>
                <ShoppingBag className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-2xl bg-dark border-2 border-brand rounded-none overflow-hidden relative shadow-[0_0_80px_rgba(204,255,0,0.2)]"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 glass border border-white/10 text-white hover:text-brand transition-colors flex items-center justify-center"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto">
                  <img src={selectedProduct.img} alt={selectedProduct.title} className="w-full h-full object-cover grayscale brightness-75" />
                </div>
                <div className="p-10 md:p-12 relative flex flex-col justify-center">
                  <div className="inline-block self-start px-3 py-1 neon-bg text-[9px] font-black uppercase tracking-widest mb-6">
                    Performance Range
                  </div>
                  <h3 className="text-4xl font-black text-white italic mb-4 uppercase leading-none tracking-tighter">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-white/50 font-medium mb-8 leading-relaxed text-sm">
                    {selectedProduct.details}
                  </p>
                  <div className="flex items-baseline gap-3 mb-10">
                    <span className="text-4xl font-black text-brand italic tracking-tighter">{selectedProduct.price}</span>
                    <span className="text-white/20 line-through text-xs font-bold uppercase italic tracking-widest">₹6,999</span>
                  </div>
                  <a 
                    href={`https://wa.me/91XXXXXXXXXX?text=I'm interested in ${selectedProduct.title}`}
                    className="block w-full brutalist-button py-5 text-center text-sm"
                  >
                    Buy via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
