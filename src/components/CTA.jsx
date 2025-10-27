import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold">Ready to design your island story?</h3>
            <p className="mt-2 text-white/70">
              Tell us your dates and preferences. We’ll craft a modern, seamless itinerary tailored just for you.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/80">
              <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</div>
              <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@islandvibes.co</div>
              <div className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> Response within 1 hour</div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm text-white/80">Full name</label>
              <input className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none backdrop-blur-md focus:border-teal-400" placeholder="Aarav Sharma" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm text-white/80">Email</label>
              <input type="email" className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none backdrop-blur-md focus:border-teal-400" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm text-white/80">Travel dates</label>
              <input type="text" className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none backdrop-blur-md focus:border-teal-400" placeholder="DD/MM/YYYY - DD/MM/YYYY" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm text-white/80">Travellers</label>
              <input type="number" className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none backdrop-blur-md focus:border-teal-400" placeholder="2" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-white/80">Notes</label>
              <textarea rows={4} className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none backdrop-blur-md focus:border-teal-400" placeholder="Tell us what you love: scuba, sunsets, luxury, budget..." />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-white/60">No spam. We respect your privacy.</p>
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-teal-400 px-6 py-3 font-medium text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset,0_10px_30px_-5px_rgba(45,212,191,0.6)] transition-transform hover:scale-[1.02]">
                Get itinerary
              </button>
            </div>
          </motion.form>
        </div>

        <div className="mt-12 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Island Vibes Tours • Crafted with love for Andaman & Nicobar
        </div>
      </div>
    </section>
  );
};

export default CTA;
