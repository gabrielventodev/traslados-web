// Datos del negocio: cambiar acá y se actualiza todo el sitio.
// IMPORTANTE: reemplazar SITE_URL por el dominio real antes de publicar.
export const SITE_URL = 'https://www.trasladosaeropuerto.com.ar';

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
