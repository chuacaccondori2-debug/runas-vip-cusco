import React, { useState } from 'react';
import { DRINKS_MENU, Drink } from '../data/siteData';
import { Wine, ShieldCheck, Sparkles, Check } from 'lucide-react';

interface DrinkMenuProps {
  onSelectDrink: (drinkName: string) => void;
}

export const DrinkMenu: React.FC<DrinkMenuProps> = ({ onSelectDrink }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = [
    'Todos',
    'Rones',
    'Licores',
    'Ginebras',
    'Whiskys',
    'Jarras Frías',
    'Vodkas',
    'Tequilas'
  ];

  const filteredDrinks = selectedCategory === 'Todos'
    ? DRINKS_MENU
    : DRINKS_MENU.filter((drink: Drink) => drink.category === selectedCategory);

  return (
    <section id="carta" className="py-20 lg:py-24 bg-neutral-950 border-b border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
              Carta Oficial Runas VIP
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
              Bebidas que vendemos: 100% Originales y Selladas
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Cero licores bamba ni mezclas raras. Cada una de las 26 opciones de nuestra carta cuenta con precinto de fábrica y se sirve con total transparencia.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-xl self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>26 bebidas garantizadas con precinto original</span>
          </div>
        </div>

        {/* Category Tabs (Interactive Filter Controls conforming to skill guidelines) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                selectedCategory === category
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/20'
                  : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {filteredDrinks.map((drink: Drink) => (
            <div
              key={drink.id}
              className="bg-neutral-900/50 hover:bg-neutral-900 rounded-xl p-4 border border-neutral-800/80 hover:border-neutral-700 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  drink.highlight 
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                    : 'bg-neutral-800 text-neutral-400'
                }`}>
                  <Wine className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-white group-hover:text-amber-300 transition-colors truncate">
                      {drink.name}
                    </span>
                    {drink.highlight && (
                      <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                    )}
                  </div>
                  <span className="text-xs text-neutral-500">
                    {drink.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onSelectDrink(drink.name)}
                title={`Elegir ${drink.name} en mi reserva`}
                className="p-1.5 rounded-lg bg-neutral-800 hover:bg-amber-400 hover:text-neutral-950 text-neutral-300 transition-colors shrink-0 text-xs font-semibold flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <Check className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Elegir</span>
              </button>
            </div>
          ))}
        </div>

        {/* Reassurance Footer of the Menu */}
        <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">¿Preocupado por el licor adulterado en la noche cusqueña?</h4>
              <p className="text-xs text-neutral-400">En Runas VIP abrimos la botella frente a ti. Si tienes dudas, te mostramos el código y precinto antes de servir.</p>
            </div>
          </div>
          <a
            href="#reserva"
            className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shrink-0 whitespace-nowrap transition-colors"
          >
            Asegurar trago en reserva
          </a>
        </div>

      </div>
    </section>
  );
};
