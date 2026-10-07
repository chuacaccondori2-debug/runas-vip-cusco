export interface ImageAsset {
  id: string;
  title: string;
  url: string;
  source: string;
  description: string;
  alt: string;
  usageLocation: string;
}

export const STOCK_IMAGES: Record<string, ImageAsset> = {
  heroNightclub: {
    id: "heroNightclub",
    title: "Ambiente principal de fiesta y juerga con luces",
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
    source: "Unsplash (Alexander Popov)",
    description: "Multitud de jóvenes disfrutando con las manos arriba bajo luces violetas y doradas en una discoteca moderna.",
    alt: "Jóvenes disfrutando en la pista de baile de Runas VIP en Cusco con luces de discoteca y música en vivo",
    usageLocation: "Hero principal de la landing page (fondo inmersivo y tarjeta destacada)"
  },
  friendsCheers: {
    id: "friendsCheers",
    title: "Grupo de amigos brindando en mesa de discoteca",
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    source: "Unsplash (Teddy Kelley)",
    description: "Grupo de jóvenes amigos riendo y celebrando con vasos en una mesa reservada de discoteca.",
    alt: "Grupo de amigos de 18 a 25 años celebrando y brindando en su mesa reservada sin colas ni jaladores",
    usageLocation: "Sección 'Por qué Runas VIP' / 'Mesa Segura y Previa Pagada'"
  },
  bottleBarService: {
    id: "bottleBarService",
    title: "Servicio de botellas originales y preparación de tragos",
    url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    source: "Unsplash (Kobby Mendez)",
    description: "Botellas de licor y cócteles recién preparados con hielo y rodaja de lima servidos en una barra iluminada.",
    alt: "Botellas selladas de Ron Cabo Blanco y tragos preparados en barra con garantía cero licor adulterado",
    usageLocation: "Sección de Promociones de Rones y Carta de Bebidas"
  },
  djStageVibe: {
    id: "djStageVibe",
    title: "Cabina de DJ y sonido envolvente Reggaetón / Salsa / EDM",
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    source: "Unsplash (Mauricio Mascaro)",
    description: "Iluminación escénica en cabina de DJ con reflectores dorados y ambiente de discoteca para música latina y urbana.",
    alt: "Pista y cabina de DJ en Runas VIP haciendo sonar reggaetón, salsa y cumbia para el público cusqueño",
    usageLocation: "Sección de Ambiente y Propuesta de Valor 'Entra Directo'"
  },
  fastfoodBajon: {
    id: "fastfoodBajon",
    title: "El bajón post-juerga con comida rápida caliente",
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
    source: "Unsplash (Amirali Mirhashemian)",
    description: "Hamburguesa jugosa y papas calientes recién hechas para resolver el bajón a las 4 AM.",
    alt: "Hamburguesa y fast food caliente para el bajón de las 4 AM en locales aliados cerca a Concevidayoc",
    usageLocation: "Tarjeta de Propuesta de Valor 'El Bajón Está Cubierto'"
  },
  cuscoNightStreet: {
    id: "cuscoNightStreet",
    title: "Calles del Centro Histórico de Cusco iluminadas de noche",
    url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    source: "Unsplash (Willian Justen de Vasconcellos)",
    description: "Vista nocturna de las calles coloniales de Cusco iluminadas con faroles tradicionales.",
    alt: "Calle Concevidayoc y Centro Histórico de Cusco de noche cerca de la discoteca Runas VIP",
    usageLocation: "Sección de Ubicación, Mapa y Normas de Puerta en Concevidayoc 171"
  }
};
