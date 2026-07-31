"use client";

import {
  Globe,
  Smartphone,
  Building2,
  Code2,
  Plug,
  Zap,
  ShoppingCart,
  Headphones,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Building2,
  Code2,
  Plug,
  Zap,
  ShoppingCart,
  HeadphonesIcon: Headphones,
};

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Todo lo que necesitás
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Desde el diseño hasta el deploy. Cubrimos todo el ciclo de vida del
            desarrollo de software con estándares de calidad internacional.
          </p>
        </AnimatedSection>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <AnimatedSection key={service.id} delay={0.05 * i} direction="up">
                <div className="group relative h-full p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-500/[0.04] transition-all duration-300 cursor-default overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-all duration-300">
                    <Icon
                      size={20}
                      className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-white mb-2 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
