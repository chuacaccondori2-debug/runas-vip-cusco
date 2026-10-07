import React, { useState } from 'react';
import { Menu, X, Wine } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Promociones', href: '#promociones' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Cómo Funciona', href: '#como-funciona' },
    { label: 'Carta de Tragos', href: '#carta' },
    { label: 'Normas de Puerta', href: '#normas' },
    { label: 'Ubicación', href: '#ubicacion' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-neutral-950 font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Wine className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight font-display text-white group-hover:text-amber-400 transition-colors">
              RUNAS <span className="text-amber-400">VIP</span>
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/51972492806?text=Hola%20Runas%20VIP%2C%20quiero%20hacer%20una%20consulta%20con%20recepci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-neutral-300 hover:text-white px-3 py-2 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
            >
              ¡Habla con recepción!
            </a>
            <button
              onClick={onOpenReservation}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400"
            >
              ¡¡Reserva tu mesa en 1 minuto!!
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="p-2 text-neutral-400 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href="https://wa.me/51972492806?text=Hola%20Runas%20VIP%2C%20quiero%20hacer%20una%20consulta%20con%20recepci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 text-sm font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-lg"
            >
              ¡Habla con recepción!
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg shadow-md shadow-amber-500/20"
            >
              ¡¡Reserva tu mesa en 1 minuto!!
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
