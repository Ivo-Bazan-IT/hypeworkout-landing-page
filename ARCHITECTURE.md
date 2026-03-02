# Arquitectura del Proyecto

## 📁 Estructura de Archivos

```
landing-page-trainer/
│
├── src/                          # Código fuente
│   ├── App.tsx                   # 🎯 COMPONENTE PRINCIPAL
│   │                             # Última fuente de verdad para customización
│   ├── main.tsx                  # Entry point de React
│   └── index.css                 # Estilos globales + Tailwind directives
│
├── public/                       # Assets estáticos (opcional)
│
├── Configuración de Build
│   ├── vite.config.ts            # Configuración de Vite (bundler)
│   ├── tailwind.config.js        # Configuración de Tailwind CSS
│   ├── postcss.config.js         # Configuración de PostCSS (para Tailwind)
│   └── index.html                # HTML principal
│
├── Configuración de TypeScript
│   ├── tsconfig.json             # Config principal
│   └── tsconfig.node.json        # Config para Vite
│
├── Configuración de Quality
│   └── .eslintrc.cjs             # Configuración de linting
│
├── Control de Versiones
│   └── .gitignore                # Archivos ignorados por Git
│
├── Documentación
│   ├── README.md                 # 📖 Guía completa del proyecto
│   ├── CUSTOMIZE.md              # 🎨 Guía rápida de personalización
│   ├── ARCHITECTURE.md           # 📐 Este archivo
│   └── .env.example              # Ejemplo de variables de entorno
│
└── Dependencias
    └── package.json              # npm packages y scripts
```

## 🎯 Componente Principal: App.tsx

Es un **único archivo** que contiene toda la landing page. Estructura interna:

```
App.tsx
├── Imports
│   ├── React, lucide-react
│   └── Iconos: Check, MessageCircle, Download, Instagram
│
├── Constantes (Links)
│   ├── whatsappLink
│   ├── ebookLink
│   └── instagramLink
│
└── JSX Component
    └── Wrapper (bg-zinc-900, min-h-screen)
        └── <main> max-w-md mx-auto
            ├── <header> HERO SECTION
            │   ├── Avatar <img>
            │   ├── <h1> Título principal
            │   ├── Descripción <p>
            │   └── Botones (Primario + Secundario)
            │
            ├── <section> SOCIAL PROOF
            │   ├── <h2> "Resultados reales"
            │   └── 3x Tarjetas de testimonios
            │
            ├── <section> VALUE PROPOSITION
            │   ├── <h2> "¿Cómo trabajamos?"
            │   └── <ul> 3x Items con Check
            │
            ├── <section> BOTTOM CTAs
            │   └── Repite Botones del Hero
            │
            └── <footer>
                └── Link a Instagram
```

## 🎨 Sistema de Diseño (Tailwind)

### Colores

| Uso                  | Color Tailwind                      | RGB     | Caso de uso       |
| -------------------- | ----------------------------------- | ------- | ----------------- |
| **Fondo Principal**  | `bg-zinc-900`                       | #18181b | Todo el sitio     |
| **Fondo Secundario** | `bg-zinc-800`                       | #27272a | Tarjetas          |
| **Texto Principal**  | `text-zinc-100`                     | #f4f4f5 | Títulos, párrafos |
| **Texto Secundario** | `text-zinc-400`                     | #a1a1aa | Subtítulos, meta  |
| **Color Primario**   | `bg-emerald-600`                    | #059669 | Botón principal   |
| **Hover Primario**   | `hover:bg-emerald-700`              | #047857 | Estado hover      |
| **Bordes**           | `border-zinc-700` `border-zinc-600` | #3f3f46 | Separadores       |

### Tipografía

```
Font Stack: system-ui, avenir, Helvetica, Arial, sans-serif

H1 (Hero)        text-3xl font-bold tracking-tight
H2 (Secciones)   text-2xl font-bold tracking-tight
H3 (Tarjetas)    text-sm font-semibold
Párrafo Base     text-sm
Meta/Footer      text-xs
```

### Espaciado

```
Hero Section     pt-6 pb-10
Secciones        py-10 border-t border-zinc-800
Botones          py-4 px-6 (amplio para UX móvil)
Gap entre items  gap-4 (botones), gap-3 (listas)
Máximo ancho     max-w-md (384px - ancho de móvil)
Padding global   px-4
```

## ⚡ Performance Optimizations

1. **Sin JavaScript pesado**: Solo HTML + CSS, sin Framer Motion
2. **Lucide React**: Iconos SVG inlined (sin requests adicionales)
3. **CSS purge con Tailwind**: Solo estilos usados se incluyen en build
4. **Vite**: Bundling ultra-rápido, código splitted automáticamente
5. **No animaciones complejas**: El Webview de Instagram rechaza CSS complejos
6. **Imágenes optimizadas**: Avatar desde CDN (external URL)

## 🔍 SEO & Metadata

En `index.html`:

```html
<meta name="description" content="..." />
<meta name="theme-color" content="#18181b" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
```

## 🚀 Scripts en package.json

```bash
npm run dev          # Inicia servidor local (puerto 3000)
npm run build        # Build para producción → dist/
npm run preview      # Vista previa del build local
npm run lint         # Chequea errores de código
```

## 🛠 Stack de Herramientas

| Herramienta    | Rol           | Versión  |
| -------------- | ------------- | -------- |
| **Vite**       | Build tool    | ^5.0.11  |
| **React**      | UI Library    | ^18.2.0  |
| **TypeScript** | Type Safety   | ^5.3.3   |
| **Tailwind**   | CSS Framework | ^3.4.1   |
| **PostCSS**    | CSS Processor | ^8.4.33  |
| **Lucide**     | Icon Library  | ^0.408.0 |
| **ESLint**     | Code Quality  | ^8.56.0  |

## 🔄 Flujo de Desarrollo

1. **Development**: `npm run dev` → Hot Module Replacement activado
2. **Customización**: Editar constantemente [src/App.tsx](../src/App.tsx)
3. **Testeo**: Navegar a `http://localhost:3000`, abrir DevTools móvil
4. **Build**: `npm run build` → genera carpeta `dist/`
5. **Deploy**: Upload de `dist/` a hosting (Vercel, Netlify, etc.)

## 📊 Comparativa: Antes vs Después

### Antes (Sin este proyecto)

- ❌ Múltiples archivos (componentes separados)
- ❌ Setup complejo con Webpack
- ❌ Dudas sobre cómo organizar
- ❌ Tiempo setup: 2-4 horas

### Después (Con este proyecto)

- ✅ Un único archivo fácil de revisar
- ✅ Vite: setup instantáneo
- ✅ Estructura clara y lista para producción
- ✅ Tiempo setup: 5 minutos
- ✅ Deploy: 2 comandos

## 🎓 Aprendizaje

Este proyecto es **ideal para aprender**:

- ✅ React Hooks (useState no necesario aquí, pero extensible)
- ✅ TypeScript en proyecto real
- ✅ Tailwind CSS utilities
- ✅ Vite como bundler moderno
- ✅ Landing Pages best practices

## 🚧 Extensiones Futuras

Si necesitas crecer el proyecto:

```
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── HeroSection.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── Button.tsx
│   ├── pages/                  # Páginas diferentes
│   │   ├── landing.tsx
│   │   └── checkout.tsx
│   ├── hooks/                  # Custom hooks
│   │   └── useAnalytics.ts
│   ├── utils/                  # Funciones utilitarias
│   │   └── wa.ts
│   └── types/                  # TypeScript types
│       └── trainer.ts
```

## 📞 Support

Ver [README.md](../README.md) para instrucciones de instalación.
Ver [CUSTOMIZE.md](../CUSTOMIZE.md) para personalizaciones rápidas.

---

**Arquitectura diseñada para**: Máxima claridad, mínimo overhead, máxima flexibilidad.
