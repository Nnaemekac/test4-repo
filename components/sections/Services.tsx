"use client";

import { motion } from 'framer-motion';
import { Blocks, Code2, GraduationCap, LifeBuoy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const services: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: '01',
    title: 'Consulting',
    description: '',
    icon: Blocks,
  },
  {
    number: '02',
    title: 'Development',
    description: '',
    icon: Code2,
  },
  {
    number: '03',
    title: 'Training',
    description: '',
    icon: GraduationCap,
  },
  {
    number: '04',
    title: 'Support',
    description: '',
    icon: LifeBuoy,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#fff7e6] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Services</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            What we deliver
          </h2>
        </motion.div>

        <div className="mt-14 divide-y divide-amber-200 border-y border-amber-200">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid gap-5 py-8 md:grid-cols-[100px_1fr_auto] md:items-center"
              >
                <div className="text-5xl font-black text-gray-900">{service.number}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{service.description}</p>
                </div>
                <div className="w-fit rounded-2xl bg-white p-4 shadow-sm ring-1 ring-amber-100">
                  <Icon className="h-6 w-6 text-amber-700" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}