import React from 'react';
import { LogIn, SplitSquareVertical, Armchair, Utensils, Repeat, ArrowRight, CheckCircle2 } from 'lucide-react';
import { STOCK_IMAGES } from '../data/images';
import { SafeImage } from './SafeImage';

interface ValuePropsProps {
  onOpenReservation: () => void;
}

export const ValueProps: React.FC<ValuePropsProps> = ({ onOpenReservation }) => {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-neutral-900/60 border-b border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Ventajas Exclusivas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Lo que ganas en Runas VIP: juerga segura, sin estafas ni chamuyo.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Eliminamos todo lo que arruina una salida nocturna en Cusco. Aquí la noche se vive con precios claros, respeto y cero complicaciones.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-14">
          
          {/* Card 1: Entra Directo (Spans 7 cols) */}
          <div className="md:col-span-7 bg-neutral-950 rounded-2xl p-7 lg:p-9 border border-neutral-800 flex flex-col justify-between group hover:border-neutral-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <LogIn className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">01 · Acceso Prioritario</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3 font-display">
                Entra Directo
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed mb-4">
                <strong>Lo que ganas:</strong> Llegas, muestras tu pase digital en puerta y adentro. Sin negociar precios con desconocidos, sin aguantar mentiras de jaladores y sin perder tiempo de tu noche.
              </p>
              <div className="text-xs text-neutral-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nada de jaladores que te agarran de punto en la calle con cuentos.</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-900 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Pase digital directo por WhatsApp</span>
              <button
                onClick={onOpenReservation}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                Reservar pase <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Photo Feature - Amigos brindando en mesa (Spans 5 cols) */}
          <div className="md:col-span-5 bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 relative flex flex-col justify-end">
            <SafeImage
              src={STOCK_IMAGES.friendsCheers.url}
              alt={STOCK_IMAGES.friendsCheers.alt}
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
            
            <div className="relative z-10 p-7">
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">02 · Finanzas Claras</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-2 font-display">
                La Previa Ya Está Pagada
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong>Lo que ganas:</strong> Tu mancha sabe exacto cuánto pone cada uno antes de salir. Paquete cerrado: selladas, entradas y shot free. Se divide, se paga y se chupa tranquilo sin precios sorpresa al final.
              </p>
            </div>
          </div>

          {/* Card 3: Mesa Segura (Spans 4 cols) */}
          <div className="md:col-span-4 bg-neutral-950 rounded-2xl p-7 border border-neutral-800 flex flex-col justify-between group hover:border-neutral-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Armchair className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">03 · Comodidad Garantizada</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3 font-display">
                Mesa Segura (Pase Anticipado)
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong>Lo que ganas:</strong> No te quedas fuera ni te estresas con el local abarrotado. Mientras otros hacen cola en la calle, tú confirmas por WhatsApp antes de las 10 PM y tu mesa ya está esperándote.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-900 text-xs text-neutral-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Reserva prioritaria para tu grupo</span>
            </div>
          </div>

          {/* Card 4: El Bajón Está Cubierto (Spans 4 cols) */}
          <div className="md:col-span-4 bg-neutral-950 rounded-2xl p-7 border border-neutral-800 flex flex-col justify-between group hover:border-neutral-700 transition-colors relative overflow-hidden">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Utensils className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">04 · Post-Juerga</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3 font-display">
                El Bajón Está Cubierto
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong>Lo que ganas:</strong> Cierras la noche con comida rápida y caliente, sin andar regalado por las calles a las 4 o 5 AM. Runas VIP te da pase directo a aliados de comida rápida para resolver el bajón al toque.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-900 text-xs text-neutral-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fast food aliado para terminar la noche</span>
            </div>
          </div>

          {/* Card 5: Vuelve Gratis el Próximo Finde (Spans 4 cols) */}
          <div className="md:col-span-4 bg-neutral-950 rounded-2xl p-7 border border-neutral-800 flex flex-col justify-between group hover:border-neutral-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Repeat className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">05 · Fidelidad</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3 font-display">
                Vuelve Gratis el Próximo Finde
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong>Lo que ganas:</strong> Ya no eres cliente golondrina. En Runas VIP, si consumes en barra, te llevas un pase con código para volver gratis con un acompañante el siguiente fin de semana.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-900 text-xs text-neutral-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Premio directo a tu recurrencia</span>
            </div>
          </div>

        </div>

        {/* Section bottom CTA */}
        <div className="text-center">
          <button
            onClick={onOpenReservation}
            className="px-8 py-4 text-sm sm:text-base font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl hover:brightness-110 active:scale-98 transition-all glow-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400"
          >
            ¡¡Reserva tu mesa en 1 minuto!!
          </button>
        </div>

      </div>
    </section>
  );
};
