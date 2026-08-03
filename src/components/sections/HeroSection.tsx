"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Blue glow orb top-right */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      {/* Blue glow orb bottom-left */}
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-800/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating tech compositing */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { text: "React", x: "10%", y: "20%", delay: 0 },
          { text: "Next.js", x: "85%", y: "15%", delay: 0.5 },
          { text: "TypeScript", x: "80%", y: "70%", delay: 1 },
          { text: "Node.js", x: "8%", y: "75%", delay: 1.5 },
          { text: "Docker", x: "50%", y: "88%", delay: 0.8 },
          { text: "PostgreSQL", x: "90%", y: "45%", delay: 0.3 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay + 1, duration: 0.6 }}
            style={{ left: item.x, top: item.y }}
            className="absolute text-xs font-mono text-blue-500/30 font-medium tracking-wider hidden lg:block"
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Software Factory · Argentina
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6"
        >
          Transformamos{" "}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              ideas
            </span>
          </span>
          <br />
          en software.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Desarrollamos aplicaciones web, móviles y sistemas a medida. Convertimos
          tu visión en productos digitales de alto impacto.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#proyectos"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all duration-200 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] text-sm"
          >
            Ver proyectos
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-medium hover:border-white/20 hover:bg-white/5 transition-all duration-200 text-sm"
          >
            Contactanos
          </a>
        </motion.div>



        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-gray-600"
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
