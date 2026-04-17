"use client";

import { motion } from 'framer-motion';
import { testimonials, clientNames } from '@/lib/data';

export default function Proof() {
  const featured = testimonials[0];

  return (
    <section className="bg-[#fff7e6] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Proof</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
              Results that travel
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
                <p className="text-5xl font-black text-gray-900">30%</p>
                <p className="mt-2 text-sm text-gray-600">Lower operating costs</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
                <p className="text-5xl font-black text-gray-900">25%</p>
                <p className="mt-2 text-sm text-gray-600">Sales lift in 90 days</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
                <p className="text-5xl font-black text-gray-900">12</p>
                <p className="mt-2 text-sm text-gray-600">Regions launched</p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-900">Clients include</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {clientNames.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-amber-100"
            >
              <p className="text-3xl font-light italic leading-tight text-gray-900 md:text-4xl">
                “{featured.quote}”
              </p>
              <footer className="mt-6">
                <p className="text-base font-semibold text-gray-900">{featured.name}</p>
                <p className="mt-1 text-sm text-gray-600">{featured.role}</p>
              </footer>
            </motion.blockquote>

            <div className="grid gap-4 md:grid-cols-2">
              {testimonials.slice(1).map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100"
                >
                  <p className="text-base text-gray-600">“{item.quote}”</p>
                  <p className="mt-5 text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="mt-1 text-sm text-gray-600">{item.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
