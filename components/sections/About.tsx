"use client";

import { motion } from 'framer-motion';
import { Headphones, Puzzle, TrendingUp } from 'lucide-react';
import type { ElementType } from 'react';

const points: Array<{
  title: string;
  description: string;
  icon: ElementType;
}> = [
  {
    title: 'Custom solutions',
    description: 'Architectures shaped around your operating model, market demands, and internal systems.',
    icon: Puzzle,
  },
  {
    title: 'Dedicated support',
    description: 'Responsive senior guidance that stays close after launch and through scale.',
    icon: Headphones,
  },
  {
    title: 'Proven results',
    description: 'Clear delivery discipline tied to revenue growth, efficiency gains, and resilience.',
    icon: TrendingUp,
  },
];

export default function About() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">About</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
              Built for complex growth
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              
            </p>
            <p className="mt-4 max-w-2xl text-base text-gray-600">
              
            </p>

            <div className="mt-10 divide-y divide-amber-100 rounded-3xl border border-amber-100 bg-[#fff9ef]">
              {points.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex items-start gap-4 px-6 py-6"
                  >
                    <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-amber-100">
                      <Icon className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">{point.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:pt-14"
          >
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-amber-100">
              <img
                src="https://images.unsplash.com/photo-1758519288417-d359ac3c494d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0aW5nJTIwbWVldGluZ3xlbnwwfDB8fHwxNzc2Mjc5NzA0fDA&ixlib=rb-4.1.0&q=80&w=1200&h=800"
                alt="Professional consulting meeting with a global technology team"
                className="h-[560px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}