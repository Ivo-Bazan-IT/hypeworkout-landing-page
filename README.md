# Landing Page Personal Trainer - Calistenia

Micro-Landing Page estilo "Link in Bio" avanzado, optimizada al 100% para dispositivos móviles y diseñada específicamente para tráfico desde Instagram.

## Características

✨ **Diseño Responsivo**: Optimizado para Instagram Webview en dispositivos móviles.
🚀 **Performance**: Carga instantánea, sin animaciones pesadas ni pop-ups.
🎨 **Tema Oscuro**: Diseño moderno con Tailwind CSS (zinc-900, emerald-600).
📱 **Mobile-First**: Estructura adaptada a pantallas pequeñas (max-w-md).
♿ **Semántico**: HTML semántico con estructuras `<main>, <header>, <section>, <footer>`.
🔗 **Ready to Deploy**: Listo para producción con Vite.

## Stack Tecnológico

- **React 18** - Librería de UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Iconos SVG optimizados
- **Vite** - Build tool ultra-rápido

## Instalación

### Prerrequisitos

- Node.js 16+
- npm o yarn

### Pasos

1. **Instalar dependencias**

```bash
npm install
```

2. **Ejecutar en desarrollo**

```bash
npm run dev
```

Abrirá automáticamente `http://localhost:3000` en tu navegador.

3. **Build para producción**

```bash
npm run build
```

## Estructura del Proyecto

```
src/
├── App.tsx           # Componente principal (Landing Page completa)
├── index.css         # Estilos globales y Tailwind
└── main.tsx          # Entry point de React

index.html           # HTML principal
tailwind.config.js   # Configuración de Tailwind
vite.config.ts       # Configuración de Vite
tsconfig.json        # Configuración de TypeScript
```

## Personalización

### 1. Cambiar el enlace de WhatsApp

En [src/App.tsx](src/App.tsx), busca la línea:

```typescript
const whatsappLink = "https://wa.me/5491234567890?text=...";
```

Reemplaza `5491234567890` con tu número de WhatsApp (formato: código país + número sin espacios).

### 2. Cambiar enlace del E-book

En [src/App.tsx](src/App.tsx):

```typescript
const ebookLink = "https://checkout.example.com/dominadas-perfectas";
```

Reemplaza con tu URL de checkout (Gumroad, Lemonsqueezy, etc.).

### 3. Cambiar usuario de Instagram

En [src/App.tsx](src/App.tsx):

```typescript
const instagramLink = "https://instagram.com/tu_usuario_aqui";
```

### 4. Cambiar avatar

En [src/App.tsx](src/App.tsx), busca el `<img>` y reemplaza:

```jsx
src =
  "https://images.unsplash.com/photo-1535298941957-604a62908637?w=150&h=150&fit=crop";
```

Con tu URL de imagen (recomendado: cuadrada, 150x150 px mínimo).

### 5. Personalizar colores

En `tailwind.config.js`, modifica los colores de tema:

- `bg-zinc-900` → Color de fondo principal
- `bg-emerald-600` → Color primario (botones)
- `border-zinc-800` → Color de bordes

## Secciones de la Landing

1. **Hero Section** - Avatar, título, descripción y CTAs principales
2. **Social Proof** - 3 tarjetas de testimonios
3. **Value Proposition** - 3 puntos de valor con checkmarks
4. **Bottom CTAs** - Repetición de botones para mayor conversión
5. **Footer** - Link a comunidad de Instagram

## Optimización para Instagram

✅ Sin JavaScript pesado que rompa el Webview.
✅ Sin bordes flotantes de hover complejos.
✅ Estilo de carga instantánea (todo el CSS está inline).
✅ Viewport optimizado para móvil.
✅ Links con `target="_blank"` y `rel="noopener noreferrer"`.

## Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Conecta tu repositorio Git
2. Selecciona como comando: `npm run build`
3. Output: `dist`

### Otros

El proyecto genera archivos estáticos en `dist/`. Sube esa carpeta a tu hosting favorito.

## Notas de Desarrollo

- **No usar Framer Motion**: Las animaciones complejas rompen la experiencia en Instagram Webview.
- **Variables HTTPS**: El Webview de Instagram requiere HTTPS. Usa un dominio con SSL.
- **Testing en Webview**: Usa la herramienta de desarrollador de Chrome para simular el navegador de Instagram.

## Licencia

Este proyecto es libre para uso personal y comercial.

## Autor

Desarrollado como solución completa de Landing Page para trainers de Calistenia.

---

¿Preguntas? Revisa el código en [src/App.tsx](src/App.tsx) - es un único archivo bien comentado y organizado.
