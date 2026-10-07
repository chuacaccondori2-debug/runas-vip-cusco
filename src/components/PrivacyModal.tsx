import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-left shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 id="privacy-title" className="text-xl font-bold text-white font-display">
              Aviso de Privacidad y Tratamiento de Datos
            </h3>
            <span className="text-xs text-neutral-500">Runas VIP · RUC {BUSINESS_INFO.ruc}</span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2 border-t border-neutral-800">
          <p>
            En cumplimiento de la <strong>Ley N° 29733 (Ley de Protección de Datos Personales del Perú)</strong> y su Reglamento, <strong>Runas VIP</strong> informa a los usuarios sobre el tratamiento de sus datos personales facilitados a través de esta landing page.
          </p>

          <div>
            <h4 className="font-bold text-white mb-1">1. Responsable del Tratamiento</h4>
            <p>
              Runas VIP, con domicilio legal en Calle Concevidayoc 171, Centro Histórico de Cusco, Cusco 08002, y RUC {BUSINESS_INFO.ruc}. Correo de contacto: {BUSINESS_INFO.email}.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1">2. Finalidad de los Datos</h4>
            <p>
              Los datos solicitados (nombre completo, número de WhatsApp, tamaño de grupo y selección de bebida/promoción) son recabados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-neutral-400">
              <li>Generar y emitir el pase digital oficial de acceso y reserva de mesa.</li>
              <li>Confirmar la reserva a través del canal oficial de WhatsApp del establecimiento.</li>
              <li>Validar la identidad del titular en puerta antes de las 10:00 P.M.</li>
              <li>Enviar información sobre promociones exclusivas, eventos y beneficios para clientes frecuentes.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1">3. Confidencialidad y Seguridad</h4>
            <p>
              Runas VIP garantiza que los datos personales no serán vendidos, cedidos ni compartidos con empresas terceras para fines comerciales ajenos a la actividad de la discoteca. Se adoptan medidas de seguridad técnicas para evitar su pérdida o acceso no autorizado.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1">4. Ejercicio de Derechos ARCO</h4>
            <p>
              El usuario puede ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) enviando una solicitud al correo <strong className="text-amber-400">{BUSINESS_INFO.email}</strong> o escribiendo al WhatsApp <strong>+51 {BUSINESS_INFO.phone}</strong>.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm transition-colors"
          >
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
