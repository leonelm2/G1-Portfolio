"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles, Layers, Zap } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import { formatStatus } from "@/lib/utils";
import { Project } from "@/types";

// Helper hook for cursor relative position tracking
function useMousePosition(ref: React.RefObject<HTMLDivElement | null>) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return { mouseX, mouseY, handleMouseMove, handleMouseLeave };
}

// 3D Card component for standard projects
function StandardProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const { mouseX, mouseY, handleMouseMove, handleMouseLeave } = useMousePosition(cardRef);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Smooth springs for 3D Tilt
  const rotateXSpring = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateYSpring = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 200, damping: 25 });

  // Mouse Spotlight Coordinates (in percent for CSS radial gradient)
  const spotlightX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const spotlightY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  // Parallax subtle shifts for internal elements
  const imgTranslateX = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 150, damping: 20 });
  const imgTranslateY = useSpring(useTransform(mouseY, [0, 1], [-8, 8]), { stiffness: 150, damping: 20 });

  const status = formatStatus(project.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className="perspective-1000 h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isTouch ? 0 : rotateXSpring,
          rotateY: isTouch ? 0 : rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full flex flex-col rounded-3xl border border-white/10 bg-[#0E1017]/80 backdrop-blur-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 overflow-hidden"
      >
        {/* Dynamic Cursor Spotlight Radial Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-3xl"
          style={{
            background: `radial-gradient(600px circle at ${spotlightX.get()} ${spotlightY.get()}, rgba(59, 130, 246, 0.12), transparent 40%)`,
          }}
        />

        {/* Dynamic Subtle Border Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-indigo-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Card Header / Image Container */}
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-b from-[#161B26] to-[#0A0D14]">
          {/* Subtle Ambient Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-10 group-hover:opacity-20 transition-opacity" />

          <motion.div
            style={{
              x: isTouch ? 0 : imgTranslateX,
              y: isTouch ? 0 : imgTranslateY,
            }}
            className="w-full h-full relative flex items-center justify-center p-4"
          >
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-full object-cover object-top rounded-2xl shadow-lg transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl mb-2 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                  {project.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-mono text-blue-400/70 tracking-wider">
                  {project.category}
                </span>
              </div>
            )}
          </motion.div>

          {/* Top Badge Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border border-white/10 ${status.color}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {status.label}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-gray-300 bg-black/60 backdrop-blur-md border border-white/10">
              {project.category}
            </span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1017] via-transparent to-transparent z-10 pointer-events-none" />
        </div>

        {/* Content Body */}
        <div className="flex flex-col flex-1 p-6 relative z-20" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 flex items-center justify-between">
            <span>{project.name}</span>
            <Sparkles size={16} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-gray-300 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-blue-500/[0.05] transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded-lg text-xs font-medium bg-white/[0.02] text-gray-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="pt-2 border-t border-white/5 flex items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="group/btn flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600/10 hover:bg-blue-600 border border-blue-500/20 hover:border-blue-500 text-blue-400 hover:text-white font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-blue-500/25"
            >
              <span>Ver proyecto</span>
              <ArrowRight
                size={15}
                className="group-hover/btn:translate-x-1 transition-transform duration-300"
              />
            </Link>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Demo en vivo"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Featured Project Component (Highlight treatment for the main project)
function FeaturedProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const { mouseX, mouseY, handleMouseMove, handleMouseLeave } = useMousePosition(cardRef);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const rotateXSpring = useSpring(useTransform(mouseY, [0, 1], [4, -4]), { stiffness: 180, damping: 25 });
  const rotateYSpring = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), { stiffness: 180, damping: 25 });

  const spotlightX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const spotlightY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const imgParallaxX = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), { stiffness: 120, damping: 20 });
  const imgParallaxY = useSpring(useTransform(mouseY, [0, 1], [-12, 12]), { stiffness: 120, damping: 20 });

  const status = formatStatus(project.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-1000 mb-12 w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isTouch ? 0 : rotateXSpring,
          rotateY: isTouch ? 0 : rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        className="group relative rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#0F1424] via-[#0B0E17] to-[#07090F] p-6 lg:p-10 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden"
      >
        {/* Dynamic Cursor Spotlight Radial Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-3xl"
          style={{
            background: `radial-gradient(800px circle at ${spotlightX.get()} ${spotlightY.get()}, rgba(59, 130, 246, 0.15), transparent 50%)`,
          }}
        />

        {/* Ambient Glow Orbs in background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-20">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-between" style={{ transform: "translateZ(35px)" }}>
            <div>
              {/* Header Badges */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  <Zap size={13} className="text-blue-400 fill-blue-400/30" />
                  PROYECTO DESTACADO
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-white/10 ${status.color}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {status.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                {project.shortDescription}
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2 mb-8">
                {project.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Badges & CTAs */}
            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-blue-500/5 text-blue-300 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group/btn inline-flex items-center gap-3 py-3.5 px-7 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02]"
                >
                  <span>Explorar caso de estudio</span>
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1.5 transition-transform duration-300"
                  />
                </Link>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3.5 px-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 text-white font-medium text-sm transition-all duration-300"
                  >
                    <span>Ver demo</span>
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual / Mockup */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <motion.div
              style={{
                x: isTouch ? 0 : imgParallaxX,
                y: isTouch ? 0 : imgParallaxY,
                transform: "translateZ(50px)",
              }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-900/20 via-black to-slate-950 shadow-2xl group-hover:border-blue-500/30 transition-all duration-500"
            >
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-3xl mb-4 shadow-xl shadow-blue-500/10">
                    {project.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm font-mono text-gray-400 tracking-wider">
                    {project.category}
                  </span>
                </div>
              )}
              {/* Glass Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17] via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-[#06080D] relative overflow-hidden">
      {/* Background Decor Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Layers size={14} />
            <span>PORTFOLIO & CASOS DE ÉXITO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Soluciones digitales de <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">alto impacto</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            Combinamos excelencia técnica, arquitectura moderna y diseño vanguardista para transformar ideas en experiencias digitales extraordinarias.
          </motion.p>
        </div>

        {/* Featured Main Project */}
        {featuredProject && <FeaturedProjectCard project={featuredProject} />}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, idx) => (
            <StandardProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}


