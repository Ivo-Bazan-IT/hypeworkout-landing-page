import React from "react";
import { Check, MessageCircle, Download, Instagram } from "lucide-react";

export default function TrainerLandingPage() {
  const whatsappLink =
    "https://wa.me/5491234567890?text=Hola!%20Quiero%20agendar%20una%20evaluación%20de%20nivel%20sin%20compromiso.";
  const ebookLink = "https://checkout.example.com/dominadas-perfectas";
  const instagramLink = "https://instagram.com/tu_usuario_aqui";

  return (
    <div className="bg-zinc-900 min-h-screen text-zinc-100 font-sans">
      <main className="max-w-md mx-auto px-4 py-6">
        {/* ==================== HERO SECTION ==================== */}
        <header className="flex flex-col items-center pt-6 pb-10">
          {/* Avatar */}
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1535298941957-604a62908637?w=150&h=150&fit=crop"
              alt="Entrenador Personal"
              className="w-24 h-24 rounded-full border-4 border-emerald-600 object-cover shadow-lg"
            />
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl font-bold tracking-tight text-center mb-4 leading-tight">
            Elevá tu nivel en Calistenia y Street-Lifting
          </h1>

          {/* Subtítulo */}
          <p className="text-center text-zinc-400 mb-8 text-sm leading-relaxed">
            Asesorías personalizadas y programas de fuerza para romper tus
            límites.
          </p>

          {/* Contenedor de Botones */}
          <div className="w-full flex flex-col gap-4">
            {/* Botón Primario - WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-md"
            >
              <MessageCircle size={20} />
              Agendar Entrenamiento 1 a 1
            </a>

            {/* Micro-texto */}
            <p className="text-xs text-zinc-500 text-center">
              Evaluación de nivel sin compromiso.
            </p>

            {/* Botón Secundario - E-book */}
            <a
              href={ebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-zinc-600 bg-transparent hover:bg-zinc-800 text-zinc-200 font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <Download size={20} />
              Comprar E-Book: Dominadas Perfectas
            </a>
          </div>
        </header>

        {/* ==================== SOCIAL PROOF ==================== */}
        <section className="py-10 border-t border-zinc-800">
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">
            Resultados reales
          </h2>

          <div className="space-y-4">
            {/* Testimonial Card 1 */}
            <div className="bg-zinc-800 rounded-lg p-5 border border-zinc-700 shadow-md">
              <p className="text-sm text-zinc-200 mb-3">
                "Logré mi primer Muscle-up en 4 semanas. Nunca pensé que era
                posible."
              </p>
              <p className="text-xs text-zinc-500">@juan_calistenia</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-zinc-800 rounded-lg p-5 border border-zinc-700 shadow-md">
              <p className="text-sm text-zinc-200 mb-3">
                "La corrección biomecánica cambió completamente mi forma de
                entrenar."
              </p>
              <p className="text-xs text-zinc-500">@maria_fitness_arg</p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-zinc-800 rounded-lg p-5 border border-zinc-700 shadow-md">
              <p className="text-sm text-zinc-200 mb-3">
                "Seguimiento semanal que realmente funciona. Siento la
                diferencia."
              </p>
              <p className="text-xs text-zinc-500">@carlos_strength</p>
            </div>
          </div>
        </section>

        {/* ==================== VALUE PROPOSITION ==================== */}
        <section className="py-10 border-t border-zinc-800">
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">
            ¿Cómo trabajamos?
          </h2>

          <ul className="space-y-4">
            {/* Value Item 1 */}
            <li className="flex items-start gap-3">
              <Check
                size={20}
                className="text-emerald-600 flex-shrink-0 mt-1"
              />
              <span className="text-sm text-zinc-200">
                Rutina 100% adaptada a tu biotipo.
              </span>
            </li>

            {/* Value Item 2 */}
            <li className="flex items-start gap-3">
              <Check
                size={20}
                className="text-emerald-600 flex-shrink-0 mt-1"
              />
              <span className="text-sm text-zinc-200">
                Corrección biomecánica por video.
              </span>
            </li>

            {/* Value Item 3 */}
            <li className="flex items-start gap-3">
              <Check
                size={20}
                className="text-emerald-600 flex-shrink-0 mt-1"
              />
              <span className="text-sm text-zinc-200">
                Seguimiento y ajustes semanales.
              </span>
            </li>
          </ul>
        </section>

        {/* ==================== BOTTOM CTAs ==================== */}
        <section className="py-10 border-t border-zinc-800">
          <div className="w-full flex flex-col gap-4">
            {/* Botón Primario */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-md"
            >
              <MessageCircle size={20} />
              Agendar Entrenamiento 1 a 1
            </a>

            {/* Micro-texto */}
            <p className="text-xs text-zinc-500 text-center">
              Evaluación de nivel sin compromiso.
            </p>

            {/* Botón Secundario */}
            <a
              href={ebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-zinc-600 bg-transparent hover:bg-zinc-800 text-zinc-200 font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <Download size={20} />
              Comprar E-Book: Dominadas Perfectas
            </a>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="py-10 border-t border-zinc-800 text-center">
          <p className="text-sm text-zinc-400">
            ¿Todavía no estás listo?{" "}
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              Sumate a la comunidad
              <Instagram size={14} />
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
