

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  results: string;
  image: string;
  link?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'IT' | 'Automotive';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

export interface Package {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface PortfolioData {
  name: string;
  firstName: string;
  title: string;
  tagline: string;
  about: string;
  detailedBio: string;
  personalValues: { title: string; description: string; icon: string; }[];
  services: Service[];
  testimonials: Testimonial[];
  packages: Package[];
  contact: {
    email: string;
    linkedin: string;
    upwork: string;
    // Fix: Added github property to match usage in config.ts and App.tsx
    github: string;
    location: string;
    availability: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: { institution: string; degree: string; period: string; details: string; }[];
}