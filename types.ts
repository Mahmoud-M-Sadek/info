import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  url: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}