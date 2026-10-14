# Traslados Aeropuerto — sitio web

Sitio estático hecho con Astro. Rápido (HTML ~47 KB, imágenes WebP, fuentes propias) y listo para SEO.

## Cómo usarlo
```
npm install
npm run dev      # vista local en http://localhost:4321
npm run build    # genera la carpeta dist/ para subir al hosting
```
Los datos del negocio (teléfono, WhatsApp, dominio) están en `src/data/site.js`.
Antes de publicar: cambiar `SITE_URL` por el dominio real y actualizar `public/robots.txt` y `public/llms.txt`.

## Páginas (una por búsqueda clave)
| URL | Búsquedas objetivo |
|---|---|
| `/` | traslados aeropuerto Ezeiza y Aeroparque, transfer aeropuerto Buenos Aires |
| `/traslados-aeropuerto-ezeiza/` | traslado a Ezeiza, remis a Ezeiza, transfer Ezeiza |
| `/traslados-aeroparque/` | traslado a Aeroparque, conexión Ezeiza Aeroparque |
| `/traslados-silla-de-ruedas/` | traslado silla de ruedas, transporte personas con discapacidad, van con rampa |

## SEO incluido
- Títulos y descripciones únicos, URL canónica, Open Graph y Twitter con imagen 1200x630.
- Datos estructurados: LocalBusiness + TaxiService, Service, FAQPage, BreadcrumbList.
- sitemap-index.xml automático, robots.txt, llms.txt (buscadores con IA), manifest e íconos.
- Core Web Vitals: CSS en línea, imagen principal con prioridad alta, imágenes responsive, sin JavaScript pesado.
- Formulario que arma el pedido y lo envía por WhatsApp (sin servidor).

## Próximos pasos para llegar primero en Google
1. Crear/verificar el Perfil de Empresa en Google (Google Maps). Es lo que más pesa en búsquedas locales.
2. Pedir reseñas reales a cada cliente en ese perfil.
3. Dar de alta el sitio en Google Search Console y enviar el sitemap.
4. Mismo nombre y teléfono en Instagram, Facebook y directorios (y agregarlos a `sameAs` en `src/layouts/Base.astro`).
5. Publicar artículos útiles (ej. "Cuánto se tarda a Ezeiza", "Cómo viajar en avión en silla de ruedas").

## Datos a confirmar
- Teléfono: casi todos los flyers dicen 11 6621 1059, uno dice 11 6521 1059.
- Afirmaciones del texto: seguimiento del vuelo, espera en arribos, reserva con 24 h, zonas que cubren, sillas eléctricas.
