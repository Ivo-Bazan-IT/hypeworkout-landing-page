# 🆘 Troubleshooting & FAQ

## Problemas Comunes y Soluciones

---

## ❌ Error: "Cannot find module 'lucide-react'"

### Causa

Las dependencias no están instaladas.

### Solución

```bash
npm install
```

Luego:

```bash
npm run dev
```

---

## ❌ Error: "npm: command not found"

### Causa

Node.js no está instalado en tu computadora.

### Solución

1. Descarga Node.js desde [nodejs.org](https://nodejs.org)
2. Instala (selecciona versión LTS)
3. Abre una terminal nueva
4. Verifica: `node --version`
5. Verifica: `npm --version`

---

## ❌ Error en Build: "Tailwind not recognized"

### Causa

Las dependencias no se instalaron correctamente.

### Solución 1

```bash
npm install
npm run build
```

### Solución 2

Elimina node_modules y package-lock.json, reinstala:

```bash
rm -r node_modules package-lock.json
npm install
```

---

## ❌ El sitio se ve diferente en productión

### Causa

Caché del navegador no actualizó, o configuración Tailwind está mal.

### Solución 1: Limpiar Caché

- **Windows/Linux**: Ctrl+Shift+Delete
- **Mac**: Cmd+Shift+Delete
- Selecciona "Cookies and cached images"
- Reload página

### Solución 2: Verificar Tailwind

Abre `tailwind.config.js`, verifica que `content` incluye:

```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

### Solución 3: Rebuild

```bash
npm run build
npm run preview
```

---

## ❌ Botón de WhatsApp no abre nada

### Causa

Número inválido o URL mal formada.

### Solución

En [src/App.tsx](src/App.tsx) línea ~7:

```typescript
// ❌ MAL (con espacios, guiones, caracteres especiales)
const whatsappLink = "https://wa.me/+54 9 11 1234-5678?text=...";

// ✅ BIEN (solo números)
const whatsappLink = "https://wa.me/5491112345678?text=...";
```

**Formato correcto**:

- Código país: `54` (Argentina)
- Número sin `+`, sin espacios, sin guiones
- Ejemplo: `5491112345678`

### Testing

1. Ve a [wa.me/5491112345678](https://wa.me/5491112345678) en el navegador
2. Debe abrir WhatsApp (o mostrar pantalla de escaneo)
3. Si no funciona, el número es inválido

---

## ❌ Avatar/Imagen no carga

### Causa

URL inválida, no es HTTPS, o imagen movida/eliminada.

### Solución

En [src/App.tsx](src/App.tsx) línea ~27:

```typescript
// ❌ MAL (HTTP, no HTTPS)
src = "http://example.com/avatar.jpg";

// ✅ BIEN (HTTPS)
src = "https://example.com/avatar.jpg";
```

**Verificar que:**

1. La URL comienza con `https://` (no `http://`)
2. La URL es válida (copia/pega en navegador, debe cargar imagen)
3. El archivo sigue existiendo en el servidor
4. El tamaño es razonable (< 1MB)

**Opciones de hosting para imágenes:**

- Cloudinary (gratis)
- Imgix
- AWS S3
- Vercel Blobs
- Tu propio servidor HTTPS

---

## ❌ El sitio se ve horrible en móvil

### Causa

DevTools no está en modo móvil, o hay CSS conflictivo.

### Solución 1: Activar Mobile Mode

En Chrome:

- Presiona `F12`
- Presiona `Ctrl+Shift+M`
- Selecciona dispositivo (iPhone 14, Galaxy S21, etc.)

### Solución 2: Limpiar DevTools

Si sigue viéndose mal:

- Cierra DevTools (Presiona F12)
- Limpia caché (Ctrl+Shift+Delete)
- Abre DevTools nuevamente
- Reload (Ctrl+R)

### Solución 3: Revisar CSS

Si tienes estilos personalizados, verifica que no haya conflictos:

```bash
npm run build
```

Mira si hay warnings en la consola.

---

## ❌ "npm ERR! code ERESOLVE"

### Causa

Conflicto de versiones en dependencias.

### Solución

```bash
npm install --legacy-peer-deps
```

O actualiza Node.js a versión LTS más reciente:

```bash
node --version  # Debe ser 18+ idealmente 20+
```

---

## ❌ Port 3000 ya está en uso

### Causa

Otro proceso está usando el puerto 3000.

### Solución 1: Usar otro puerto

```bash
PORT=3001 npm run dev
```

### Solución 2: Matar el proceso

**En Windows (PowerShell):**

```powershell
netstat -ano | findstr :3000
taskkill /PID [PID_number] /F
```

**En Mac/Linux:**

```bash
lsof -i :3000
kill -9 [PID_number]
```

---

## ❌ "Build failed" sin mensaje claro

### Causa

Algún error en el código TypeScript o JSX.

### Solución

1. Lee el mensaje de error completo en la terminal
2. Nota el número de línea
3. Abre [src/App.tsx](src/App.tsx)
4. Ve a esa línea
5. Busca errores de sintaxis:
   - Paréntesis sin cerrar
   - Comillas sin cerrar
   - Propiedades JSX mal escritas

### Debug

```bash
npm run build
# Léelo bien, el error está en la salida
```

---

## ❌ "TypeError: Cannot read property 'href'"

### Causa

El código está intentando acceder a un elemento que no existe.

### Solución

En DevTools Console, verifica:

```javascript
document.querySelector('a[href*="wa.me"]');
// Si devuelve null, el botón no existe
```

Revisa que en [src/App.tsx](src/App.tsx) el botón está bien escrito y no comentado.

---

## ❌ Colors lucen apagados/diferentes

### Causa

Tailwind CSS no se aplicó, o caché del navegador.

### Solución 1: Rebuild

```bash
npm run build
npm run preview
```

### Solución 2: Verificar archivo

En `tailwind.config.js`:

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // ...
};
```

El `content` debe listar dónde buscar las clases.

### Solución 3: Limpiar caché completo

```bash
rm -r node_modules .next dist
npm install
npm run build
```

---

## ❌ "Lucide icon not found"

### Causa

Nombre del ícono mal escrito.

### Solución

Ve a [lucide.dev](https://lucide.dev), busca el ícono:

- `MessageCircle` ✅ (está disponible)
- `WhatsApp` ❌ (no existe, usa `MessageCircle` o `Send`)

En [src/App.tsx](src/App.tsx), actualiza el import:

```typescript
// ❌ MAL
import { WhatsApp } from "lucide-react";

// ✅ BIEN
import { MessageCircle, Send } from "lucide-react";
```

---

## ❌ El sitio funciona localmente pero no en producción

### Causa

URLs relativas mal configuradas.

### Solución

En [src/App.tsx](src/App.tsx), verifica que todos los links:

1. Usan HTTPS (no HTTP)
2. Son URLs absolutas (comienzan con `https://`)
3. Las imágenes también usan HTTPS

```typescript
// ❌ MAL
const link = "/checkout";

// ✅ BIEN
const link = "https://example.com/checkout";
```

---

## ❌ DevTools muestra warnings de Security

### Causa

Algunos navegadores/extensiones avisan sobre sitios.

### Solución

Verifica que todos los links tienen:

```jsx
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"  // ← IMPORTANTE
>
```

El `rel="noopener noreferrer"` previene vulnerabilidades de seguridad.

---

## ❌ Instagram Webview se ve roto

### Causa

Webview de Instagram tiene limitaciones de CSS/JavaScript.

### Solución

1. No uses animaciones complejas (Framer Motion)
2. No uses JavaScript que requiera eventos complejos
3. Usa solo estilos Tailwind básicos
4. Los botones deben ser links (no JavaScript)

Este proyecto ya está optimizado para esto. Si sigue roto:

- Abre desde navegador móvil primero
- Luego desde Instagram app
- DevTools → Network → reporta 404s o CORs errors

---

## ❌ E-book link no funciona

### Causa

URL mal configurada.

### Solución

En [src/App.tsx](src/App.tsx) línea ~8:

```typescript
// Verifica que:
// 1. La URL comienza con https://
// 2. El dominio existe (abre en navegador, debe cargar)
// 3. No hay typos

const ebookLink = "https://checkout.example.com/dominadas-perfectas";
```

**Testing:**

1. Copia la URL
2. Abre en navegador
3. Debe cargar el checkout
4. Si devuelve 404, la URL es incorrecta

---

## ❌ Después de deploy, los cambios no aparecen

### Causa

CDN caché, navegador caché, o deploy no completó.

### Solución 1: Esperar

CDN puede tardar 5-10 minutos en refresco. Espera.

### Solución 2: Limpiar caché navegador

- `Ctrl+Shift+Delete` (ventana nueva)
- O abre sitio en navegador privado/incógnito

### Solución 3: Forzar redeploy

**En Vercel:**

- Dashboard → Tu proyecto → "Redeploy"

**En Netlify:**

- Site Settings → Build & Deploy → Trigger Deploy

---

## ✅ Verificación Rápida

```bash
# Los 3 comandos más importantes:

1. npm install        # Instalar dependencias
2. npm run dev        # Ver localmente
3. npm run build      # Compilar para producción
```

Si estos 3 funcionan sin errores, tu sitio está OK.

---

## 📞 Soporte Avanzado

Si nada de lo anterior funcionó:

1. **Verifica que estás en la carpeta correcta:**

   ```bash
   pwd  # O en Windows: cd
   # Debe mostrar la ruta del proyecto
   ```

2. **Verifica que Node.js está instalado:**

   ```bash
   node --version  # Debe mostrar v18+ o v20+
   npm --version   # Debe mostrar 9+ o 10+
   ```

3. **Copia el error exacto**
   ```bash
   npm run build 2>&1 | tail -50
   # Copia las últimas 50 líneas
   ```

---

## 🎓 Aprende a Debuggear

### Chrome DevTools (F12)

**Console tab:**

```javascript
// Ver el contenido del sitio
document.querySelector("h1").textContent;

// Ver un elemento específico
document.querySelector('a[href*="wa.me"]');

// Ver todos los links
Array.from(document.querySelectorAll("a")).map((a) => a.href);
```

**Network tab:**

- Verifica que no haya errores 404 o 500
- Mira qué archivos se cargan
- Revisa tiempos de carga

**Performance tab:**

- Click en "Record"
- Interactúa con sitio
- Stop
- Ve qué es lento

---

**¡Sigue debuggeando!** La mejor manera de aprender es resolver problemas. 🚀
