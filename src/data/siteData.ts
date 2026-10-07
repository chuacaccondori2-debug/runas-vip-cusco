export interface Promotion {
  id: string;
  name: string;
  promo: string;
  schedule: string;
  shortPhrase: string;
  description: string;
  tag: string;
  price?: string;
  discount?: string;
}

export interface Drink {
  id: number;
  name: string;
  category: 'Rones' | 'Licores' | 'Ginebras' | 'Whiskys' | 'Jarras Frías' | 'Vodkas' | 'Tequilas';
  highlight?: boolean;
}

export const PROMOTIONS: Promotion[] = [
  {
    id: 'dos-cabos-viernes',
    name: "Dos Cabos Pa' Guayar (Viernes)",
    promo: "2 Selladas de Ron Cabo Blanco a S/ 100",
    schedule: "Solo Viernes antes de las 10 P.M.",
    shortPhrase: "Viernes de Cabo, previa barata y sin chamuyo.",
    description: "Llega temprano con tu gente y arranca la previa con Cabo Blanco a precio de barrio. Dos selladas bien heladas, un solo pago y a chupar tranquilo antes de que se llene el local.",
    tag: "Más Pedido",
    price: "S/ 100"
  },
  {
    id: 'dos-cabos-sabado',
    name: "Dos Cabos Pa' Guayar (Sábado)",
    promo: "2 Selladas de Ron Cabo Blanco a S/ 140",
    schedule: "Solo Sábados antes de las 10 P.M.",
    shortPhrase: "Llega temprano, chupa Cabo y no te claves.",
    description: "El sábado se respeta, pero si llegas antes de las 10 ya la hiciste. Dos selladas de Cabo Blanco para tu gente a precio clavado. Sin esperar, sin roche y con mesa segura.",
    tag: "Favorito del Sábado",
    price: "S/ 140"
  },
  {
    id: 'sale-un-jager',
    name: "Sale un Jager",
    promo: "15% de descuento en Jägermeister",
    schedule: "Solo Sábados antes de las 10 P.M.",
    shortPhrase: "Jäger temprano, bolsillo contento.",
    description: "Si eres de los que ya sabe lo que quiere, llegas antes de las 10 y te llevas tu Jäger con descuento. Amargo, helado y directo al pecho. Sin vueltas, sin jaladores.",
    tag: "Premium",
    discount: "15% OFF"
  },
  {
    id: 'medellin-pa-chupar',
    name: "Medellín Pa' Chupar",
    promo: "20% de descuento en Medellín",
    schedule: "Solo Sábados antes de las 10 P.M.",
    shortPhrase: "Medellín temprano, previa de barrio.",
    description: "El sabor colombiano llega a Cusco con descuento. Si llegas antes de las 10, tu Medellín sale más barato y la previa se pone buena desde el arranque.",
    tag: "Especial",
    discount: "20% OFF"
  },
  {
    id: 'flor-pa-chupar',
    name: "Flor Pa' Chupar Temprano",
    promo: "18% de descuento en Flor de Caña 4 Años",
    schedule: "Solo Sábados antes de las 10 P.M.",
    shortPhrase: "Flor de Caña temprano, bolsillo sano.",
    description: "Un ron suave, un precio clavado. Llega antes de las 10, pide tu Flor de Caña y brinda con tu gente sin que duela el bolsillo. Precio claro, sin sorpresas.",
    tag: "Clásico",
    discount: "18% OFF"
  },
  {
    id: 'shot-cuba-libre',
    name: "Shot Cuba Libre Gratis Hasta las 10",
    promo: "Shot gratis de Cuba Libre de cortesía",
    schedule: "Solo hasta las 10 P.M.",
    shortPhrase: "Llega temprano, shot gratis y a guayar.",
    description: "Llegas, muestras tu pase y te ganas un Cuba Libre de cortesía. Bien helado, pa' entrar en calor antes de que empiece el movimiento. Solo hasta las 10, así que no te duermas.",
    tag: "Gratis con tu Pase",
    price: "GRATIS"
  }
];

export const DRINKS_MENU: Drink[] = [
  // Rones
  { id: 1, name: "Cartavio Black Barrel", category: "Rones" },
  { id: 2, name: "Cartavio 5 Años", category: "Rones" },
  { id: 3, name: "Medellín", category: "Rones", highlight: true },
  { id: 4, name: "Havana Club 3 Años", category: "Rones" },
  { id: 5, name: "Appleton", category: "Rones" },
  { id: 6, name: "Flor De Caña 4 Años", category: "Rones", highlight: true },
  { id: 7, name: "Flor De Caña 5 Años", category: "Rones" },
  { id: 8, name: "Ron Cabo Blanco", category: "Rones", highlight: true },
  
  // Licores
  { id: 9, name: "Jagermeister", category: "Licores", highlight: true },
  
  // Ginebras
  { id: 10, name: "Gin Beefeater", category: "Ginebras" },
  { id: 11, name: "Gin Beefeater Pink", category: "Ginebras" },
  
  // Whiskys
  { id: 12, name: "Red Label", category: "Whiskys" },
  { id: 13, name: "Black Label", category: "Whiskys" },
  { id: 14, name: "Jack Daniels Old No. 7", category: "Whiskys" },
  { id: 15, name: "Jack Daniels Apple", category: "Whiskys" },
  { id: 16, name: "Jack Daniels Honey", category: "Whiskys" },
  
  // Jarras Frías
  { id: 17, name: "Jarra Ron Cartavio Black", category: "Jarras Frías" },
  { id: 18, name: "Jarra Vodka Russkaya", category: "Jarras Frías" },
  { id: 19, name: "Jarra Vodka Naranja Russkaya", category: "Jarras Frías" },
  { id: 20, name: "Jarra Vodka Blue Russkaya", category: "Jarras Frías" },
  { id: 21, name: "Jarra Pisco", category: "Jarras Frías" },
  { id: 22, name: "Jarra Flor De Caña 4 Años", category: "Jarras Frías" },
  
  // Vodkas
  { id: 23, name: "Russkaya", category: "Vodkas" },
  { id: 24, name: "Sky", category: "Vodkas" },
  
  // Tequilas
  { id: 25, name: "José Cuervo Gold", category: "Tequilas" },
  { id: 26, name: "José Cuervo Silver", category: "Tequilas" }
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Entra Directo",
    lead: "Cero jaladores y cero chamuyos en la calle.",
    benefit: "Llegas, muestras tu pase digital en puerta y adentro. Sin negociar precios con desconocidos, sin aguantar mentiras y sin perder minutos valiosos de tu noche.",
    badge: "Acceso Prioritario"
  },
  {
    title: "La Previa Ya Está Pagada",
    lead: "Paquete cerrado y cuentas claras para tu gente.",
    benefit: "Tu mancha sabe exactamente cuánto pone cada uno antes de salir de casa. Se divide, se paga y se chupa tranquilo, sin precios sorpresa ni cobros escondidos al final.",
    badge: "Cuentas Claras"
  },
  {
    title: "Mesa Segura",
    lead: "Pase anticipado antes de las 10:00 P.M.",
    benefit: "Mientras otros hacen cola en la calle o se quedan sin sitio en el local lleno, tú confirmas por WhatsApp y tu mesa ya está esperándote lista para arrancar.",
    badge: "Sin Colas"
  },
  {
    title: "El Bajón Está Cubierto",
    lead: "Alianzas de fast food post-juerga.",
    benefit: "Saliendo a las 4 o 5 AM no te quedas regalado en la calle. Runas VIP te da pase directo a locales aliados de comida rápida para cerrar la noche seguro y bien alimentado.",
    badge: "Post-Juerga Seguro"
  },
  {
    title: "Vuelve Gratis el Próximo Finde",
    lead: "Premio directo a tu fidelidad en barra.",
    benefit: "Si consumes en barra, te llevas un pase con código para volver gratis con un acompañante el siguiente fin de semana. Juerguea de nuevo sin volver a pagar entrada.",
    badge: "Premio Exclusivo"
  }
];

export const DOOR_RULES = [
  {
    title: "DNI Físico Obligatorio",
    detail: "Ingreso exclusivo para mayores de edad con documento original en mano. Control estricto y transparente en puerta."
  },
  {
    title: "Cero Jaladores ni Chamuyos",
    detail: "Tu pase digital por WhatsApp fija el precio y tu ingreso. Nadie en la calle te puede cobrar más ni prometer falsedades."
  },
  {
    title: "Tolerancia Cero a la Discriminación y Violencia",
    detail: "Rechazamos cualquier acto de violencia o racismo. Seguridad privada entrenada para garantizar un ambiente seguro y respetuoso."
  },
  {
    title: "Licor 100% Original y Sellado",
    detail: "Botellas selladas con precinto de garantía abierto en tu propia mesa frente a ti. Cero licor adulterado."
  },
  {
    title: "Local Formal con Licencia e ITSE",
    detail: "Contamos con Licencia de Funcionamiento y Certificado ITSE vigente en el Centro Histórico de Cusco, con salidas de emergencia despejadas."
  }
];

export const BUSINESS_INFO = {
  name: "Runas VIP",
  address: "Calle Concevidayoc 171, Centro Histórico de Cusco, Cusco 08002",
  schedule: "Lunes a sábado, de 8:00 PM a 5:00 AM",
  phone: "972492806",
  email: "runasvipcusco@gmail.com",
  ruc: "20123456789",
  tiktok: "https://www.tiktok.com/@runasvipcusco",
  mapsUrl: "https://www.google.com/maps/place/Centro+historico+de+Cusco,+Concevidayoc+171,+Cusco+08002/@-13.5204441,-71.9836004,17z/data=!3m1!4b1!4m6!3m5!1s0x916dd675d2db55d7:0x37d2d748c4ab282a!8m2!3d-13.5204493!4d-71.9810255!16s%2Fg%2F11td8cjy8r?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
  targetAudience: "Público de 15 a 25 años en Cusco (estudiantes y grupos de amigos que buscan juerga segura y sin estafas)"
};
