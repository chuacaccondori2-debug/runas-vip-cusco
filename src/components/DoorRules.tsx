import React from 'react';
import { ShieldCheck, UserCheck, AlertTriangle, FileCheck, Ban } from 'lucide-react';
import { DOOR_RULES } from '../data/siteData';
import { STOCK_IMAGES } from '../data/images';
import { SafeImage } from './SafeImage';

export const DoorRules: React.FC = () => {
  return (
    <section id="normas" className="py-20 lg:py-24 bg-neutral-900/50 border-b border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Seguridad y Transparencia
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Normas de ingreso claras en puerta: cero chamuyo, cero peleas.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Publicamos nuestras normas para erradicar las promesas engañosas de jaladores en la calle, prevenir malentendidos y garantizar un espacio donde todos puedan juerguear con respeto y seguridad.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Rules List (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {DOOR_RULES.map((rule, idx) => (
              <div
                key={rule.title}
                className="bg-neutral-950 rounded-xl p-5 border border-neutral-800 flex items-start gap-4 hover:border-neutral-700 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  {idx === 0 && <UserCheck className="w-5 h-5" />}
                  {idx === 1 && <Ban className="w-5 h-5" />}
                  {idx === 2 && <AlertTriangle className="w-5 h-5" />}
                  {idx === 3 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 4 && <FileCheck className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 font-display">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {rule.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo & Local Info (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 relative">
              <SafeImage
                src={STOCK_IMAGES.cuscoNightStreet.url}
                alt={STOCK_IMAGES.cuscoNightStreet.alt}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-sm border border-neutral-800/80 text-left">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Ubicación Formal
                </span>
                <p className="text-xs text-neutral-200">
                  Calle Concevidayoc 171, a pocas cuadras de la Plaza de Armas del Cusco. Sin callejones oscuros, con acceso vehicular y patrullaje constante.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 text-left">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                Compromiso Contra la Discriminación
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                En Runas VIP se rechaza tajantemente la discriminación por motivos de raza, origen o apariencia. El ingreso se basa en el cumplimiento de las normas de convivencia, mayoría de edad y aforo del local.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
