import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "scalonet",
    name: "Scalonet",
    shortDescription:
      "Aplicación interactiva para simular ser el director técnico de la selección, tomar decisiones tácticas y gestionar el equipo.",
    fullDescription:
      "Scalonet es una plataforma interactiva que permite a los usuarios ponerse en los zapatos de un Director Técnico de fútbol. Permite tomar decisiones tácticas en tiempo real, gestionar convocatorias, hacer cambios durante los partidos y evaluar los resultados basados en simulación de estrategia.",
    problem:
      "Los fanáticos del fútbol y apasionados de la táctica no contaban con una plataforma ágil, moderna e interactiva para poner a prueba su capacidad de toma de decisiones futbolísticas en formato de simulación directa.",
    solution:
      "Desarrollamos una web app fluida e intuitiva que permite simular la toma de decisiones de un DT, evaluar escenarios y gestionar el planteo del equipo con una experiencia inmersiva.",
    status: "completed",
    thumbnail: "/projects/scalonet/thumb.jpg",
    images: [
      "/projects/scalonet/screen1.jpg",
    ],
    demoUrl: "https://scalonet-app.vercel.app/",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    features: [
      "Simulación de toma de decisiones tácticas",
      "Gestión de planteo y estrategia de juego",
      "Evaluación de escenarios de partido",
      "Interfaz intuitiva y dinámica",
    ],
    category: "Web App",
  },
  {
    slug: "salva",
    name: "Salva",
    shortDescription:
      "Plataforma para rescatar comida a punto de vencer o excedente de comercios a precios reducidos.",
    fullDescription:
      "Salva es una aplicación orientada a la sostenibilidad y reducción del desperdicio de alimentos. Conecta a comercios locales (restaurantes, panaderías, supermercados) con usuarios para ofrecer productos perfectamente consumibles pero próximos a su fecha de vencimiento o excedentes del día a precios promocionales.",
    problem:
      "Grandes cantidades de comida en buen estado terminan siendo descartadas diariamente por comercios al no venderse antes de su fecha de vencimiento o cierre de jornada, generando pérdidas económicas y desperdicio ambiental.",
    solution:
      "Creamos una plataforma que permite a los comercios publicar sus excedentes en tiempo real ya los consumidores adquirir paquetes o productos con descuentos importantes, promoviendo el consumo responsable.",
    status: "in-progress",
    thumbnail: "/projects/salva/thumb.jpg",
    images: [
      "/projects/salva/screen1.jpg",
    ],
    technologies: ["React Native", "Next.js", "TypeScript", "Node.js"],
    features: [
      "Publicación de excedentes de alimentos en tiempo real",
      "Geolocalización de comercios cercanos",
      "Compra directa con descuento",
      "Impacto ecológico y reducción de desperdicio",
    ],
    category: "Mobile & Web App",
  },
  {
    slug: "stockflow",
    name: "StockFlow",
    shortDescription:
      "StockFlow ayuda a empresas y comercios a mantener el control total de su inventario. Con una interfaz moderna y herramientas inteligentes, facilita la gestión de productos, movimientos, alertas de stock y reportes para tomar mejores decisiones.",
    fullDescription:
      "StockFlow ayuda a empresas y comercios a mantener el control total de su inventario. Con una interfaz moderna y herramientas inteligentes, facilita la gestión de productos, movimientos, alertas de stock y reportes para tomar mejores decisiones.",
    problem:
      "Las empresas carecían de una forma centralizada y moderna para llevar el control de stock, perdiendo tiempo en reportes manuales y enfrentando quiebres de inventario.",
    solution:
      "Desarrollamos una plataforma inteligente de gestión de inventario que automatiza el seguimiento de stock, emite alertas preventivas y genera reportes detallados en tiempo real.",
    status: "completed",
    thumbnail: "/projects/stockflow/thumb.png",
    images: [
      "/projects/stockflow/screen1.png",
      "/projects/stockflow/screen2.png",
      "/projects/stockflow/screen3.png",
      "/projects/stockflow/screen4.png",
    ],
    demoUrl: "",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Gestión de productos",
      "Control de movimientos",
      "Alertas de stock",
      "Reportes inteligentes",
    ],
    category: "Web App",
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
