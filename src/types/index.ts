export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  status: "completed" | "in-progress" | "beta";
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  demoUrl?: string;
  technologies: string[];
  features: string[];
  category: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar: string;
  linkedin?: string;
  github?: string;
}

export interface Technology {
  name: string;
  logo: string;
  category: "frontend" | "backend" | "mobile" | "database" | "devops";
}

export interface NavLink {
  label: string;
  href: string;
}
