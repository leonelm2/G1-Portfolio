"use client";

import { Layout, Building2, ShoppingCart, Check, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const serviceCards = [
  {
    id: "landing-page",
    icon: Layout,
    title: "Landing Page",
    description:
      "Una página moderna diseñada para presentar tu negocio y convertir visitantes en clientes.",
    features: [
      "Diseño moderno y personalizado",
      "Hasta 1 página con varias secciones",
      "Responsive (PC, tablet y celular)",
      "Integración con WhatsApp",
      "Formulario de contacto",
      "Optimización SEO básica",
      "Botones de llamada a la acción",
    ],
  },
  {
    id: "sitio-web-empresarial",
    icon: Building2,
    title: "Sitio Web Empresarial",
    description:
      "Un sitio profesional para empresas que buscan fortalecer su presencia digital.",
    features: [
      "Inicio",
      "Nosotros",
      "Servicios",
      "Portafolio o Galería",
      "Contacto",
      "Responsive",
      "Integración con WhatsApp",
      "SEO básico",
      "Formularios de contacto",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "Ecommerce",
    description:
      "Una tienda online completa para vender productos las 24 horas.",
    features: [
      "Catálogo de productos",
      "Categorías",
      "Carrito de compras",
      "Pasarela de pagos",
      "Gestión de pedidos",
      "Panel de administración",
      "Responsive",
      "Optimización SEO",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Subtle glow background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Soluciones digitales para hacer crecer tu negocio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Desarrollamos software de alto rendimiento adaptado a las necesidades de tu empresa.
          </p>
        </AnimatedSection>

        {/* 3 Large Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {serviceCards.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.id} delay={0.1 * i} direction="up" className="h-full">
                <div className="group relative h-full flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/50 hover:bg-blue-500/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.3)]">
                  {/* Subtle top border gradient glow on hover */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-t-2xl" />

                  <div>
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 group-hover:scale-105 transition-all duration-300">
                      <Icon
                        size={28}
                        className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                      />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Included Features List */}
                    <div className="space-y-3 pt-6 border-t border-white/5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
                        Incluye:
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                            <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check size={12} className="text-blue-400" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-8 pt-6">
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                      Consultar por este plan
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Custom solution callout block */}
        <AnimatedSection delay={0.3} direction="up">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8 sm:p-12 text-center max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/5 pointer-events-none blur-xl" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              ¿No encontrás el servicio que necesitás?
            </h3>
            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              También desarrollamos soluciones personalizadas para cada negocio.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all duration-200 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] text-base"
            >
              Solicitar presupuesto
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

