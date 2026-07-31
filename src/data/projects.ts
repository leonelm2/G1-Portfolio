import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "barberia",
    name: "Sistema para Barbería",
    shortDescription:
      "Plataforma de gestión integral para barberías con turnos online, historial de clientes y panel administrativo.",
    fullDescription:
      "Un sistema completo de gestión para barberías modernas. Permite a los clientes reservar turnos online, gestionar su historial de visitas y recibir recordatorios automáticos. Los barberos pueden administrar su agenda, registrar servicios y llevar un seguimiento detallado de cada cliente.",
    problem:
      "Las barberías tradicionales perdían tiempo valioso coordinando turnos por teléfono, sin visibilidad sobre su ocupación ni historial de clientes. Los clientes debían llamar para reservar y muchas veces no podían confirmar disponibilidad.",
    solution:
      "Desarrollamos una plataforma web completa que centraliza toda la operación de la barbería. Los clientes reservan online 24/7, reciben confirmaciones automáticas y recordatorios por WhatsApp. Los administradores tienen un panel claro con métricas del negocio.",
    status: "completed",
    thumbnail: "/projects/barberia/thumb.jpg",
    images: [
      "/projects/barberia/screen1.jpg",
      "/projects/barberia/screen2.jpg",
      "/projects/barberia/screen3.jpg",
    ],
    demoUrl: "https://demo.g1.dev/barberia",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Prisma"],
    features: [
      "Reservas online 24/7",
      "Panel de administración",
      "Historial de clientes",
      "Notificaciones automáticas",
      "Reportes y métricas",
      "Gestión de servicios y precios",
    ],
    category: "Web App",
  },
  {
    slug: "torneos-futbol",
    name: "App de Torneos de Fútbol",
    shortDescription:
      "Aplicación móvil para organizar, gestionar y seguir torneos de fútbol amateur con estadísticas en tiempo real.",
    fullDescription:
      "Una app móvil completa para la gestión de torneos de fútbol amateur. Permite crear torneos, inscribir equipos, cargar resultados y ver tablas de posiciones en tiempo real. Incluye estadísticas de jugadores, tarjetas y goleadores.",
    problem:
      "Los organizadores de torneos amateur manejaban todo en planillas de papel o Excel, lo que generaba errores en tablas de posiciones, dificultades para comunicar resultados y poca participación de los jugadores.",
    solution:
      "Creamos una app móvil intuitiva que digitaliza todo el torneo. Los organizadores cargan resultados fácilmente, la app calcula automáticamente posiciones y estadísticas. Los jugadores pueden seguir el torneo en tiempo real desde sus celulares.",
    status: "in-progress",
    thumbnail: "/projects/torneos/thumb.jpg",
    images: [
      "/projects/torneos/screen1.jpg",
      "/projects/torneos/screen2.jpg",
      "/projects/torneos/screen3.jpg",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
    ],
    features: [
      "Creación de torneos y grupos",
      "Tabla de posiciones automática",
      "Estadísticas de jugadores",
      "Carga de resultados en tiempo real",
      "Notificaciones push",
      "Historial de partidos",
    ],
    category: "Mobile App",
  },
  {
    slug: "sistema-stock",
    name: "Sistema de Stock",
    shortDescription:
      "Sistema empresarial de gestión de inventario con alertas de stock mínimo, movimientos y reportes avanzados.",
    fullDescription:
      "Sistema robusto de gestión de inventario diseñado para empresas con múltiples depósitos y productos. Permite controlar el stock en tiempo real, registrar movimientos de entrada y salida, configurar alertas de stock mínimo y generar reportes detallados.",
    problem:
      "Una empresa distribuidora manejaba su inventario en hojas de cálculo desactualizadas, lo que generaba quiebres de stock, compras duplicadas y pérdidas de productos sin registro.",
    solution:
      "Implementamos un sistema centralizado de gestión de stock con interfaz web y acceso por roles. El sistema rastrea cada movimiento, alerta automáticamente cuando un producto llega al mínimo y genera reportes que facilitan las decisiones de compra.",
    status: "completed",
    thumbnail: "/projects/stock/thumb.jpg",
    images: [
      "/projects/stock/screen1.jpg",
      "/projects/stock/screen2.jpg",
      "/projects/stock/screen3.jpg",
    ],
    technologies: ["React", "Node.js", "MySQL", "Docker", "TypeScript"],
    features: [
      "Control de stock en tiempo real",
      "Múltiples depósitos",
      "Alertas de stock mínimo",
      "Reportes y exportación a Excel",
      "Gestión de usuarios y roles",
      "Historial de movimientos",
    ],
    category: "Sistema Empresarial",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    shortDescription:
      "Tienda online completa con catálogo de productos, carrito, pasarela de pagos y panel de administración.",
    fullDescription:
      "Plataforma de e-commerce moderna y escalable con catálogo dinámico, carrito de compras, integración con pasarelas de pago locales (Mercado Pago) y un panel administrativo intuitivo para gestionar productos, pedidos y clientes.",
    problem:
      "Un comercio local quería expandirse al canal online pero no encontraba una solución que se adaptara a sus necesidades específicas, con medios de pago locales y gestión simplificada de inventario.",
    solution:
      "Desarrollamos una tienda online a medida integrada con Mercado Pago, gestión de stock automática y un panel de administración fácil de usar. El sitio está optimizado para conversión y carga rápida en mobile.",
    status: "completed",
    thumbnail: "/projects/ecommerce/thumb.jpg",
    images: [
      "/projects/ecommerce/screen1.jpg",
      "/projects/ecommerce/screen2.jpg",
      "/projects/ecommerce/screen3.jpg",
    ],
    demoUrl: "https://demo.g1.dev/ecommerce",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "MercadoPago API"],
    features: [
      "Catálogo dinámico con filtros",
      "Carrito y checkout optimizado",
      "Integración Mercado Pago",
      "Panel de administración",
      "Gestión de pedidos",
      "Envíos y tracking",
    ],
    category: "E-commerce",
  },
  {
    slug: "landing-empresarial",
    name: "Landing Page Empresarial",
    shortDescription:
      "Sitio web corporativo de alto impacto con diseño premium, optimización SEO y formulario de contacto.",
    fullDescription:
      "Landing page corporativa de alta conversión para una empresa de servicios B2B. Diseño premium con animaciones fluidas, secciones estratégicas para transmitir confianza y un formulario de contacto integrado con CRM.",
    problem:
      "La empresa no tenía presencia digital profesional. Sus clientes potenciales buscaban sus servicios online y no los encontraban, perdiendo oportunidades de negocio frente a competidores con mejor presencia web.",
    solution:
      "Diseñamos y desarrollamos una landing page de alto impacto con copywriting estratégico, optimización SEO completa y formularios integrados con su CRM. El sitio logró posicionarse en la primera página de Google en 3 meses.",
    status: "completed",
    thumbnail: "/projects/landing/thumb.jpg",
    images: [
      "/projects/landing/screen1.jpg",
      "/projects/landing/screen2.jpg",
      "/projects/landing/screen3.jpg",
    ],
    demoUrl: "https://demo.g1.dev/landing",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Resend"],
    features: [
      "Diseño premium responsive",
      "Optimización SEO completa",
      "Formulario integrado con CRM",
      "Animaciones con Framer Motion",
      "Core Web Vitals optimizados",
      "Open Graph y metadatos",
    ],
    category: "Web Marketing",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
