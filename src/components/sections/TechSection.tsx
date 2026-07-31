"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { technologies } from "@/data/technologies";

// Tech logos using inline SVG placeholders or text representation
// In production replace with actual SVG imports
const TechBadge = ({
  tech,
  index,
}: {
  tech: (typeof technologies)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.06,
        duration: 0.4,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all duration-300 cursor-default"
    >
      {/* Logo placeholder - colored circle with initials */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs group-hover:border-blue-500/30 transition-all duration-300">
        {getTechAbbr(tech.name)}
      </div>
      <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 text-center font-medium">
        {tech.name}
      </span>
    </motion.div>
  );
};

function getTechAbbr(name: string): string {
  const map: Record<string, string> = {
    React: "Re",
    "Next.js": "Nx",
    TypeScript: "TS",
    "Node.js": "No",
    Java: "Jv",
    "Spring Boot": "SB",
    "React Native": "RN",
    Expo: "Ex",
    PostgreSQL: "PG",
    MySQL: "My",
    Docker: "Dk",
    Git: "Git",
    GitHub: "GH",
  };
  return map[name] ?? name.slice(0, 2);
}

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  database: "Bases de datos",
  devops: "DevOps",
};

export default function TechSection() {
  const categories = [
    "frontend",
    "backend",
    "mobile",
    "database",
    "devops",
  ] as const;

  return (
    <section
      id="tecnologias"
      className="py-24 lg:py-32 bg-[#0D0D0D] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(37,99,235,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Stack tecnológico
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Tecnologías que usamos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Trabajamos con las tecnologías más modernas y battle-tested del
            mercado para garantizar rendimiento, escalabilidad y mantenibilidad.
          </p>
        </AnimatedSection>

        {/* Tech grid */}
        <div className="space-y-12">
          {categories.map((cat) => {
            const techsInCat = technologies.filter((t) => t.category === cat);
            if (!techsInCat.length) return null;
            return (
              <div key={cat}>
                <AnimatedSection direction="left" className="mb-6">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-600 border-b border-white/5 pb-3">
                    {categoryLabels[cat]}
                  </h3>
                </AnimatedSection>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
                  {techsInCat.map((tech, i) => (
                    <TechBadge key={tech.name} tech={tech} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
