"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { team } from "@/data/team";
import { GitBranch } from "lucide-react";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Quiénes somos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            El equipo detrás de G1
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Somos una software factory argentina especializada en el desarrollo
            de soluciones digitales a medida. Cada proyecto es una oportunidad
            de crear algo extraordinario.
          </p>
        </AnimatedSection>

        {/* About text */}
        <AnimatedSection delay={0.1} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-white">
                Construimos software que importa
              </h3>
              <p className="text-gray-400 leading-relaxed">
                En G1 combinamos experiencia técnica con visión de negocio para
                desarrollar productos digitales que realmente impactan. Desde el
                primer wireframe hasta el deploy en producción, estamos comprometidos
                con la calidad y la excelencia.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Trabajamos con startups, PyMEs y empresas que buscan un socio
                tecnológico de confianza. No somos sólo proveedores, somos parte
                de tu equipo.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Calidad", "Transparencia", "Innovación", "Compromiso"].map(
                  (val) => (
                    <span
                      key={val}
                      className="px-3 py-1 rounded-full border border-white/10 text-sm text-gray-300 bg-white/[0.03]"
                    >
                      {val}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Proyectos entregados", value: "+20" },
                { label: "Clientes activos", value: "+15" },
                { label: "Años en el mercado", value: "4+" },
                { label: "Tecnologías dominadas", value: "+20" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 transition-colors duration-300"
                >
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Team */}
        <AnimatedSection delay={0.2} className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white">Nuestro equipo</h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <AnimatedSection key={member.id} delay={0.1 * i} direction="up">
              <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all duration-300 text-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-2xl mx-auto mb-4 overflow-hidden bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-white/5 flex items-center justify-center relative">
                  <span className="text-2xl font-bold text-blue-400">
                    {getInitials(member.name)}
                  </span>
                </div>

                {/* Info */}
                <h4 className="font-semibold text-white mb-1">{member.name}</h4>
                <p className="text-blue-400 text-xs font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-500 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-200"
                      aria-label={`${member.name} en LinkedIn`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200"
                      aria-label={`${member.name} en GitHub`}
                    >
                      <GitBranch size={15} />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
