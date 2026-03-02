# 🗺️ Referencia Rápida del Proyecto

## 📂 Dónde Está Todo

```
landing-page-trainer/
│
├── 📄 START_HERE.md          ← 👈 LEE ESTO PRIMERO
├── 📄 README.md              ← Descripción general
├── 📄 CUSTOMIZE.md           ← Cambios rápidos
├── 📄 ARCHITECTURE.md        ← Estructura técnica
├── 📄 TESTING.md             ← Validación
├── 📄 DEPLOYMENT.md          ← Publicar online
│
├── 🎯 src/App.tsx            ← 🌟 COMPONENTE PRINCIPAL
│                             (97% de tus cambios van aquí)
├── src/main.tsx
├── src/index.css
│
├── 🔧 Configuración
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── postcss.config.js
│   └── .eslintrc.cjs
│
├── 🌐 index.html
├── 📦 package.json
└── .env.example
```

---

## 🎨 Secciones de la Landing

Todas en [src/App.tsx](src/App.tsx):

```
┌─────────────────────────────────┐
│   HERO SECTION (línea ~18-58)   │
│ - Avatar círculo 150px          │
│ - Título grande                 │
│ - Subtítulo                     │
│ - Botón Verde (WhatsApp)        │
│ - Micro-texto                   │
│ - Botón Ghost (E-book)          │
└─────────────────────────────────┘
         ↓ scroll down ↓
┌─────────────────────────────────┐
│ SOCIAL PROOF (línea ~60-90)     │
│ "Resultados reales"             │
│ - 3 tarjetas de testimonios     │
└─────────────────────────────────┘
         ↓ scroll down ↓
┌─────────────────────────────────┐
│ VALUE PROP (línea ~92-120)      │
│ "¿Cómo trabajamos?"             │
│ - Check 1: Rutina adaptada      │
│ - Check 2: Corrección video     │
│ - Check 3: Seguimiento semanal  │
└─────────────────────────────────┘
         ↓ scroll down ↓
┌─────────────────────────────────┐
│ BOTTOM CTAs (línea ~122-150)    │
│ Repite: Botones WhatsApp + E-   │
└─────────────────────────────────┘
         ↓ scroll down ↓
┌─────────────────────────────────┐
│ FOOTER (línea ~152-160)         │
│ Link a Instagram                │
└─────────────────────────────────┘
```

---

## 🔗 Cambios Principales (Línea por Línea)

| Qué cambiar               | Dónde       | Línea aprox |
| ------------------------- | ----------- | ----------- |
| **Número WhatsApp**       | src/App.tsx | 7           |
| **URL E-book**            | src/App.tsx | 8           |
| **Usuario Instagram**     | src/App.tsx | 9           |
| **Avatar imagen**         | src/App.tsx | 27          |
| **Título principal (H1)** | src/App.tsx | 32          |
| **Subtítulo**             | src/App.tsx | 37          |
| **Testimonios (3x)**      | src/App.tsx | 66-85       |
| **Puntos de valor (3x)**  | src/App.tsx | 94-120      |

---

## 🎨 Colores & Estilos

### Colores Tailwind Usados

| Elemento             | Color        | Tailwind               |
| -------------------- | ------------ | ---------------------- |
| Fondo                | Negro        | `bg-zinc-900`          |
| Tarjetas             | Gris         | `bg-zinc-800`          |
| Texto general        | Blanco       | `text-zinc-100`        |
| Texto secundario     | Gris-claro   | `text-zinc-400`        |
| Botón primario       | Verde        | `bg-emerald-600`       |
| Botón primario hover | Verde oscuro | `hover:bg-emerald-700` |
| Check / Íconos       | Verde        | `text-emerald-600`     |
| Bordes               | Gris         | `border-zinc-700/600`  |

**Para cambiar el color principal** (verde → otro):

1. Busca en [src/App.tsx](src/App.tsx): `emerald-600`
2. Reemplaza por: `green-500`, `teal-600`, `blue-600`, etc.
3. Busca también: `emerald-700` y `hover:bg-emerald-700`

---

## 📱 Responsive Design

```
Website abierto en:

DESKTOP (> 768px)
┌─────────────────────────────┐
│         (centrado)          │
│    max-w-md (384px)         │
│   (no usa todo el ancho)    │
└─────────────────────────────┘

MÓVIL (< 384px)
┌──────────────┐
│   w-full     │
│   px-4       │
│ (lado a lado)│
└──────────────┘
```

Todas las secciones centradas con `max-w-md mx-auto`

---

## 🔧 Scripts Disponibles

```sh
npm run dev       # Desarrollar localmente (port 3000)
npm run build     # Build para producción → dist/
npm run preview   # Ver cómo se vería en prod
npm run lint      # Chequear código (si agregaste reglas)
```

---

## 💬 Links & Variable Environment

Tres variables principales en línea 7-9:

```typescript
const whatsappLink = "https://wa.me/549xxxxxxxxxx?text=...";
const ebookLink = "https://checkout.example.com/...";
const instagramLink = "https://instagram.com/tu_usuario";
```

Todos los links de la página usan estas variables.

---

## 🎯 Botón Primario vs Secundario

### Primario (Verde - WhatsApp)

```jsx
<a className="bg-emerald-600 hover:bg-emerald-700"...>
  <MessageCircle size={20} />
  Agendar Entrenamiento 1 a 1
</a>
```

- Fondo sólido verde
- Ícono + texto
- Hover más oscuro
- Full width

### Secundario (Ghost - E-book)

```jsx
<a className="border-2 border-zinc-600 bg-transparent hover:bg-zinc-800"...>
  <Download size={20} />
  Comprar E-Book: Dominadas Perfectas
</a>
```

- Transparente + borde
- Ícono + texto
- Hover cali gris
- Full width

---

## 🚀 Deploy en 3 Pasos

1. **Vercel (recomendado)**

   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Netlify**

   ```
   Conecta Git → Deploy automático
   ```

3. **Tu servidor**
   ```bash
   npm run build
   # Sube carpeta dist/ a hosting
   ```

---

## 📊 Stack Tecnológico

```
Frontend Layer
├── React 18         (UI)
├── TypeScript       (Type safety)
└── Tailwind CSS     (Styling)

Build Layer
├── Vite            (Super fast bundler)
└── PostCSS         (CSS processing)

Quality Layer
└── ESLint          (Code quality)

Icons
└── Lucide React    (SVG icons)
```

---

## 🐛 Debugging Rápido

### "El botón de WhatsApp no funciona"

→ Ve a línea 7, verifica el número (sin espacios)

### "La imagen no carga"

→ Ve a línea 27, verifica URL con HTTPS

### "Los colores se ven mal"

→ Limpia caché (Ctrl+Shift+Delete) o `npm run build`

### "El sitio se ve distinto en producción"

→ Verifica `tailwind.config.js` línea de content

### "Tengo error de tipado"

→ Ejecuta `npm install` primero

---

## ✅ Checklist Antes de Deploy

- [ ] Cambié número WhatsApp (realista)
- [ ] Cambié URL E-book (realista)
- [ ] Cambié usuario Instagram (realista)
- [ ] Avatar válido (HTTPS, 150x150 mín)
- [ ] Textos personalizados
- [ ] `npm run build` sin errores
- [ ] Probé en móvil (responsive)
- [ ] Probé en Instagram Webview
- [ ] Lighthouse score > 90

---

## 📞 Roadmap Futuro (Opcional)

Si necesitas:

- ✅ Componentes reutilizables → Carpeta `components/`
- ✅ Múltiples páginas → Instalar React Router
- ✅ Formularios → Agregar librería (React Hook Form)
- ✅ Backend → Agregar API (Node.js, Python, etc.)
- ✅ Base de datos → MongoDB, Firebase, PostgreSQL

Ver [ARCHITECTURE.md](ARCHITECTURE.md) para detalles

---

## 🎓 Recursos Útiles

- [Tailwind Docs](https://tailwindcss.com) - Clases CSS
- [Lucide Icons](https://lucide.dev) - Búsqueda de iconos
- [React Docs](https://react.dev) - React moderna
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Types
- [Vite Guide](https://vitejs.dev) - Bundler

---

## 🎉 Resumen Simple

1. **Editar**: [src/App.tsx](src/App.tsx) (líneas 7-9, 27, 32, 37, 66-120)
2. **Probar**: `npm run dev`
3. **Compilar**: `npm run build`
4. **Publicar**: `vercel --prod`

**LISTO EN 30 MINUTOS** ✨

---

**Last update:** Feb 27, 2026
