# Guía Rápida de Personalización

## 🚀 Quick Start

1. **Instalar dependencias**

   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**

   ```bash
   npm run dev
   ```

3. **Editar** [src/App.tsx](src/App.tsx) con tus cambios

---

## 📝 Cambios Principales Necesarios

### Paso 1: Números de WhatsApp

```typescript
// Línea ~7 en src/App.tsx
const whatsappLink = "https://wa.me/549XXXXXXXXXX?text=...";
//                            ^^^ Reemplaza con tu número
```

**Formato**: Código país (54 para Argentina) + número sin espacios

- ❌ `+54 9 11 1234-5678`
- ✅ `5491112345678`

### Paso 2: Enlace del E-book

```typescript
// Línea ~8 en src/App.tsx
const ebookLink = "https://checkout.example.com/dominadas-perfectas";
//                     ^^^^^^^^^^^^^^^^^^^^^^^ Reemplaza con tu URL
```

**Opciones populares**:

- Gumroad: `https://gumroad.com/usuario/productos`
- Lemonsqueezy: `https://tudominio.lemonsqueezy.com/buy/...`
- Stripe Checkout: Tu URL de checkout personalizado

### Paso 3: Usuario de Instagram

```typescript
// Línea ~9 en src/App.tsx
const instagramLink = "https://instagram.com/tu_usuario_aqui";
//                                          ^^^^^^^^^^^^^^^ Reemplaza
```

### Paso 4: Imagen del Avatar

```jsx
// Línea ~27 en src/App.tsx
<img
  src="https://images.unsplash.com/photo-1535298941957-604a62908637?w=150&h=150&fit=crop"
  //  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Reemplaza con tu imagen
  alt="Entrenador Personal"
/>
```

**Recomendaciones**:

- Formato: JPG o WebP
- Tamaño: 150x150 px mínimo (cuadrado)
- Hosting: Cloudinary, Imgix, S3, o CDN propio

### Paso 5: Textos del Hero

```jsx
// Línea ~32 en src/App.tsx
<h1 className="text-3xl font-bold tracking-tight text-center mb-4 leading-tight">
  Elevá tu nivel en Calistenia y Street-Lifting
  {/* ^^^ Cambia este texto */}
</h1>

// Línea ~37
<p className="text-center text-zinc-400 mb-8 text-sm leading-relaxed">
  Asesorías personalizadas y programas de fuerza para romper tus límites.
  {/* ^^^ Cambia este texto */}
</p>
```

### Paso 6: Testimonios

```jsx
// Línea ~66 en src/App.tsx
<div className="bg-zinc-800 rounded-lg p-5 border border-zinc-700 shadow-md">
  <p className="text-sm text-zinc-200 mb-3">
    "Logré mi primer Muscle-up en 4 semanas. Nunca pensé que era posible."
    {/* ^^^ Cambia este texto y los otros 2 testimonios debajo */}
  </p>
  <p className="text-xs text-zinc-500">@juan_calistenia</p>
  {/* ^^^ Cambia el usuario de Instagram */}
</div>
```

### Paso 7: Puntos de Valor (Value Proposition)

```jsx
// Línea ~94 en src/App.tsx
<li className="flex items-start gap-3">
  <Check size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
  <span className="text-sm text-zinc-200">
    Rutina 100% adaptada a tu biotipo.
    {/* ^^^ Cambia estos 3 puntos */}
  </span>
</li>
```

---

## 🎨 Cambios de Diseño (Opcionales)

### Cambiar Color Primario (Verde)

Busca en [src/App.tsx](src/App.tsx) todas las apariciones de:

- `bg-emerald-600` → `bg-green-500`, `bg-teal-600`, etc.
- `hover:bg-emerald-700` → `hover:bg-green-600`
- `text-emerald-600` → `text-emerald-500`

**Pro tip**: Usa [Tailwind Color Picker](https://www.tailwindtoolbox.com/tailwind-color-shades) para elegir colores.

### Cambiar Fondo Oscuro

En [src/App.tsx](src/App.tsx):

```jsx
// Línea ~18
<div className="bg-zinc-900 min-h-screen text-zinc-100 font-sans">
//              ^^^^^^^^^^ Cambia a: bg-gray-900, bg-slate-900, etc.
```

### Cambiar Tipografía

En `tailwind.config.js`:

```javascript
extend: {
  fontFamily: {
    sans: ['Poppins', 'system-ui', 'sans-serif'],
    // Añade otras fuentes custom aquí
  },
},
```

---

## ✅ Checklist de Deploy

- [ ] Números de WhatsApp correctos
- [ ] Enlace de E-book funcional
- [ ] Avatar subido a un CDN (HTTPS)
- [ ] Texto personalizado (títulos, testimonios)
- [ ] Usuario de Instagram correcto
- [ ] Testing en móvil (Chrome DevTools)
- [ ] Testing en Instagram Webview (Meta In-App Browser)
- [ ] Build production: `npm run build`
- [ ] Deploy a Vercel/Netlify

---

## 🧪 Testing en Instagram Webview

1. Abre la landing desde tu computadora
2. Presiona `F12` (DevTools)
3. Presiona `Ctrl+Shift+M` (Mobile emulation)
4. Simula Instagram ajustando User Agent:
   - Abre Console
   - Escribe: `Object.defineProperty(navigator, 'userAgent', {value: 'Instagram'})`

---

## 🚢 Deploy Recomendado: Vercel

```bash
npm install -g vercel
vercel --prod
```

1. Selecciona el framework: **Vite**
2. Directorio raíz: **.**
3. Comando build: **npm run build**
4. Output: **dist**

¡Listo! Tu landing estará en producción con HTTPS y CDN global.

---

## 📚 Recursos Útiles

- [Tailwind Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [WhatsApp Click-to-Chat](https://faq.whatsapp.com/en/general/26000030)
- [Instagram Webview Issues](https://developers.facebook.com/docs/instagram-api)

---

**¿Necesitas más ayuda?** Revisa el código fuente en [src/App.tsx](src/App.tsx) - está bien comentado y estructurado.
