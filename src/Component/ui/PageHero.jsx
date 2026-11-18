import React from 'react';

const PageHero = ({ title, subtitle, size = 'md', children }) => {
  const isLg = size === 'lg';
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 ${isLg ? 'min-h-[90vh]' : 'min-h-[50vh]'} flex items-center`}>
      {/* Decorative orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <h1 className={`font-extrabold text-white leading-[1.1] tracking-tight ${isLg ? 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-blue-200/80 leading-relaxed mt-6 max-w-3xl ${isLg ? 'text-lg lg:text-xl' : 'text-lg'}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default PageHero;
