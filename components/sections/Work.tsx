"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Work() {
  return (
    <section id="projects" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Projects</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            Selected work
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-amber-700" />
                </div>
                <p className="mt-3 text-base text-gray-600">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#fff7e6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-gray-900 px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-300">Outcome</p>
                  <p className="mt-2 text-base text-white">{project.outcome}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
