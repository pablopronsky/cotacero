'use client';
import { motion } from 'motion/react';
import { contactData } from '@/data/contact';
import { ArrowDownRight, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-brand-bone dark:bg-brand-graphite pt-24 lg:pt-32 flex flex-col justify-between overflow-hidden transition-colors duration-300">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none hidden dark:block" style={{
        backgroundImage: `linear-gradient(90deg, rgba(195,138,90,.07) 1px, transparent 1px), linear-gradient(0deg, rgba(245,242,237,.035) 1px, transparent 1px)`,
        backgroundSize: '78px 78px'
      }} />
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none block dark:hidden" style={{
        backgroundImage: `linear-gradient(90deg, rgba(195,138,90,.075) 1px, transparent 1px), linear-gradient(0deg, rgba(43,45,47,.045) 1px, transparent 1px)`,
        backgroundSize: '78px 78px'
      }} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="inline-flex items-center gap-2 border border-brand-graphite/20 dark:border-brand-bone/20 rounded-full px-4 py-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-graphite dark:text-brand-bone opacity-70" />
                  <span className="text-[11px] font-medium tracking-[0.02em] text-brand-graphite dark:text-brand-bone">
                    City Bell
                  </span>
                </div>
              </div>
              
              <h1 className="text-[clamp(42px,7vw,88px)] leading-[1.05] tracking-[-0.02em] font-light text-brand-graphite dark:text-brand-bone mb-8 max-w-[920px]">
                Terminaciones <br className="hidden md:block" />
                superiores, <br className="hidden md:block" />
                <strong className="font-[790]">sin improvisación.</strong>
              </h1>
              
              <p className="text-sm md:text-base text-brand-graphite/70 dark:text-brand-bone/70 max-w-xl mb-12 border-l border-brand-copper pl-6">
                Pisos, revestimientos, decks y trabajos en madera con diagnóstico, instalación profesional y control de calidad en obra.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contacto" 
                  className="inline-flex items-center justify-center bg-brand-graphite dark:bg-brand-bone text-brand-bone dark:text-brand-graphite px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] hover:bg-brand-black dark:hover:bg-white transition-colors"
                >
                  Solicitar asesoramiento
                </a>
                <a 
                  href={contactData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-brand-graphite/20 dark:border-brand-bone/20 text-brand-graphite dark:text-brand-bone px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] hover:border-brand-copper hover:text-brand-copper dark:hover:border-brand-copper dark:hover:text-brand-copper transition-colors"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] w-full mt-10 lg:mt-0">
             <motion.div 
               className="w-full h-full relative border border-brand-graphite/10 dark:border-brand-bone/10 bg-brand-graphite/5 dark:bg-brand-bone/5 p-4"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             >
                <div className="w-full h-full relative overflow-hidden bg-brand-graphite flex items-center justify-center text-brand-bone/30 text-sm tracking-widest uppercase">
                  {/* Real uploaded hero photo */}
                  <Image 
                    src="/hero.png" 
                    alt="Instalación profesional de superficies"
                    fill
                    className="object-cover opacity-80 mix-blend-luminosity lg:mix-blend-normal hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                    priority
                  />
                  {/* Floating CTA embedded directly on the photo */}
                  <div className="absolute inset-0 bg-brand-graphite/40 dark:bg-brand-black/20 flex flex-col justify-end p-8 md:p-12">
                    <a 
                      href="#contacto"
                      className="inline-flex w-max items-center justify-center bg-brand-copper text-brand-bone px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] hover:bg-brand-bone hover:text-brand-black transition-colors"
                    >
                      Cotizar mi proyecto
                    </a>
                  </div>
                  <div className="absolute inset-x-8 top-8 h-1 bg-brand-copper max-w-[120px]" />
                </div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Links Footer - Architectural grid style */}
      <div className="relative z-10 w-full mt-16 border-t border-brand-graphite/10 dark:border-brand-bone/10 bg-brand-bone dark:bg-brand-graphite transition-colors duration-300">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-brand-graphite/10 dark:divide-brand-bone/10">
          <a href={contactData.mapsLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-6 px-6 lg:px-12 flex items-center justify-between group hover:bg-brand-graphite/5 dark:hover:bg-brand-bone/5 transition-colors">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-graphite dark:text-brand-bone">Ver ubicación</span>
            <ArrowDownRight className="w-4 h-4 text-brand-copper group-hover:-rotate-45 transition-transform" />
          </a>
          <a href={contactData.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 py-6 px-6 lg:px-12 flex items-center justify-between group hover:bg-brand-graphite/5 dark:hover:bg-brand-bone/5 transition-colors">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-graphite dark:text-brand-bone">Instagram</span>
            <ArrowDownRight className="w-4 h-4 text-brand-copper group-hover:-rotate-45 transition-transform" />
          </a>
          <a href="#metodo" className="flex-1 py-6 px-6 lg:px-12 flex items-center justify-between group hover:bg-brand-graphite/5 dark:hover:bg-brand-bone/5 transition-colors">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-graphite dark:text-brand-bone">Conocer el Método</span>
            <ArrowDownRight className="w-4 h-4 text-brand-copper group-hover:-rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
