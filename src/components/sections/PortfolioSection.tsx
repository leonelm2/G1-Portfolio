"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { projects } from "@/data/projects";
import { formatStatus } from "@/lib/utils";

export default function PortfolioSection() {
  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Proyectos que hablan por sí solos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada proyecto es el resultado de un proceso colaborativo, técnico y
            creativo. Mirá lo que construimos juntos.
          </p>
        </AnimatedSection>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const status = formatStatus(project.status);
            return (
              <AnimatedSection key={project.slug} delay={0.07 * i} direction="up">
                <div className="group h-full flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-blue-500/[0.02] transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-blue-900/30 via-[#111] to-[#0A0A0A] overflow-hidden">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-blue-600/20">
                            {project.name.split(" ").map(w => w[0]).join("").slice(0, 3)}
                          </div>
                          <div className="text-xs text-gray-700 mt-2 font-medium">
                            {project.category}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Status + Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${status.color}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {status.label}
                      </span>
                      <span className="text-xs text-gray-600">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-white mb-2 text-lg">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                      {project.shortDescription}
                    </p>



                    {/* CTA */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/btn flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/8 text-sm text-gray-400 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200"
                    >
                      Ver proyecto
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
