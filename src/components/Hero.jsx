import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast; doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="pointer-events-none max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <Rocket className="h-4 w-4 text-teal-300" />
            <span className="text-sm/none text-white/90">Elevate your escape • Ultra‑modern tours</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Andaman & Nicobar Adventures
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 max-w-xl text-white/80"
          >
            Curated island escapes with glass‑morphism aesthetics, seamless planning, and immersive experiences. Modern, vibrant, and unforgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#packages"
              className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-teal-400 px-6 py-3 font-medium text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset,0_10px_30px_-5px_rgba(45,212,191,0.6)] transition-transform hover:scale-[1.02] hover:shadow-teal-400/50"
            >
              Explore Packages
            </a>
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-md ring-1 ring-white/20 transition-colors hover:bg-white/20"
            >
              <MapPin className="h-4 w-4" /> Plan My Trip
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
