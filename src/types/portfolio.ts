export interface Profile {
  name: string;
  title: string;
  bio: string;
  photo: string;
  location: string;
  email: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  image: string;
}

export interface Skill {
  id: string;
  category: string;
  items: string[];
}

export interface Contact {
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
}

export interface PortfolioData {
  profile: Profile;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  contact: Contact;
}
