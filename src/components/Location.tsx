import { useLanguage } from '../LanguageContext';
import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';

export function Location() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="glass border border-white/10 rounded-none overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase mb-12 leading-[0.85]">
                Visit our <br /> <span className="text-brand">Powerhouse</span>
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-none flex items-center justify-center text-brand shrink-0">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-white/40 font-black uppercase text-[10px] tracking-[0.3em] mb-2">Our Location</h4>
                    <p className="text-white font-bold text-xl uppercase tracking-tighter leading-tight italic">{t.location.address}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href="tel:+91XXXXXXXXXX"
                    className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 hover:border-brand/40 transition-colors"
                  >
                    <div className="w-10 h-10 bg-brand/10 rounded-none flex items-center justify-center text-brand">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-white font-black uppercase text-[11px] tracking-widest italic">{t.location.call}</span>
                  </a>
                  <a 
                    href="https://goo.gl/maps/XXXXX"
                    target="_blank"
                    className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 hover:border-brand/40 transition-colors"
                  >
                    <div className="w-10 h-10 bg-brand/10 rounded-none flex items-center justify-center text-brand">
                      <Navigation className="w-5 h-5" />
                    </div>
                    <span className="text-white font-black uppercase text-[11px] tracking-widest italic">{t.location.directions}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="h-[400px] lg:h-auto grayscale contrast-125 hover:grayscale-0 transition-all duration-700 overflow-hidden relative border-l border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand/5 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
