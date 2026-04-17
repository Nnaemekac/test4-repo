export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  outcome: string;
  image: string;
  imageAlt: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export const projects: ProjectItem[] = [
  {
    title: 'E-commerce Solution for XYZ Corp',
    description: 'Implemented a seamless online shopping experience.',
    stack: ['React', 'Node.js'],
    outcome: 'Increased sales by 25% within 3 months.',
    image:
      'https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDB8MHx8fDE3NzYyNzU3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1200&h=800',
    imageAlt: 'Business team collaborating on an e-commerce transformation project',
  },
  {
    title: 'Cloud Migration for NorthAxis',
    description: 'Modernized legacy infrastructure across regional operations.',
    stack: ['AWS', 'TypeScript'],
    outcome: 'Reduced deployment time by 42% across six markets.',
    image:
      'https://images.unsplash.com/photo-1683701251422-912fe98f2b5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDB8MHx8fDE3NzYyNzk3MDN8MA&ixlib=rb-4.1.0&q=80&w=1200&h=800',
    imageAlt: 'Modern technology office illustrating cloud transformation delivery',
  },
  {
    title: 'Operations Platform for Meridian',
    description: 'Unified fragmented workflows into one intelligent internal system.',
    stack: ['Next.js', 'PostgreSQL'],
    outcome: 'Achieved a 30% reduction in operational costs.',
    image:
      'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kfGVufDB8MHx8fDE3NzYyNzk3MDN8MA&ixlib=rb-4.1.0&q=80&w=1200&h=800',
    imageAlt: 'Abstract technology background representing digital platform architecture',
  },
  {
    title: 'Executive Insights for Helio Group',
    description: 'Delivered decision-ready dashboards for cross-border leadership teams.',
    stack: ['React', 'Data Studio'],
    outcome: 'Improved executive reporting speed by 55% quarter over quarter.',
    image:
      'https://images.unsplash.com/photo-1758519288417-d359ac3c494d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0aW5nJTIwbWVldGluZ3xlbnwwfDB8fHwxNzc2Mjc5NzA0fDA&ixlib=rb-4.1.0&q=80&w=1200&h=800',
    imageAlt: 'Professional consulting meeting focused on strategy and analytics',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote: 'TechBridge significantly improved our operational efficiency.',
    name: 'Elena Marquez',
    role: 'COO, Meridian Logistics',
  },
  {
    quote: 'Their team aligned strategy and execution without losing momentum.',
    name: 'David Chen',
    role: 'VP Digital, NorthAxis',
  },
  {
    quote: 'We gained a clearer roadmap, faster delivery, and stronger internal confidence.',
    name: 'Sofia Rahman',
    role: 'Director of Transformation, Helio Group',
  },
];

export const clientNames: string[] = ['NorthAxis', 'Meridian', 'Helio Group', 'XYZ Corp', 'Asteron', 'BluePeak'];
