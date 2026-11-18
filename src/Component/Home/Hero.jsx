import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 min-h-[85vh] flex items-center">
    {/* Single subtle orb */}
    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
          Enterprise Cloud
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Done Right
          </span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-xl mt-6">
          Managed cloud infrastructure, DevOps automation, and AI solutions for businesses that demand reliability.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <Link to="/contact" className="px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-colors">
            Get Started
          </Link>
          <Link to="/services" className="px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors">
            Our Services
          </Link>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
  </section>
);

export default Hero;
