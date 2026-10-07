import React, { useState } from 'react';
import { Bell, BellRing, Check, X } from 'lucide-react';

export const PushNotificationBar: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleSubscribe = () => {
    // Check if Notification API exists in browser
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('Runas VIP Cusco', {
            body: '¡Listo! Te avisaremos de los Viernes y Sábados de Cabo Blanco antes de las 10 PM.',
            icon: '/favicon.ico'
          });
        }
      }).catch(() => {});
    }
    setSubscribed(true);
  };

  if (dismissed) return null;

  return (
    <div className="bg-amber-500/10 border-b border-amber-500/20 text-xs text-neutral-200 py-2.5 px-4 relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          {subscribed ? (
            <BellRing className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <Bell className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
          )}
          <span>
            {subscribed ? (
              <strong className="text-emerald-400 font-semibold">
                ¡Notificaciones activadas! Te avisaremos de promociones exclusivas antes de cada fin de semana.
              </strong>
            ) : (
              <span>
                <strong className="text-amber-400 font-bold">Alertas de Juerga en Cusco:</strong> Recibe avisos de promociones de Ron Cabo Blanco y eventos los viernes antes de las 10 P.M.
              </span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {!subscribed ? (
            <button
              onClick={handleSubscribe}
              className="px-3 py-1 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              Activar avisos locales
            </button>
          ) : (
            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Alertas configuradas
            </span>
          )}

          <button
            onClick={() => setDismissed(true)}
            aria-label="Ocultar aviso de notificaciones"
            className="p-1 text-neutral-400 hover:text-white rounded"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
