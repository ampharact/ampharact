import React from 'react';

/**
 * Reusable hero banner for page tops.
 * @param {string} title - Page heading
 * @param {string} subtitle - Page description
 * @param {string} gradient - Tailwind gradient classes (default: light blue-indigo)
 * @param {boolean} dark - If true, uses dark text on light bg (default). If false, white text.
 */
const PageHero = ({ title, subtitle, gradient = 'bg-gradient-to-br from-blue-50 to-indigo-50', dark = true }) => {
  return (
    <section className={`${gradient} py-20 px-6`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${dark ? 'text-gray-900' : 'text-white'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-lg max-w-4xl leading-relaxed ${dark ? 'text-gray-600' : 'text-blue-100'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
