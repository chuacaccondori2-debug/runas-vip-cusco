import React from 'react';
import { ShieldCheck, UserCheck, Flame, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { STOCK_IMAGES } from '../data/images';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[350px] h-[350px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Cintillo / Kicker superior (clean text with subtle typographic accent, no pill box) */}
            <div className="flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
              <span>La previa empieza aquí: pase directo por WhatsApp.</span>
            </div>

            {/* Titular principal (El único h1 de la página) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 font-display [text-wrap:balance]">
              Reserva tu mesa en <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Runas VIP</span> y entra sin roche.
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl">
              Reserva por WhatsApp, llega antes de las 10 P.M. y aprovecha descuentos exclusivos en tus tragos favoritos.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenReservation}
                className="group px-7 py-4 text-base font-extrabold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl hover:brightness-110 active:scale-98 transition-all duration-150 glow-amber flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 cursor-pointer"
              >
                <span>¡¡Reserva tu mesa en 1 minuto!!</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/51972492806?text=Hola%20Runas%20VIP%2C%20quiero%20hacer%20una%20consulta%20con%20recepci%C3%B3n%20para%20hoy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-base font-bold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-xl transition-all duration-150 flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>¡Habla con recepción!</span>
              </a>
            </div>

            {/* Puntos de confianza rápida (4 puntos del brief) */}
            <div className="w-full pt-8 border-t border-neutral-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span className="font-bold text-sm text-white">Cero Estafas</span>
                  </div>
                  <span className="text-xs text-neutral-400">Botellas 100% originales.</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                    <UserCheck className="w-4 h-4 shrink-0" />
                    <span className="font-bold text-sm text-white">Sin Jaladores</span>
                  </div>
                  <span className="text-xs text-neutral-400">Pase digital por WhatsApp.</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                    <Flame className="w-4 h-4 shrink-0" />
                    <span className="font-bold text-sm text-white">Promociones</span>
                  </div>
                  <span className="text-xs text-neutral-400">Precios exactos sin sorpresas.</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="font-bold text-sm text-white">Concevidayoc 171</span>
                  </div>
                  <span className="text-xs text-neutral-400">Lun a Sáb: 8 P.M a 5 A.M.</span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: High-impact photo representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              <SafeImage
                src={STOCK_IMAGES.heroNightclub.url}
                alt={STOCK_IMAGES.heroNightclub.alt}
                className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full"
              />
              
              {/* Vignette and gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85" />

              {/* Floating highlight badge on the image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Centro Histórico de Cusco</span>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Abierto hoy 8 PM - 5 AM
                  </span>
                </div>
                <p className="text-sm font-medium text-white">
                  Calle Concevidayoc 171 · Discoteca formal, segura y sin sorpresas.
                </p>
              </div>
            </div>

            {/* Decorative background glow behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-rose-500/20 rounded-2xl blur-lg -z-10 opacity-70" />
          </div>

        </div>
      </div>
    </section>
  );
};
