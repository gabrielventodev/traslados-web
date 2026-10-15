// Datos del negocio: cambiar acá y se actualiza todo el sitio.
// Publicado en GitHub Pages con dominio propio (archivo public/CNAME).
// Sin dominio propio sería: SITE_ORIGIN = 'https://gabrielventodev.github.io' y BASE = '/traslados-web'.
export const SITE_ORIGIN = 'https://trasladosaeropuerto.com.ar';
export const BASE = '';
export const SITE_URL = SITE_ORIGIN + BASE;

// Ruta interna con el prefijo del sitio: url('/traslados-aeroparque/') -> '/traslados-web/traslados-aeroparque/'.
export const url = (path = '/') => BASE + path;

export const BUSINESS = {
  name: 'Traslados Aeropuerto',
  slogan: 'Responsabilidad, llega a tiempo',
  phoneDisplay: '11 6621 1059',
  phoneE164: '+5491166211059',
  whatsapp: '5491166211059',
  city: 'Buenos Aires',
  region: 'Ciudad Autónoma de Buenos Aires',
  country: 'AR',
};

export const waLink = (text = 'Hola! Quiero consultar por un traslado al aeropuerto.') =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;

// Páginas de servicio y de zona: alimentan el pie, los enlaces "Otros traslados" y llms.txt.
export const SERVICE_PAGES = [
  { path: '/traslados-aeropuerto-ezeiza/', name: 'Traslados a Ezeiza' },
  { path: '/traslados-aeroparque/', name: 'Traslados a Aeroparque' },
  { path: '/traslado-ezeiza-aeroparque/', name: 'Conexión Ezeiza – Aeroparque' },
  { path: '/traslados-silla-de-ruedas/', name: 'Traslados en silla de ruedas' },
];
export const ZONE_PAGES = [
  { path: '/traslados-aeropuerto-zona-norte/', name: 'Zona Norte' },
  { path: '/traslados-aeropuerto-zona-oeste/', name: 'Zona Oeste' },
  { path: '/traslados-aeropuerto-zona-sur/', name: 'Zona Sur' },
];
export const GUIDE_PAGES = [
  { path: '/guia/viajar-en-avion-en-silla-de-ruedas/', name: 'Guía: viajar en avión en silla de ruedas', short: 'Viajar en avión en silla de ruedas' },
];
