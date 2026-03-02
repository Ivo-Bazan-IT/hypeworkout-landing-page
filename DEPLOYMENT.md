# Guía de Deployment 🚀

## 1️⃣ Pre-deployment Checklist

Antes de deployar, asegúrate de:

- [ ] Cambiar número de WhatsApp en `src/App.tsx`
- [ ] Cambiar URL del E-book en `src/App.tsx`
- [ ] Cambiar usuario de Instagram en `src/App.tsx`
- [ ] Subir avatar a un CDN con HTTPS
- [ ] Testing local: `npm run dev` y revisar en móvil
- [ ] Build local exitoso: `npm run build` (sin errores)
- [ ] Revisar carpeta `dist/` se generó correctamente

---

## ✅ Verificaciones Finales

```bash
# 1. Instalar dependencias
npm install

# 2. Build de producción
npm run build

# 3. Revisar el build
npm run preview
```

Si todo funciona en preview, está listo para deploy.

---

## 🎯 Opción 1: Vercel (RECOMENDADO)

### Ventajas

✅ Posiblemente la forma más rápida  
✅ Integración automática con Git  
✅ Denso geograficamente  
✅ Free tier generoso  
✅ HTTPS automático (wild)

### Pasos

**A. Via CLI (Más rápido)**

1. Instala Vercel CLI:

```bash
npm install -g vercel
```

2. Desde la carpeta del proyecto:

```bash
vercel --prod
```

3. Responde a las preguntas:

```
? Set up and deploy "~/proyectos/.../Landing-page..."? [Y/n] → Y
? Which scope do you want to deploy to? → Tu cuenta de Vercel
? Link to existing project? [y/N] → N (primer deploy)
? What's your project's name? → landing-page-trainer
? In which directory is your code located? → . (punto)
? Want to override the settings above? [y/N] → N
```

4. ¡Listo! Tu sitio está en `https://landing-page-trainer.vercel.app`

---

**B. Via Web Dashboard**

1. Ir a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Importa este repositorio
4. Vercel detecta automáticamente:
   - Framework: Vite ✅
   - Build command: `npm run build` ✅
   - Output: `dist/` ✅
5. Click en "Deploy"

---

## 🎯 Opción 2: Netlify

### Ventajas

✅ Build logs visuales  
✅ Preview automático en cada PR  
✅ Form handling built-in  
✅ Netlify Functions (serverless)

### Pasos

**A. Via Git (Recomendado)**

1. Push el proyecto a GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU_USUARIO/landing-page-trainer
git push -u origin main
```

2. Ir a [netlify.com](https://netlify.com)
3. Click en "New site from Git"
4. Selecciona GitHub y autoriza
5. Selecciona el repositorio `landing-page-trainer`
6. Netlify auto-detecta la configuración
7. Click "Deploy site"

---

**B. Via Netlify CLI**

```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🎯 Opción 3: Cloudflare Pages

### Ventajas

✅ Ultra-rápido (CDN global)  
✅ HTTPS automático  
✅ Redirecciones personalizadas

### Pasos

1. Ir a [pages.cloudflare.com](https://pages.cloudflare.com)
2. "Create a project" → Connect to Git
3. Selecciona tu repositorio
4. Configuración:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. "Save and deploy"

---

## 🔗 Opción 4: Tu Servidor Propio/Hosting

Si usas cPanel, Plesk, o servidor dedicado:

1. Build:

```bash
npm run build
```

2. Copia la carpeta `dist/` completa a tu hosting

3. Configura el web server (Apache/Nginx):

**Apache (.htaccess)**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx**

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

4. Asegura HTTPS (Let's Encrypt es gratuito)

---

## 🌍 Dominio Personalizado

### En Vercel

1. Project Settings → Domains
2. Agrega tu dominio
3. Actualiza los DNS en tu proveedor de dominios

### En Netlify

1. Site settings → Domain management
2. Add domain
3. Mismo proceso

### En Cloudflare Pages

1. Custom domain
2. Apunta tu dominio a Cloudflare

---

## 🔐 Variables de Entorno (Si las necesitas)

Si en el futuro usas variables de entorno, crea un `.env.local`:

```bash
VITE_WHATSAPP_NUMBER=5491112345678
VITE_EBOOK_URL=https://...
```

En el panel de deployment, agrega "Environment Variables":

**Vercel**:
Settings → Environment Variables → Agrega las variables

**Netlify**:
Site settings → Build & deploy → Environment → Edit variables

---

## 📊 Monitoreo Post-Deploy

### En Vercel

- Dashboard automático
- Analytics de performance
- Speed Insights

### En Netlify

- Netlify Analytics
- Build logs y Deploy Preview
- Form submissions (si usas)

### Google Analytics (Opcional)

Agrega a `index.html` antes del `</head>`:

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

---

## 🐛 Troubleshooting

### Error: "Cannot find module 'lucide-react'"

```bash
npm install
npm run build
```

### Error: "Build failed"

Verifica en el terminal:

```bash
npm run build
```

y copia el error exacto al proveedor de hosting.

### El sitio se ve diferente en producción

1. Limpia caché: Ctrl+Shift+Delete (o Cmd+Shift+Delete en Mac)
2. Espera 5 minutos a que CDN actualice
3. Verifica que `tailwind.config.js` tiene el path correcto

### WhatsApp link no funciona

Revisa que el número esté sin espacios:

- ❌ `+54 9 11 1234-5678`
- ✅ `5491112345678`

---

## 📱 Testing en Instagram Webview

Antes de compartir el link:

1. **Abre tu landing en Instagram**
   - Copia el link
   - Pega en Instagram bio
   - Click desde la app (abre en Webview)

2. **Pruebas funcionales**
   - [ ] Avatar carga correctamente
   - [ ] Botón WhatsApp abre chat
   - [ ] Botón E-book redirige
   - [ ] Enlaces de Instagram funcionan
   - [ ] Scroll suave en móvil
   - [ ] No hay errores en Console

3. **Performance**
   - [ ] Primera carga < 2 segundos
   - [ ] Sin layout shifts
   - [ ] Botones clickeables sin lag

---

## ✨ Resultados Esperados

✅ Landing cargando en `https://tudominio.com` (o tudominio.vercel.app)  
✅ Funciona perfecto en Instagram Webview  
✅ Botones redirigen correctamente  
✅ Diseño responsive en todos los móviles  
✅ HTTPS automático  
✅ CDN global configurado

---

## 🎉 ¡Listo para Monitorear!

El resto es trackerear:

- Cuántas conversiones WhatsApp recibiste
- Cuántas personas compraron el E-book
- Tráfico desde Instagram

---

**Soporte rápido**:

- ¿Error de build? → Chequea `npm run build` localmente
- ¿No carga en móvil? → Abre DevTools y revisa console
- ¿URL rota? → Verifica https:// (no http://)
