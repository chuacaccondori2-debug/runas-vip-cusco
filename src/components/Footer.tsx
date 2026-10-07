import React from 'react';
import { Wine, MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal, onOpenReservation }) => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 pt-16 pb-24 md:pb-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand & Value Statement (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-neutral-950 font-bold">
                <Wine className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-display">
                RUNAS <span className="text-amber-400">VIP</span>
              </span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              La discoteca más confiable y segura de Cusco para tu grupo. Licor 100% original con botellas selladas, pase digital sin intermediarios y cero chamuyo en puerta.
            </p>

            <div className="pt-2 text-xs text-neutral-500 space-y-1">
              <p>Razón Social / RUC: <strong className="text-neutral-300">{BUSINESS_INFO.ruc}</strong></p>
              <p>Licencia de Funcionamiento e ITSE vigentes en Cusco.</p>
            </div>
          </div>

          {/* Quick Navigation (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#promociones" className="hover:text-amber-400 transition-colors">
                  Promociones
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-amber-400 transition-colors">
                  Lo que ganas
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-amber-400 transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#carta" className="hover:text-amber-400 transition-colors">
                  Carta de tragos
                </a>
              </li>
              <li>
                <a href="#normas" className="hover:text-amber-400 transition-colors">
                  Normas de puerta
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-amber-400 transition-colors">
                  Ubicación exacta
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Contacto y Atención
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_INFO.schedule}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: +51 {BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Social & Action (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Canales Oficiales
            </h4>
            
            <a
              href={BUSINESS_INFO.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold border border-neutral-800 transition-colors w-full justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.41a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z"/>
              </svg>
              <span>Seguir en TikTok (@runasvipcusco)</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-amber-500/20"
            >
              ¡¡Reserva tu mesa en 1 minuto!!
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Runas VIP. Todos los derechos reservados.</span>
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="hover:text-amber-400 underline transition-colors"
            >
              Aviso de Privacidad y Tratamiento de Datos
            </button>
          </div>

          <div className="flex items-center gap-1 text-neutral-500">
            <span>Diseñado para el público joven de Cusco ·</span>
            <span className="text-amber-400 font-semibold">Cero Estafas</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
