import { useLanguage } from '../LanguageContext';
import { Instagram, Facebook, Youtube, Dumbbell } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter text-white uppercase leading-[0.8] mb-12">
            Build your body <br /> Build your <span className="text-brand">Confidence</span>
          </h2>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="brutalist-button px-16 py-6 text-xl"
          >
            Join the elite circle
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="md:col-span-1">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
              <div className="w-10 h-10 neon-bg rounded-none flex items-center justify-center font-black text-black text-xl">A</div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg leading-tight uppercase tracking-tighter text-white">ALIO FITNESS</span>
                <span className="text-[8px] tracking-[0.3em] font-black uppercase text-brand mt-0.5">GYM BETTIAH</span>
              </div>
            </div>
            <p className="text-white/40 font-bold text-xs leading-relaxed mb-8 uppercase tracking-tight">
              The premier fitness destination in Bettiah. Unleash your potential with our elite training methodologies.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-none flex items-center justify-center text-white/50 hover:text-brand hover:border-brand transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => window.scrollTo(0,0)} className="text-white/40 hover:text-brand transition-colors font-black text-[11px] uppercase tracking-widest">Home</button></li>
              <li><button className="text-white/40 hover:text-brand transition-colors font-black text-[11px] uppercase tracking-widest">Services</button></li>
              <li><button className="text-white/40 hover:text-brand transition-colors font-black text-[11px] uppercase tracking-widest">Memberships</button></li>
              <li><button className="text-white/40 hover:text-brand transition-colors font-black text-[11px] uppercase tracking-widest">Reviews</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-brand transition-colors font-black text-[11px] uppercase tracking-widest">Diet Support</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand transition-colors font-black text-[11px] uppercase tracking-widest">Supplements</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand transition-colors font-black text-[11px] uppercase tracking-widest">Training</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand transition-colors font-black text-[11px] uppercase tracking-widest">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10">Newsletter</h4>
            <div className="relative">
              <input type="email" placeholder="YOUR EMAIL" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-[11px] font-black uppercase tracking-widest focus:outline-none focus:border-brand transition-all" />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-brand text-black text-[10px] font-black uppercase tracking-widest rounded-none">Go</button>
            </div>
            <p className="text-[9px] text-brand/40 mt-4 font-black uppercase tracking-[0.3em]">No spam, only gains.</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 font-black uppercase text-[9px] tracking-[0.3em] text-center">
            &copy; {new Date().getFullYear()} ALIO FITNESS GYM BETTIAH. RAW ELITE POWER.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-white/20 hover:text-brand font-black uppercase text-[9px] tracking-[0.3em] transition-colors">Privacy</a>
            <a href="#" className="text-white/20 hover:text-brand font-black uppercase text-[9px] tracking-[0.3em] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
