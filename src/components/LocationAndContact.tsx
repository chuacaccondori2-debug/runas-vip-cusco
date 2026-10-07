import React from 'react';
import { MapPin, Clock, Phone, Mail, ExternalLink, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const LocationAndContact: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 lg:py-24 bg-neutral-900/30 border-b border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Encuéntranos en el Centro Histórico
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Ubicación céntrica y segura en Cusco
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Estamos en Calle Concevidayoc 171, a pocos pasos de la plaza, con acceso rápido, taxis autorizados y patrullaje nocturno continuo.
          </p>
        </div>

        {/* 2-Column Grid: Contact cards + Map Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">Dirección Exacta</span>
                <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {BUSINESS_INFO.address}
                </p>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 mt-2"
                >
                  Abrir en Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">Horario de Atención</span>
                <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {BUSINESS_INFO.schedule}
                </p>
                <span className="text-xs text-neutral-400 mt-1 block">
                  Promociones y shot de cortesía válidos ingresando antes de las 10:00 P.M.
                </span>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">WhatsApp y Teléfono</span>
                <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                  +51 {BUSINESS_INFO.phone}
                </p>
                <a
                  href={`https://wa.me/51${BUSINESS_INFO.phone}?text=Hola%20Runas%20VIP%2C%20tengo%20una%20consulta`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mt-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Chatear con recepción directa
                </a>
              </div>
            </div>

            {/* Email & Tax Info */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">Correo Electrónico & Datos Fiscales</span>
                <p className="text-sm font-bold text-white mt-0.5">
                  {BUSINESS_INFO.email}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  RUC: <strong className="text-neutral-200">{BUSINESS_INFO.ruc}</strong> (Negocio Formal Registrado)
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden relative shadow-xl">
            <div className="p-4 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white">Centro Histórico de Cusco · Concevidayoc 171</span>
              </div>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                Abrir en App <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="w-full h-[400px] relative bg-neutral-900">
              <iframe
                title="Mapa de Runas VIP en Cusco"
                src="https://maps.google.com/maps?q=-13.5204493,-71.9810255&hl=es&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Pin Overlay Card */}
              <div className="absolute bottom-4 left-4 p-3.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-left max-w-xs shadow-lg">
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider block font-display">
                  RUNAS VIP DISCOTECA
                </span>
                <p className="text-xs text-neutral-300 mt-0.5">
                  Calle Concevidayoc 171 · Entrada principal con control digital.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
