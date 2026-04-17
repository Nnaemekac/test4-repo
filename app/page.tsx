import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Proof from '@/components/sections/Proof';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'TechBridge | Innovative Tech Solutions',
  description: 'Transforming challenges into powerful tech solutions.',
  openGraph: {
    title: 'TechBridge',
    description: 'Transforming challenges into powerful tech solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechBridge',
    description: 'Transforming challenges into powerful tech solutions.',
  },
};

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Home() {
  return (
    <>
      <Navbar
        logo="TechBridge"
        menuItems={menuItems}
        ctaText="Get Started"
        ctaHref="#contact"
        variant="light"
      />
      <main className="bg-[#fffbeb]">
        <Hero />
        <About />
        <Services />
        <Work />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
