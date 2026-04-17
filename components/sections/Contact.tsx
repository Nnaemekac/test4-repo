"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Github, Linkedin, Mail, Phone, Send, Twitter } from 'lucide-react';
import Button from '@/components/ui/Button';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialState);
    }, 1400);
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
              Start the next move
            </h2>
            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Tell us where the friction is. We will map the shortest path to clarity, capability, and scale.
            </p>

            <div className="mt-10 space-y-4 rounded-[2rem] bg-[#fff7e6] p-8 ring-1 ring-amber-100">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-amber-100">
                  <Mail className="h-5 w-5 text-amber-700" />
                </div>
                <a href="mailto:hello@techbridge.global" className="text-base font-medium text-gray-900 hover:text-amber-700">
                  hello@techbridge.global
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-amber-100">
                  <Phone className="h-5 w-5 text-amber-700" />
                </div>
                <a href="tel:+12025550188" className="text-base font-medium text-gray-900 hover:text-amber-700">
                  +1 (202) 555-0188
                </a>
              </div>

              <div className="pt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-900">Follow</p>
                <div className="mt-4 flex gap-3">
                  <Link
                    href="https://www.linkedin.com"
                    aria-label="Visit TechBridge on LinkedIn"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white text-gray-900 shadow-sm ring-1 ring-amber-100 transition-all hover:-translate-y-0.5 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://github.com"
                    aria-label="Visit TechBridge on GitHub"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white text-gray-900 shadow-sm ring-1 ring-amber-100 transition-all hover:-translate-y-0.5 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    aria-label="Visit TechBridge on Twitter"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white text-gray-900 shadow-sm ring-1 ring-amber-100 transition-all hover:-translate-y-0.5 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[2rem] bg-[#fff7e6] p-8 shadow-lg ring-1 ring-amber-100"
          >
            {isSubmitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-amber-100">
                  <Check className="h-8 w-8 text-emerald-700" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">Message sent</h3>
                <p className="mt-3 max-w-md text-base text-gray-600">
                  Thanks for reaching out. A TechBridge consultant will respond shortly.
                </p>
                <div className="mt-6">
                  <Button type="button" onClick={() => setIsSubmitted(false)}>
                    Send another
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    placeholder="Tell us about the challenge"
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="min-h-[48px] w-full">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send message
                      <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
