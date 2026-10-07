import React from 'react';
import { Smartphone, Send, PartyPopper } from 'lucide-react';

interface HowItWorksProps {
  onOpenReservation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenReservation }) => {
  const steps = [
    {
      number: "01",
      title: "Elige tu promo o trago y completa tus datos en 1 minuto",
      description: "Selecciona tu promoción favorita (Ron Cabo Blanco, Medellín, Jäger o Flor de Caña) e indica cuántas personas vienen en tu grupo.",
      icon: Smartphone
    },
    {
      number: "02",
      title: "Recibe tu pase digital oficial directo en WhatsApp con mesa reservada",
      description: "Generamos tu pase digital verificado con código único para tu grupo, asegurando precio exacto sin jaladores ni intermediarios.",
      icon: Send
    },
    {
      number: "03",
      title: "Llega antes de las 10 P.M., muestra tu pase en puerta en Concevidayoc 171 y entra directo sin roche",
      description: "Llegas con tu gente, muestras el pase desde tu celular y entras a tu mesa asignada con shot de cortesía y botella sellada.",
      icon: PartyPopper
    }
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-24 bg-neutral-950 border-b border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Paso a Paso
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Cómo funciona: 3 pasos para asegurar tu noche
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Olvídate de las discusiones en la puerta y las estafas en la calle. El proceso es rápido, transparente y directo.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-14">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-neutral-900/60 rounded-2xl p-8 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <span className="text-neutral-600 text-2xl font-bold">→</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button */}
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
