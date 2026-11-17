import React from 'react';

/**
 * Reusable section wrapper with consistent padding, background, and centering.
 * @param {string} bg - Background class (default: 'bg-white')
 * @param {string} className - Additional classes
 * @param {boolean} centered - Whether to center the header text
 * @param {string} label - Small uppercase label above title
 * @param {string} title - Section title (h2)
 * @param {string} subtitle - Optional subtitle text
 */
const SectionWrapper = ({ bg = 'bg-white', className = '', centered = false, label, title, subtitle, children }) => {
  return (
    <section className={`${bg} py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {(label || title || subtitle) && (
          <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
            {label && (
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">{label}</h2>
            )}
            {title && (
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h3>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 mt-3 max-w-3xl">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
