/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Trust } from './components/Trust';
import { Services } from './components/Services';
import { Membership } from './components/Membership';
import { Transformation } from './components/Transformation';
import { Diet } from './components/Diet';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { PopUp } from './components/PopUp';
import { WhatsAppSticky } from './components/WhatsAppSticky';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative overflow-x-hidden pt-16">
        <PopUp />
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Trust />
          <Services />
          <Membership />
          <Transformation />
          <Diet />
          <Testimonials />
          <ContactForm />
          <Location />
        </main>
        <Footer />
        <WhatsAppSticky />
      </div>
    </LanguageProvider>
  );
}
