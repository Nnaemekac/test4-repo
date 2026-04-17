"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Globe, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fffbeb] pt-32 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-[8%] top-24 h-56 w-56 rounded-full bg-amber-200/50 blur-3xl"
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[10%] top-40 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"
          animate={{ opacity: [0.25, 0.5, 0.25], scale: [1.05, 0.95, 1.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl"
          animate={{ opacity: [0.2, 0.45, 0.2], y: [0, -12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-amber-700" />
            <span className="text-sm font-medium text-gray-900">Built for ambitious global teams</span>
          </div>

          <h1 className="text-5xl font-black tracking-tight text-gray-900 md:text-6xl">
            Innovative Tech Solutions
          </h1>
          <div className="mt-6 h-px w-24 bg-gray-900" />
          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Transforming challenges into powerful solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="#contact">
              <Button size="lg" className="min-h-[48px] min-w-[44px]">
                Start Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="#projects"
              className="inline-flex min-h-[48px] min-w-[44px] items-center text-sm font-semibold text-gray-900 transition-colors hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
            >
              View Work
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-amber-200 pt-8">
            <div>
              <p className="text-4xl font-black text-gray-900">18</p>
              <p className="mt-1 text-sm text-gray-600">Markets</p>
            </div>
            <div>
              <p className="text-4xl font-black text-gray-900">30%</p>
              <p className="mt-1 text-sm text-gray-600">Cost</p>
            </div>
            <div>
              <p className="text-4xl font-black text-gray-900">99.9%</p>
              <p className="mt-1 text-sm text-gray-600">Continuity</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-amber-100">
            <img
              src="https://images.unsplash.com/photo-1683701251422-912fe98f2b5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDB8MHx8fDE3NzYyNzk3MDN8MA&ixlib=rb-4.1.0&q=80&w=1200&h=800"
              alt="Modern technology office workspace representing TechBridge consulting"
              className="h-[520px] w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-amber-100 bg-white/95 p-6 shadow-xl backdrop-blur-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Global delivery</p>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">Strategy with execution built in</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Advisory, product delivery, and support aligned around measurable business outcomes.
                </p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-3">
                <Globe className="h-6 w-6 text-amber-700" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
