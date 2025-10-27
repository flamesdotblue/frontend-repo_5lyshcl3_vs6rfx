import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Waves, Sun, MapPin } from 'lucide-react';

const spots = [
  {
    name: 'Radhanagar Beach',
    island: 'Havelock Island',
    tag: 'Blue Flag Beach',
    color: 'from-cyan-400/20 to-blue-400/20',
  },
  {
    name: 'Neil Island',
    island: 'Shaheed Dweep',
    tag: 'Natural Bridge',
    color: 'from-emerald-400/20 to-teal-400/20',
  },
  {
    name: 'Port Blair',
    island: 'Capital City',
    tag: 'Cellular Jail',
    color: 'from-fuchsia-400/20 to-purple-400/20',
  },
  {
    name: 'Ross Island',
    island: 'Netaji Subhash Chandra Bose Island',
    tag: 'Colonial Ruins',
    color: 'from-amber-400/20 to-pink-400/20',
  },
  {
    name: 'Elephant Beach',
    island: 'Havelock Island',
    tag: 'Snorkeling Hotspot',
    color: 'from-sky-400/20 to-indigo-400/20',
  },
  {
    name: 'Baratang',
    island: 'Middle Andaman',
    tag: 'Limestone Caves',
    color: 'from-lime-400/20 to-emerald-400/20',
  },
];

const Destinations = () => {
  return (
    <section className="relative bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Signature Destinations</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Discover pristine beaches, coral gardens, and sun‑drenched memories.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm backdrop-blur ring-1 ring-white/15">
            <Compass className="h-4 w-4" /> Hand‑curated island picks
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className={`pointer-events-none absolute inset-px rounded-[0.9rem] bg-gradient-to-br ${s.color}`} />
              <div className="relative">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs font-medium ring-1 ring-white/15 text-white/90">
                  <Waves className="h-3.5 w-3.5" /> {s.tag}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{s.name}</h3>
                <div className="mt-1 inline-flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4" /> {s.island}
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-white/10 blur-3xl opacity-70" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-2 text-sm text-white/60">
          <Sun className="h-4 w-4" /> Best season: Oct – May
        </div>
      </div>
    </section>
  );
};

export default Destinations;
