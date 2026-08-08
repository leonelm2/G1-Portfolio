import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, MessageSquare, Check } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { formatStatus } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado" };

  return {
    title: `${project.name} | G1.dev`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} | G1.dev`,
      description: project.shortDescription,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const status = formatStatus(project.status);

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-16">
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#0D0D0D] border-b border-white/5">
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back link */}
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Volver al portfolio
          </Link>

          {/* Category + Status */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-medium text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5">
              {project.category}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${status.color}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {status.label}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
            {project.name}
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
            {project.shortDescription}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/8 text-sm text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-all duration-200 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
              >
                <ExternalLink size={16} />
                Ver demo
              </a>
            )}
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            >
              <MessageSquare size={16} />
              Quiero algo similar
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Main Image */}
            <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-blue-900/30 via-[#111] to-[#0A0A0A] border border-white/5 flex items-center justify-center overflow-hidden relative">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600/20 mb-3">
                    {project.name.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                  </div>
                  <p className="text-sm text-gray-700">Imagen principal del proyecto</p>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Sobre el proyecto
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>

            {/* Problem */}
            <div className="p-6 rounded-2xl border border-red-500/10 bg-red-500/[0.03]">
              <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                El problema
              </h2>
              <p className="text-gray-400 leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution */}
            <div className="p-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.03]">
              <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Nuestra solución
              </h2>
              <p className="text-gray-400 leading-relaxed">{project.solution}</p>
            </div>

            {/* Gallery */}
            {project.images && project.images.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Galería</h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.images.map((imgUrl, i) => (
                    <div
                      key={i}
                      className="h-80 sm:h-96 rounded-xl bg-gradient-to-br from-blue-900/20 via-[#111] to-[#0D0D0D] border border-white/5 flex items-center justify-center overflow-hidden relative"
                    >
                      <img
                        src={imgUrl}
                        alt={`Screenshot ${i + 1} de ${project.name}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video */}
            {project.videoUrl && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Video demo
                </h2>
                <div className="aspect-video rounded-2xl border border-white/5 overflow-hidden bg-[#111]">
                  <video
                    src={project.videoUrl}
                    controls
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                CARACTERÍSTICAS PRINCIPALES
              </h3>
              <ul className="space-y-3">
                {project.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-400">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                TECNOLOGÍAS UTILIZADAS
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-blue-500/5 border border-blue-500/10 text-xs text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/[0.04]">
              <h3 className="text-sm font-semibold text-white mb-2">
                ¿Querés algo similar?
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Contanos tu idea y en menos de 24hs te respondemos con una
                propuesta sin costo.
              </p>
              <a
                href="/#contacto"
                className="block text-center w-full py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-all duration-200"
              >
                Contactar
              </a>
            </div>

            {/* More projects */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-sm font-semibold text-white mb-4">
                Más proyectos
              </h3>
              <div className="space-y-2">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group"
                    >
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        {p.name}
                      </span>
                      <ArrowLeft
                        size={12}
                        className="rotate-180 text-gray-600 group-hover:text-blue-400 transition-colors"
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
