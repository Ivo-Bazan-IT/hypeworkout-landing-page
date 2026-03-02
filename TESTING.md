# Guía de Testing & QA 🧪

## 🎬 Testing en Desarrollo Local

### 1. Iniciar Servidor

```bash
npm run dev
```

Se abrirá automáticamente en `http://localhost:3000`

### 2. Activar Mobile Emulation

```
Presiona: F12 (o Cmd+Option+I en Mac)
Presiona: Ctrl+Shift+M (o Cmd+Shift+M en Mac)
```

### 3. Simular Instagram Webview

En la consola del DevTools, ejecuta:

```javascript
// Esto falsifica el User Agent de Instagram
Object.defineProperty(navigator, "userAgent", {
  value:
    "Mozilla/5.0 (Linux; Android 11; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36 Instagram 216.0.0.33.121",
});
location.reload();
```

---

## ✅ Checklist de Funcionalidad

### Hero Section

- [ ] Avatar visible y centrado
- [ ] Texto H1 sin truncamiento
- [ ] Subtítulo legible en móvil
- [ ] Botón primario (verde) con color correcto
- [ ] Botón primario tiene ícono de WhatsApp
- [ ] Micro-texto visible debajo del primario
- [ ] Botón secundario con estilo ghost
- [ ] Botón secundario tiene ícono de download

### Botón WhatsApp

```javascript
// En Console, ejecuta:
document.querySelector('a[href*="wa.me"]').click();
```

- [ ] Abre WhatsApp (o muestra prompt si no está instalado)
- [ ] El mensaje pre-llenado es correcto
- [ ] El número es válido (sin espacios)

### Botón E-book

- [ ] El link dirige a checkout correcto
- [ ] Se abre en pestaña nueva (target="\_blank")
- [ ] El usuario no siente fricción

### Social Proof

- [ ] 3 tarjetas de testimonios visibles
- [ ] Cada tarjeta tiene:
  - [ ] Fondo oscuro (zinc-800)
  - [ ] Padding interno correcto
  - [ ] Borde sutil
  - [ ] Texto de testimonio
  - [ ] Usuario de Instagram simulado

### Value Proposition

- [ ] H2 "¿Cómo trabajamos?" visible
- [ ] 3 items listados (ul)
- [ ] Cada item tiene check verde (✓)
- [ ] Check está alineado a la izquierda
- [ ] Texto descriptivo legible

### Bottom CTAs

- [ ] Se repiten los botones del hero
- [ ] Mismo styling
- [ ] Funcionan igual

### Footer

- [ ] Texto centrado
- [ ] Link a Instagram funciona
- [ ] Usuario de Instagram es el correcto

---

## 📏 Testing de Responsive Design

### Tamaños de Pantalla a Probar

**Móviles**

- [ ] iPhone SE (375px)
- [ ] iPhone 14 (390px)
- [ ] Galaxy S21 (360px)
- [ ] Tablet iPad (768px)

**En Chrome DevTools**:

```
Ctrl+Shift+M → Device Toolbar
Click en el dropdown de dispositivos
Selecciona de la lista
```

### Validación por Tamaño

| Tamaño | Validación                     |
| ------ | ------------------------------ |
| 320px  | No overflow horizontal         |
| 375px  | Botones clickeables (min 48px) |
| 390px  | Todas las secciones centradas  |
| 768px  | max-w-md activo (ancho máximo) |

---

## ⚡ Performance Testing

### Lighthouse Audit

```
F12 → Lighthouse → Generate report
```

**Métricas esperadas**:

- ✅ Performance: > 90
- ✅ Accessibility: > 95
- ✅ Best Practices: > 90
- ✅ SEO: > 95

### Velocidad de Carga

```javascript
// En Console:
performance.timing.loadEventEnd - performance.timing.navigationStart;
// Resultado esperado: < 2000ms (2 segundos)
```

### Verificar CSS Crítico

```javascript
// Ver peso del CSS:
document.querySelector("style").textContent.length / 1024 + "KB";
// Esperado: < 50KB (sin versión minificada)
```

---

## 🎨 Testing Visual

### Colores

```javascript
// Verificar colores en consola:
const bg = window.getComputedStyle(document.body).backgroundColor;
console.log("Background:", bg); // Debe ser RGB(24, 24, 27) = zinc-900
```

**Checklist de Colores**:

- [ ] Fondo principal oscuro (zinc-900)
- [ ] Botón primario verde vibrante (emerald-600)
- [ ] Hover del botón es más oscuro (emerald-700)
- [ ] Texto blanco/luz para contraste
- [ ] Textos secundarios en gris (zinc-400)
- [ ] Bordes sutiles (zinc-700/600)

### Tipografía

- [ ] Títulos en bold y sans-serif
- [ ] Tracking ajustado (tight)
- [ ] Sin fuentes que cargan lentamente
- [ ] Fallback fonts correctos

### Espaciado

```
Medir con DevTools:
Abrir Inspector
Seleccionar elemento
Panel "Box Model" muestra padding/margin
```

- [ ] Botones: py-4 (16px top/bottom)
- [ ] Secciones: py-10 (40px top/bottom)
- [ ] Gaps: gap-4 (16px entre elementos)

---

## 🔗 Testing de Enlaces

### WhatsApp Link

```javascript
// En Console:
const waLink = document.querySelector('a[href*="wa.me"]');
console.log("WhatsApp URL:", waLink.href);
// Verificar que:
// 1. Empieza con https://wa.me/
// 2. Tiene número sin espacios
// 3. Tiene mensaje encodado (con %20)
```

**Validación en Android**:

1. Abre Instagram en el móvil
2. Click en tu landing
3. Click en botón WhatsApp
4. ¿Se abre WhatsApp? ✅
5. ¿El mensaje está pre-llenado? ✅

**Validación en iOS**:
Mismo proceso (WhatsApp debe estar instalado)

### E-book Link

```javascript
const ebookLink = document.querySelector('a[href*="checkout"]');
console.log("Ebook URL:", ebookLink.href);
// Verificar que:
// 1. Es una URL válida
// 2. Usa HTTPS
// 3. target="_blank" abre en pestaña nueva
```

### Instagram Link

```javascript
const igLink = document.querySelector('a[href*="instagram"]');
console.log("Instagram URL:", igLink.href);
```

---

## 🔒 Security & SEO Testing

### Atributos de Seguridad

```javascript
// Verificar atributos rel:
document.querySelectorAll('a[target="_blank"]').forEach((a) => {
  console.log("Link:", a.href);
  console.log("Rel:", a.rel); // Debe ser "noopener noreferrer"
});
```

- [ ] Todos los links externos tienen `target="_blank"`
- [ ] Todos tienen `rel="noopener noreferrer"`
- [ ] No hay vulnerabilidades de phishing

### Metadata SEO

```javascript
// Ver meta tags:
document.head.innerHTML;
```

- [ ] Meta description presente
- [ ] Title tag correcto
- [ ] OG tags para redes sociales
- [ ] Theme color configurado

### Viewport Meta

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- [ ] Presente en `index.html`
- [ ] Permite zoom
- [ ] Sin `user-scalable=no`

---

## 🧠 Accesibilidad (A11y)

### Contrast Ratio

```javascript
// Verificar contraste:
// Hero title (blanco sobre zinc-900): Ratio ~15:1 ✅
// Secondary text (zinc-400 sobre zinc-900): Ratio ~4.5:1 ✅
```

- [ ] Texto blanco sobre fondos oscuros (ratio > 4.5:1)
- [ ] Texto en botones legible
- [ ] Hover states claros

### Navegación por Teclado

```
Presiona TAB repetidamente
```

- [ ] Puedes navegar por todos los botones
- [ ] El focus es visible
- [ ] Orden lógico: Hero → Social → Value → CTA → Footer

### Screen Reader (Opcional)

```
Activar VoiceOver (Mac: Cmd+F5)
```

- [ ] Textos alternativos correctos
- [ ] Encabezados H1, H2, H3 en orden
- [ ] Links tienen texto descriptivo

---

## 📸 Testing de Imágenes

### Avatar

```javascript
const img = document.querySelector("img");
console.log("Src:", img.src);
console.log("Alt:", img.alt);
console.log("Width:", img.width);
console.log("Height:", img.height);
```

- [ ] URL usa HTTPS
- [ ] Imagen carga (sin 404)
- [ ] Aspecto ratio 1:1 (cuadrado)
- [ ] Tamaño mínimo 150px
- [ ] Alt text descriptivo

---

## 🌐 Cross-Browser Testing

### Desktop

- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Mobile

- [ ] Chrome Android
- [ ] Safari iOS
- [ ] Instagram App (Webview)
- [ ] Facebook App (Webview)

### Verificación

```javascript
// Ver información del navegador:
console.log(navigator.userAgent);
```

---

## ⚠️ Error Testing

### Qué NO debe suceder

```javascript
// Abre Console (F12) y verifica:
// No debe haber Errores (rojo)
// Warnings (amarillo) están OK
```

- [ ] Sin errores de JavaScript
- [ ] Sin archivos 404
- [ ] Sin mixed content (HTTPS/HTTP)
- [ ] Sin CORS errors

### Simulación de Network Lento

```
DevTools → Network tab
Click en dropdown donde dice "No throttling"
Selecciona "Slow 3G"
Reload página
```

- [ ] Página sigue siendo usable
- [ ] Botones clickeables rápidamente
- [ ] Texto legible mientras carga
- [ ] Avatar carga eventualmente

---

## 📊 Analytics Testing

Si agregaste Google Analytics:

```javascript
// Verificar que GA está cargado:
console.log(window.gtag); // Debe existir
```

Acciones a trackerear:

- [ ] Click en WhatsApp
- [ ] Click en E-book
- [ ] Click en Instagram
- [ ] Scroll a cada sección

---

## 🎯 Testing en Producción (Post-Deploy)

### 1. Desde Computadora

```
https://tudominio.com
```

- [ ] Carga correcta
- [ ] Todos los links funcionan
- [ ] Lighthouse score > 90

### 2. Desde Mobile

```
Abre en navegador móvil
```

- [ ] Viewport correcto
- [ ] Botones clickeables
- [ ] No tiene horizontal scroll

### 3. Desde Instagram App

```
1. Copia el link
2. Pega en tu bio de Instagram
3. Visitors clickean el link
4. Se abre en Webview de Instagram
```

**Checklist**:

- [ ] Se abre sin errores
- [ ] Botones funcionan
- [ ] Webview no corta contenido
- [ ] No hay problemas de seguridad

---

## 📝 Resultado Final

Si pasaste todos los checklists, estás listo para:
✅ Compartir el link en Instagram Bio  
✅ Monitorear conversiones  
✅ Recibir consultas en WhatsApp  
✅ Vender el E-book  
✅ Crecer el negocio

---

## 🆘 Debugging Rápido

| Problema             | Solución                                 |
| -------------------- | ---------------------------------------- |
| Botones no responden | Esperar a que JS cargue, revisar console |
| Colores mal          | Limpiar caché (Ctrl+Shift+Delete)        |
| Imagen no carga      | Verificar URL HTTPS en src/App.tsx       |
| WhatsApp no funciona | Revisar número sin espacios              |
| Layout roto en móvil | Revisar DevTools responsive mode         |
| Build falla          | Ejecutar `npm install` primero           |

---

**Happy Testing!** 🚀
