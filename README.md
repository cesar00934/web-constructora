# Construcciones Arce

Página web estática para un maestro de obra y contratista independiente. Está preparada para publicarse en Vercel sin base de datos ni servicios de pago.

## Incluye

- Diseño adaptable para celular, tablet y PC.
- Botones de WhatsApp y llamada al número `+51 914 021 131`.
- Formulario que prepara automáticamente una solicitud de cotización en WhatsApp.
- Perfil oficial de TikTok integrado con carga diferida; el enlace al perfil sigue disponible si la inserción no carga.
- Logo, iconos para celular, imagen para redes, SEO local de Huacho, datos estructurados, sitemap y robots.txt.
- Animaciones suaves y menú móvil.

## Publicar en Vercel

### Método 1: desde la web de Vercel

1. Descomprime el ZIP.
2. Sube la carpeta a un repositorio de GitHub.
3. En Vercel elige **Add New > Project** e importa ese repositorio.
4. Framework Preset: **Other**.
5. No agregues comando de Build ni carpeta de Output.
6. Pulsa **Deploy**.

### Método 2: Vercel CLI

```bash
npm i -g vercel
cd roli-arce-construcciones
vercel
```

## Datos que debes completar antes de publicar

1. Reemplaza cada `https://[DOMINIO_FINAL]` en `index.html`, `robots.txt` y `sitemap.xml` por el dominio definitivo, sin corchetes. Ejemplo: `https://construccionesarce.pe`.
2. En `index.html`, pega en `content=""` de la etiqueta `google-site-verification` el código que te entregue Google Search Console.
3. Si cambia la cobertura, ajusta los textos de Huacho y el campo `areaServed` del JSON-LD en `index.html`.

## Personalización rápida

- Nombre y textos: `index.html`.
- Número de WhatsApp: busca `51914021131` en `index.html` y `assets/script.js`.
- Usuario de TikTok: busca `roliarce587` en `index.html`.
- Colores y diseño: `assets/styles.css`.
- Fotos: `assets/images/`.
- Logo e iconos: `assets/images/logo-construcciones-arce.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` y `favicon.ico`.

## Indexar en Google Search Console

1. Publica el proyecto en Vercel y configura el dominio final.
2. Actualiza las URLs con `[DOMINIO_FINAL]` y vuelve a desplegar.
3. Entra a [Google Search Console](https://search.google.com/search-console/), agrega una propiedad de dominio o de prefijo de URL y verifícala.
4. Pega el valor de verificación en `index.html` y publica nuevamente si elegiste la verificación por etiqueta HTML.
5. Envía `https://tu-dominio.pe/sitemap.xml` en la sección **Sitemaps**.
6. Usa **Inspección de URL** para la página principal y solicita la indexación.
7. Comprueba `https://tu-dominio.pe/robots.txt`. Google decide cuándo rastrear: la indexación no es inmediata.

## Nota sobre TikTok

La sección usa la integración oficial de perfil de creador. TikTok muestra una selección de publicaciones recientes si el perfil es público, tiene la edad configurada y permite la inserción. Si TikTok bloquea temporalmente la carga, el botón al perfil seguirá funcionando.

## Créditos de imágenes referenciales

Fotografías de apoyo descargadas de Unsplash y utilizadas bajo su licencia:

- NANDKUMAR PATEL — `P9tkFLPsEH8`
- Connor Gan — `KE6UNROFQto`
- Thomas Kinto — `gcRSCcjmIUQ`

Estas imágenes son referenciales; los trabajos reales se muestran mediante el perfil de TikTok.
