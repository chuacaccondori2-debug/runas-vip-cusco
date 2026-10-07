import React, { useState, useEffect } from 'react';
import { PROMOTIONS, DRINKS_MENU } from '../data/siteData';
import { CheckCircle2, MessageCircle, AlertCircle, Sparkles, Copy, Check, Clock, MapPin, Users, Ticket, Calendar, Mail } from 'lucide-react';

// Aquí se conectará después el webhook que recibirá las solicitudes (ej. Zapier, Make o Google Sheets)
const WEBHOOK_URL = "https://hook.us2.make.com/wjh82tdqcdj6lmhp444pp2be5mtifvri";

interface ReservationFormProps {
  initialPromo?: string;
  onOpenPrivacyModal: () => void;
}

interface FormData {
  nombre: string;
  correo: string;
  whatsapp: string;
  fecha: string;
  personas: string;
  promocion: string;
  consentimiento: boolean;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({
  initialPromo,
  onOpenPrivacyModal
}) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    whatsapp: '',
    fecha: todayStr,
    personas: '4 personas (Recomendado para mancha)',
    promocion: initialPromo || "Dos Cabos Pa' Guayar (Viernes) - 2 Selladas a S/ 100",
    consentimiento: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [digitalPassCode, setDigitalPassCode] = useState<string>('');
  const [copiedPass, setCopiedPass] = useState<boolean>(false);

  useEffect(() => {
    if (initialPromo) {
      setFormData((prev) => ({ ...prev, promocion: initialPromo }));
    }
  }, [initialPromo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Por favor ingresa tu nombre completo.';
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres.';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'Por favor ingresa tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo.trim())) {
      newErrors.correo = 'Ingresa un correo electrónico válido (ej. usuario@gmail.com).';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Por favor ingresa tu número de WhatsApp.';
    } else {
      const cleanPhone = formData.whatsapp.replace(/\D/g, '');
      if (cleanPhone.length < 9) {
        newErrors.whatsapp = 'Ingresa un número válido de al menos 9 dígitos (ej. 972492806).';
      }
    }

    if (!formData.fecha) {
      newErrors.fecha = 'Por favor selecciona la fecha de tu visita.';
    }

    if (!formData.promocion) {
      newErrors.promocion = 'Selecciona una bebida o promoción para tu reserva.';
    }

    if (!formData.consentimiento) {
      newErrors.consentimiento = 'Debes aceptar las condiciones y el aviso de privacidad para generar tu pase digital.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Generar código de pase digital representativo
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const passCode = `RUNAS-${new Date().getFullYear()}-${randomSuffix}`;
    setDigitalPassCode(passCode);

    // Si WEBHOOK_URL estuviese configurado, se enviaría aquí mediante fetch/axios
    if (WEBHOOK_URL) {
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, passCode, timestamp: new Date().toISOString() })
      }).catch((err) => console.error("Webhook error:", err));
    }

    setIsSubmitted(true);
  };

  const encodedWhatsappMessage = encodeURIComponent(
    `¡Hola Runas VIP! Acabo de registrar mi pase digital en la web oficial.\n\n` +
    `🎫 Código de Pase: ${digitalPassCode}\n` +
    `👤 Nombre: ${formData.nombre}\n` +
    `📅 Fecha: ${formData.fecha}\n` +
    `👥 Grupo: ${formData.personas}\n` +
    `🍾 Promo elegida: ${formData.promocion}\n` +
    `✉️ Correo: ${formData.correo}\n` +
    `📍 Destino: Calle Concevidayoc 171, Cusco\n` +
    `⏰ Llegamos antes de las 10:00 P.M. para validar la promo.\n\n` +
    `¿Me confirman la mesa, por favor?`
  );

  const whatsappDirectUrl = `https://wa.me/51972492806?text=${encodedWhatsappMessage}`;

  const handleCopyPass = () => {
    const textToCopy = `Pase Digital Runas VIP: ${digitalPassCode} | Titular: ${formData.nombre} | Fecha: ${formData.fecha} | Correo: ${formData.correo} | ${formData.personas} | Promo: ${formData.promocion} | Válido antes de 10 PM en Concevidayoc 171.`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedPass(true);
    setTimeout(() => setCopiedPass(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      nombre: '',
      correo: '',
      whatsapp: '',
      fecha: todayStr,
      personas: '4 personas (Recomendado para mancha)',
      promocion: "Dos Cabos Pa' Guayar (Viernes) - 2 Selladas a S/ 100",
      consentimiento: false
    });
    setErrors({});
  };

  return (
    <section id="reserva" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-800/80 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Reserva Oficial por WhatsApp
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Asegura tu mesa y pase digital en 1 minuto
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            Ingreso prioritario, botella sellada y mesa reservada antes de que se llene el local. Sin colas en la calle ni jaladores.
          </p>
        </div>

        {/* State 1: Thank You & Digital Pass View (Post-envío) */}
        {isSubmitted ? (
          <div className="bg-neutral-900/90 rounded-2xl p-6 sm:p-10 border border-amber-500/40 shadow-2xl backdrop-blur-md text-left">
            
            {/* Top congratulation bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">¡Pase Generado con Éxito!</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    ¡Felicitaciones, {formData.nombre}! Tu mesa está pre-asignada.
                  </h3>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-neutral-400 block">Código Único Oficial:</span>
                <span className="text-lg font-mono font-extrabold text-amber-400 tracking-wider">
                  {digitalPassCode}
                </span>
              </div>
            </div>

            {/* Digital Pass Visual Card */}
            <div className="my-8 rounded-xl bg-neutral-950 border border-neutral-800 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-bold tracking-wider uppercase text-white font-display">
                    PASE DIGITAL RUNAS VIP
                  </span>
                </div>
                <span className="text-xs bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2.5 py-1 rounded-md font-semibold">
                  Acceso Prioritario
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm pt-2">
                <div>
                  <span className="text-xs text-neutral-500 block">Titular de la reserva:</span>
                  <span className="font-semibold text-white">{formData.nombre}</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 block">Fecha reservada:</span>
                  <span className="font-semibold text-amber-400 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-400" /> {formData.fecha}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 block">Correo electrónico:</span>
                  <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-amber-400" /> {formData.correo}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 block">Tamaño del grupo:</span>
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-400" /> {formData.personas}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-xs text-neutral-500 block">Promoción / Bebida seleccionada:</span>
                  <span className="font-semibold text-amber-300">{formData.promocion}</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 block">Condición de llegada:</span>
                  <span className="font-semibold text-rose-400 flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Antes de las 10:00 P.M.
                  </span>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 block">Ubicación de puerta:</span>
                  <span className="font-semibold text-neutral-200 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-amber-400" /> Calle Concevidayoc 171, Cusco
                  </span>
                </div>
              </div>
            </div>

            {/* Next Step Callout */}
            <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-8">
              <h4 className="text-sm font-bold text-amber-300 mb-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Último paso: Confirma con recepción en 1 toque por WhatsApp
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300">
                Para que nuestro equipo guarde físicamente la mesa a tu nombre, pulsa el botón verde para enviar los datos pre-redactados directamente al WhatsApp de recepción (<strong>972492806</strong>).
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 px-6 rounded-xl text-sm sm:text-base font-extrabold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Confirmar pase en WhatsApp ahora</span>
              </a>

              <button
                onClick={handleCopyPass}
                className="py-4 px-5 rounded-xl text-sm font-semibold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors flex items-center justify-center gap-2"
              >
                {copiedPass ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedPass ? 'Copiado' : 'Copiar datos'}</span>
              </button>

              <button
                onClick={handleReset}
                className="py-4 px-5 rounded-xl text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors text-center"
              >
                Reservar otra mesa
              </button>
            </div>

          </div>
        ) : (
          /* State 2: Active Reservation Form */
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900/80 rounded-2xl p-6 sm:p-10 border border-neutral-800 shadow-2xl backdrop-blur-md text-left"
            noValidate
          >
            <div className="space-y-6">
              
              {/* Campo 1: Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-bold text-white mb-2"
                >
                  Nombre y Apellido <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej. Carlos Mendoza"
                  className={`w-full px-4 py-3.5 bg-neutral-950 rounded-xl border text-white placeholder-neutral-500 text-sm focus-visible:outline-none focus-visible:ring-2 transition-colors ${
                    errors.nombre
                      ? 'border-rose-500 focus-visible:ring-rose-500'
                      : 'border-neutral-800 focus-visible:border-amber-400 focus-visible:ring-amber-400'
                  }`}
                />
                {errors.nombre && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.nombre}</span>
                  </p>
                )}
                <span className="text-xs text-neutral-500 mt-1 block">
                  El titular deberá presentar su DNI físico para validar el pase en puerta.
                </span>
              </div>

              {/* Fila Doble: Correo Electrónico y WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Campo: Correo Electrónico */}
                <div>
                  <label
                    htmlFor="correo"
                    className="block text-sm font-bold text-white mb-2"
                  >
                    Correo Electrónico <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="Ej. carlos@gmail.com"
                      className={`w-full pl-10 pr-4 py-3.5 bg-neutral-950 rounded-xl border text-white placeholder-neutral-500 text-sm focus-visible:outline-none focus-visible:ring-2 transition-colors ${
                        errors.correo
                          ? 'border-rose-500 focus-visible:ring-rose-500'
                          : 'border-neutral-800 focus-visible:border-amber-400 focus-visible:ring-amber-400'
                      }`}
                    />
                  </div>
                  {errors.correo && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.correo}</span>
                    </p>
                  )}
                  <span className="text-xs text-neutral-500 mt-1 block">
                    Para enviarte tu comprobante y confirmación.
                  </span>
                </div>

                {/* Campo: WhatsApp */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-bold text-white mb-2"
                  >
                    WhatsApp <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500 text-sm">
                      +51
                    </div>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Ej. 972 492 806"
                      className={`w-full pl-12 pr-4 py-3.5 bg-neutral-950 rounded-xl border text-white placeholder-neutral-500 text-sm focus-visible:outline-none focus-visible:ring-2 transition-colors ${
                        errors.whatsapp
                          ? 'border-rose-500 focus-visible:ring-rose-500'
                          : 'border-neutral-800 focus-visible:border-amber-400 focus-visible:ring-amber-400'
                      }`}
                    />
                  </div>
                  {errors.whatsapp && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.whatsapp}</span>
                    </p>
                  )}
                  <span className="text-xs text-neutral-500 mt-1 block">
                    Recepción te enviará tu pase por este número.
                  </span>
                </div>

              </div>

              {/* Fila Doble: Fecha y Cantidad de Personas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Campo: Fecha */}
                <div>
                  <label
                    htmlFor="fecha"
                    className="block text-sm font-bold text-white mb-2"
                  >
                    Fecha de tu Reserva <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Calendar className="w-4 h-4 text-neutral-400" />
                    </div>
                    <input
                      type="date"
                      id="fecha"
                      name="fecha"
                      min={todayStr}
                      value={formData.fecha}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3.5 bg-neutral-950 rounded-xl border text-white text-sm focus-visible:outline-none focus-visible:ring-2 transition-colors [color-scheme:dark] ${
                        errors.fecha
                          ? 'border-rose-500 focus-visible:ring-rose-500'
                          : 'border-neutral-800 focus-visible:border-amber-400 focus-visible:ring-amber-400'
                      }`}
                    />
                  </div>
                  {errors.fecha && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fecha}</span>
                    </p>
                  )}
                  <span className="text-xs text-neutral-500 mt-1 block">
                    Atención: Lunes a Sábado desde las 8:00 P.M.
                  </span>
                </div>

                {/* Campo: ¿Cuántas personas vienen en tu grupo? */}
                <div>
                  <label
                    htmlFor="personas"
                    className="block text-sm font-bold text-white mb-2"
                  >
                    ¿Cuántas personas vienen? <span className="text-amber-400">*</span>
                  </label>
                  <select
                    id="personas"
                    name="personas"
                    value={formData.personas}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-neutral-950 rounded-xl border border-neutral-800 text-white text-sm focus-visible:outline-none focus-visible:border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-400 transition-colors"
                  >
                    <option value="2 personas (Dúo)">2 personas (Dúo)</option>
                    <option value="3 personas">3 personas</option>
                    <option value="4 personas (Recomendado para mancha)">4 personas (Recomendado para mancha)</option>
                    <option value="5 personas">5 personas</option>
                    <option value="6 personas">6 personas</option>
                    <option value="7 personas">7 personas</option>
                    <option value="8 personas">8 personas</option>
                    <option value="9 personas">9 personas</option>
                    <option value="10 personas (Grupo grande)">10 personas (Grupo grande)</option>
                    <option value="12 personas">12 personas</option>
                    <option value="15 personas (Mancha completa)">15 personas (Mancha completa)</option>
                  </select>
                  <span className="text-xs text-neutral-500 mt-1 block">
                    Gestión de capacidad y comodidad de mesa.
                  </span>
                </div>

              </div>

              {/* Campo: ¿Qué bebida o promoción deseas elegir entre estas? */}
              <div>
                <label
                  htmlFor="promocion"
                  className="block text-sm font-bold text-white mb-2"
                >
                  ¿Qué bebida o promoción deseas elegir entre estas? <span className="text-amber-400">*</span>
                </label>
                <select
                  id="promocion"
                  name="promocion"
                  value={formData.promocion}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 bg-neutral-950 rounded-xl border text-white text-sm focus-visible:outline-none focus-visible:ring-2 transition-colors ${
                    errors.promocion
                      ? 'border-rose-500 focus-visible:ring-rose-500'
                      : 'border-neutral-800 focus-visible:border-amber-400 focus-visible:ring-amber-400'
                  }`}
                >
                  <optgroup label="🔥 Promociones Especiales (Antes de las 10:00 P.M.)">
                    {PROMOTIONS.map((promo) => (
                      <option key={promo.id} value={`${promo.name} - ${promo.promo}`}>
                        {promo.name} ({promo.promo} · {promo.schedule})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="🥃 Carta de Rones Sellados">
                    {DRINKS_MENU.filter(d => d.category === 'Rones').map((d) => (
                      <option key={d.id} value={`Ron: ${d.name}`}>
                        {d.name} (Sellado original)
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="🍹 Jarras Frías">
                    {DRINKS_MENU.filter(d => d.category === 'Jarras Frías').map((d) => (
                      <option key={d.id} value={`Jarra Fría: ${d.name}`}>
                        {d.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="🍸 Whiskys, Vodkas y Licores">
                    <option value="Whisky: Red Label">Whisky: Red Label</option>
                    <option value="Whisky: Black Label">Whisky: Black Label</option>
                    <option value="Whisky: Jack Daniels Old No. 7">Whisky: Jack Daniels Old No. 7</option>
                    <option value="Licor: Jagermeister">Licor: Jagermeister</option>
                    <option value="Vodka: Russkaya">Vodka: Russkaya</option>
                    <option value="Ginebra: Beefeater">Ginebra: Beefeater</option>
                    <option value="Tequila: José Cuervo Gold">Tequila: José Cuervo Gold</option>
                  </optgroup>
                </select>
                {errors.promocion && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.promocion}</span>
                  </p>
                )}
                <span className="text-xs text-neutral-500 mt-1 block">
                  Precios exactos sin sorpresas ni cobros inventados en puerta.
                </span>
              </div>

              {/* Checkbox de Consentimiento Obligatorio */}
              <div className="pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consentimiento"
                    name="consentimiento"
                    checked={formData.consentimiento}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-950 text-amber-500 focus-visible:ring-amber-400 focus-visible:ring-offset-neutral-950 cursor-pointer"
                  />
                  <label htmlFor="consentimiento" className="text-xs text-neutral-300 leading-relaxed cursor-pointer select-none">
                    Acepto que mis datos se utilicen exclusivamente para gestionar la reserva de mesa, generar mi pase digital vía WhatsApp y recibir promociones de Runas VIP, conforme al{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacyModal}
                      className="text-amber-400 underline hover:text-amber-300 font-medium inline"
                    >
                      Aviso de Privacidad
                    </button>.
                  </label>
                </div>
                {errors.consentimiento && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.consentimiento}</span>
                  </p>
                )}
              </div>

              {/* Botón Principal (CTA 1 Exacto) */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-base sm:text-lg font-extrabold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl hover:brightness-110 active:scale-98 transition-all glow-amber shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400"
                >
                  <span>¡¡Reserva tu mesa en 1 minuto!!</span>
                </button>
              </div>

              {/* Botón Secundario Alternativo */}
              <div className="text-center pt-2">
                <span className="text-xs text-neutral-500 block mb-2">¿Prefieres coordinar antes con una persona real?</span>
                <a
                  href="https://wa.me/51972492806?text=Hola%20Runas%20VIP%2C%20quiero%20hacer%20una%20consulta%20con%20recepci%C3%B3n%20antes%20de%20reservar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-amber-400 inline-flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>¡Habla con recepción! (WhatsApp 972492806)</span>
                </a>
              </div>

            </div>
          </form>
        )}

      </div>
    </section>
  );
};
