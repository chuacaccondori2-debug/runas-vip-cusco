import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface StickyMobileCTAProps {
  onOpenReservation: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenReservation }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past initial hero (e.g. 300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Acceso rápido para reservar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2.5 shadow-2xl flex items-center gap-2 max-h-[70px]"
    >
      <a
        href={`https://wa.me/51${BUSINESS_INFO.phone}?text=Hola%20Runas%20VIP%2C%20quiero%20hacer%20una%20consulta`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar con recepción por WhatsApp"
        className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400 hover:text-white shrink-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>

      <button
        onClick={onOpenReservation}
        className="flex-1 py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-md shadow-amber-500/20 active:scale-95 transition-all truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        ¡¡Reserva tu mesa en 1 minuto!!
      </button>
    </aside>
  );
};
