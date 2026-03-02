import React, { useState } from "react";
import {
  Check,
  MessageCircle,
  Download,
  Instagram,
  ChevronDown,
} from "lucide-react";
import profilePic from "./assets/images/profile-pic.jpg";

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  const curriculum = [
    {
      title: "Analisis anatómico del handstand",
      items: ["Introducción teórica", "Adaptación muscular y fuerza básica"],
    },
    {
      title: "Domina los fundamentos",
      items: [
        "Comprendiendo el equilibrio",
        "Primeros segundos",
        "Posturas y agarres básicos",
      ],
    },
    {
      title: "Elementos avanzados",
      items: [
        "HSPU",
        "Press de tuck",
        "Press to Handstand",
        "90degree push-up",
      ],
    },
  ];

  return (
    <div className="mt-3 w-full flex flex-col items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-zinc-600 hover:text-zinc-500 transition-colors duration-200"
      >
        <span className="text-sm">Temario completo</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`w-full max-w-md mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 bg-zinc-800 rounded-lg p-4 border border-zinc-700">
          {curriculum.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-zinc-200 mb-2">
                {section.title}
              </h4>
              <ul className="space-y-1 ml-4">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-xs text-zinc-400 flex items-start gap-2"
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TrainerLandingPage() {
  const whatsappLink =
    "https://wa.me/5491164558793?text=Hola!%20Quiero%20agendar%20una%20evaluación%20de%20nivel%20sin%20compromiso.";
  const ebookLink = "https://go.hotmart.com/D104710037O";
  const instagramLink = "https://instagram.com/hypeworkout.coach/";

  return (
    <div className="bg-zinc-900 min-h-screen text-zinc-100 font-sans">
      <main className="max-w-md mx-auto px-4 py-6">
        {/* ==================== HERO SECTION ==================== */}
        <header className="flex flex-col items-center pt-6 pb-10">
          {/* Avatar */}
          <div className="mb-6">
            <img
              src={profilePic}
              alt="Entrenador Personal"
              className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover shadow-lg"
            />
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl font-bold tracking-tight text-center mb-4 leading-tight">
            Tú entrenamiento, tu progreso, mi compromiso.
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
              href={ebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-md"
            >
              <Download size={20} />
              Comprar E-Book: Vertical de 0 a 100% + regalo
            </a>

            {/* Acordeón Temario */}
            <Accordion />

            {/* Botón Secundario - E-book */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-zinc-600 bg-transparent hover:bg-zinc-500 text-zinc-200 font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <MessageCircle size={20} />
              Agendar Entrenamiento 1 a 1
            </a>
            {/* Micro-texto */}
            <p className="text-xs text-zinc-500 text-center">
              Evaluación de nivel sin compromiso.
            </p>
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
                "Desde que arrancamos tu rutina, no paramos de ver cambios
                dentro de la cancha, no seríamos lo que somos como deportistas
                si no fuera por vos."
              </p>
              <p className="text-xs text-zinc-500">
                <a
                  href="https://www.instagram.com/farinas_felipe/?hl=es-la"
                  target="_blank"
                >
                  @farinas_felipe
                </a>
                <br />
                <a
                  href="https://www.instagram.com/agus.mandile_/?hl=es-la"
                  target="_blank"
                >
                  @agus.mandile_
                </a>
              </p>
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
            ¿Cómo trabajo y que te voy a ofrecer?
          </h2>

          <ul className="space-y-4">
            {/* Value Item 1 */}
            <li className="flex items-start gap-3">
              <Check
                size={20}
                className="text-emerald-600 flex-shrink-0 mt-1"
              />
              <span className="text-sm text-zinc-200">
                Rutina 100% adaptada a tu nivel y objetivos.
              </span>
            </li>

            {/* Value Item 2 */}
            <li className="flex items-start gap-3">
              <Check
                size={20}
                className="text-emerald-600 flex-shrink-0 mt-1"
              />
              <span className="text-sm text-zinc-200">
                Corrección técnica y biomecánica por video.
              </span>
            </li>

            {/* Value Item 3 */}
            <li className="flex items-start gap-3">
              <Check
                size={20}
                className="text-emerald-600 flex-shrink-0 mt-1"
              />
              <span className="text-sm text-zinc-200">
                Seguimiento y ajustes diarios y semanales.
              </span>
            </li>
          </ul>
        </section>

        {/* ==================== BOTTOM CTAs ==================== */}
        <section className="py-10 border-t border-zinc-800">
          <div className="w-full flex flex-col gap-4">
            {/* Botón Primario */}
            <a
              href={ebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-md"
            >
              <Download size={20} />
              Comprar E-Book: Vertical de 0 a 100% + regalo
            </a>

            {/* Botón Secundario */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-zinc-600 bg-transparent hover:bg-zinc-500 text-zinc-200 font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <MessageCircle size={20} />
              Agendar Entrenamiento 1 a 1
            </a>
            {/* Micro-texto */}
            <p className="text-xs text-zinc-500 text-center">
              Evaluación de nivel sin compromiso.
            </p>
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
              className="text-orange-500 hover:text-orange-400 font-semibold inline-flex items-center gap-1 transition-colors"
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
