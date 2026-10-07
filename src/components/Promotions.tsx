import React from 'react';
import { Clock, Sparkles, Tag, ArrowRight, ShieldCheck } from 'lucide-react';
import { PROMOTIONS, Promotion } from '../data/siteData';
import { STOCK_IMAGES } from '../data/images';
import { SafeImage } from './SafeImage';

interface PromotionsProps {
  onSelectPromo: (promoName: string) => void;
}

export const Promotions: React.FC<PromotionsProps> = ({ onSelectPromo }) => {
  return (
    <section id="promociones" className="py-20 lg:py-28 bg-neutral-900/40 border-b border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
              Promociones Exclusivas de Previa
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
              Llega antes de las 10 P.M. y chupa a precio clavado.
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg">
              Precios transparentes y sin chamuyo. Garantía de licor 100% original en botella sellada.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 bg-neutral-950 px-4 py-3 rounded-xl border border-neutral-800 self-start md:self-auto shrink-0">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Condición: Válidas ingresando antes de las 10:00 P.M.</span>
          </div>
        </div>

        {/* Highlight Banner with Bottle Image */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 p-7 lg:p-10 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Garantía Runas VIP Cero Estafas</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 font-display">
              ¿Por qué exigir botellas selladas y evitar la informalidad?
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              En locales informales te rebajan precios vendiendo licor adulterado o cobrando cubiertos escondidos. En Runas VIP todas las botellas se abren en tu mesa frente a tus ojos. Tu salud y tu diversión van primero.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-medium text-neutral-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Precinto de fábrica intacto
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Sin cobros sorpresivos en barra
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Boleta y RUC formal: 20123456789
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 h-56 lg:h-full relative min-h-[220px]">
            <SafeImage
              src={STOCK_IMAGES.bottleBarService.url}
              alt={STOCK_IMAGES.bottleBarService.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-950 lg:from-neutral-950 via-transparent to-transparent" />
          </div>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {PROMOTIONS.map((promo: Promotion) => (
            <div
              key={promo.id}
              className="bg-neutral-950 rounded-2xl p-7 border border-neutral-800 hover:border-amber-500/50 transition-all duration-200 flex flex-col justify-between group shadow-lg shadow-black/40"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {promo.tag}
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    {promo.schedule}
                  </span>
                </div>

                {/* Promo Name & Price */}
                <h3 className="text-2xl font-bold text-white mb-2 font-display">
                  {promo.name}
                </h3>
                
                <div className="my-3 py-2 px-3 bg-neutral-900 rounded-lg border border-neutral-800 text-amber-300 font-extrabold text-lg flex items-center justify-between">
                  <span>{promo.promo}</span>
                  {promo.price && <Tag className="w-4 h-4 text-amber-400" />}
                </div>

                {/* Short Phrase (Brief copy) */}
                <p className="text-xs font-semibold text-amber-400/90 italic mb-3">
                  "{promo.shortPhrase}"
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {promo.description}
                </p>
              </div>

              {/* Action */}
              <div className="pt-5 border-t border-neutral-900">
                <button
                  onClick={() => onSelectPromo(promo.name)}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-98 transition-all flex items-center justify-center gap-2 group-hover:brightness-105"
                >
                  <span>Elegir esta promo y reservar</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-neutral-400 text-sm mb-4">
            ¿Tienes otra bebida en mente? Revisa nuestra carta completa o consúltanos directo.
          </p>
          <a
            href="#carta"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            Ver toda la carta de licores originales <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
