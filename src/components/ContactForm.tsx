import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter text-white uppercase leading-[0.8] mb-10">
              Book Free <br /> <span className="text-brand">Consultation</span>
            </h2>
            <p className="text-white/40 font-bold uppercase tracking-tight text-[11px] mb-12 max-w-sm">
              आज ही अपनी Fitness Journey शुरू करें. Our expert team will guide you to your goals.
            </p>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center text-brand">
                <Send className="w-10 h-10" />
              </div>
              <div>
                <p className="text-white font-black text-2xl italic tracking-tighter uppercase">Quick Response</p>
                <p className="text-brand font-black uppercase text-[10px] tracking-[0.2em] mt-1 shadow-brand">Within 24 Hours</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="glass border border-white/10 p-10 md:p-16 rounded-none relative">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-brand rounded-none flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(204,255,0,0.4)]">
                      <CheckCircle2 className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4">{t.form.success}</h3>
                    <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.2em]">Our team will call you back shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="md:col-span-2">
                      <label className="block text-white/50 font-black uppercase text-[9px] tracking-[0.3em] mb-3 px-1">
                        {t.form.nameLabel}
                      </label>
                      <input 
                        required
                        type="text" 
                        placeholder="नाम / Name"
                        className="w-full brutalist-input" 
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-white/50 font-black uppercase text-[9px] tracking-[0.3em] mb-3 px-1">
                        {t.form.phoneLabel}
                      </label>
                      <input 
                        required
                        type="tel" 
                        placeholder="मोबाइल नंबर / Phone"
                        className="w-full brutalist-input" 
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-white/50 font-black uppercase text-[9px] tracking-[0.3em] mb-3 px-1">
                        {t.form.serviceLabel}
                      </label>
                      <select 
                        required
                        className="w-full brutalist-input appearance-none cursor-pointer"
                      >
                        <option value="">{t.form.serviceLabel}</option>
                        <option value="personal">{t.services.personalTraining}</option>
                        <option value="weight">{t.services.weightTraining}</option>
                        <option value="diet">{t.services.dietSupport}</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 pt-4">
                      <button 
                        disabled={status === 'loading'}
                        className="w-full brutalist-button py-5 text-base flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {status === 'loading' ? 'Sending Request...' : 'Book Now 🚀'}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
