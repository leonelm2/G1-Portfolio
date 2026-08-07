"use client";

import { useState } from "react";
import { Mail, Phone, User, Building, MessageSquare, Send, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const WHATSAPP_CONTACTS = [
  { name: "Leo", number: "2645703023" },
  { name: "Pablo", number: "2646237685" },
  { name: "Andrés", number: "2644191633" },
];
const EMAIL = "g1technodev@gmail.com";
const INSTAGRAM = "https://instagram.com/g1softwaresolutions";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section
      id="contacto"
      className="py-24 lg:py-32 bg-[#0D0D0D] relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Hablemos de tu proyecto
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            ¿Tenés una idea? ¿Necesitás mejorar tu software actual? Contanos
            qué necesitás y en menos de 24hs te respondemos.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <AnimatedSection delay={0.1} direction="left">
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Gracias por contactarnos. Te responderemos en menos de 24
                    horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-medium text-gray-400 flex items-center gap-1.5"
                      >
                        <User size={12} />
                        Nombre *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/8 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="company"
                        className="text-xs font-medium text-gray-400 flex items-center gap-1.5"
                      >
                        <Building size={12} />
                        Empresa
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Tu empresa"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/8 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-gray-400 flex items-center gap-1.5"
                    >
                      <Mail size={12} />
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/8 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs font-medium text-gray-400 flex items-center gap-1.5"
                    >
                      <Phone size={12} />
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+54 11 0000-0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/8 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-medium text-gray-400 flex items-center gap-1.5"
                    >
                      <MessageSquare size={12} />
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Contanos sobre tu proyecto o idea..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/8 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] text-sm"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Contact info */}
          <AnimatedSection delay={0.2} direction="right">
            <div className="flex flex-col gap-6 h-full">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  También podés contactarnos por:
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {/* WhatsApp */}
                  {WHATSAPP_CONTACTS.map(({ name, number }) => (
                    <a
                      key={number}
                      href={`https://wa.me/${number}?text=Hola! Me interesa saber más sobre sus servicios.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`whatsapp-link-${number}`}
                      className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">WhatsApp {name}</div>
                        <div className="text-xs text-gray-500">+{number}</div>
                      </div>
                    </a>
                  ))}

                  {/* Email */}
                  <a
                    href={`mailto:${EMAIL}`}
                    id="email-link"
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-500/[0.04] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Email</div>
                      <div className="text-xs text-gray-500">{EMAIL}</div>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="instagram-link"
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-pink-500/30 hover:bg-pink-500/[0.04] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Instagram</div>
                      <div className="text-xs text-gray-500">@g1softwaresolutions</div>
                    </div>
                  </a>


                </div>
              </div>

              {/* Response time */}
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-medium text-white">Disponibles ahora</span>
                </div>
                <p className="text-sm text-gray-500">
                  Respondemos todos los mensajes en menos de 24 horas hábiles.
                  Consultá sin compromiso.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
