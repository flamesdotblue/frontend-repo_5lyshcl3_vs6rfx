import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, MapPin } from 'lucide-react';

const packages = [
  {
    title: 'Signature Andaman Escape',
    subtitle: 'Port Blair • Havelock • Neil',
    price: '₹29,999',
    duration: '5D / 4N',
    rating: '4.9',
    highlights: ['Airport Transfers', '3* Hotels', 'Breakfast', 'Ferry Tickets'],
    accent: 'from-cyan-400/20 to-teal-400/20',
  },
  {
    title: 'Luxury Lagoon Retreat',
    subtitle: 'Private Beach • Candlelight',
    price: '₹54,999',
    duration: '6D / 5N',
    rating: '5.0',
    highlights: ['4* Resort', 'Private Cruise', 'Snorkeling', 'Spa Voucher'],
    accent: 'from-fuchsia-400/20 to-purple-400/20',
  },
  {
    title: 'Adventure Explorer',
    subtitle: 'Scuba • Trek • Kayak',
    price: '₹34,499',
    duration: '6D / 5N',
    rating: '4.8',
    highlights: ['Certified Scuba', 'Sea Walk', 'Kayaking', 'Guide Included'],
    accent: 'from-amber-400/20 to-pink-400/20',
  },
];

const Packages = () => {
  return (
    <section id="packages" className="relative z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured Packages</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Hand‑picked experiences combining comfort, culture, and a touch of thrill.
            </p>
          </div>
          <a href="#contact" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur ring-1 ring-white/15 transition hover:bg-white/20">
            Get a custom quote
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className={`pointer-events-none absolute inset-px rounded-[0.9rem] bg-gradient-to-br ${p.accent}`} />
              <div className="relative">
                <div className="mb-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs font-medium ring-1 ring-white/15">
                    <Star className="h-3.5 w-3.5 text-yellow-300" /> {p.rating}
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs text-white/80">
                    <Clock className="h-3.5 w-3.5" /> {p.duration}
                  </div>
                </div>

                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.subtitle}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <span key={h} className="rounded-lg bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-bold">{p.price}</div>
                    <div className="text-xs text-white/60">per person</div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset,0_10px_30px_-5px_rgba(45,212,191,0.6)] transition-transform group-hover:scale-[1.02]"
                  >
                    <Users className="h-4 w-4" /> Book now
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-opacity group-hover:opacity-70" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
          <MapPin className="h-4 w-4" /> All itineraries are customizable for Andaman & Nicobar Islands
        </div>
      </div>
    </section>
  );
};

export default Packages;
