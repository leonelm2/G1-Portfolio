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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
