import React from 'react';

const SectionWrapper = ({ bg = 'bg-white', className = '', centered = false, narrow = false, label, title, subtitle, id, accent = false, children }) => {
  return (
    <section id={id} className={`${bg} py-24 lg:py-32 ${className}`}>
      {accent && <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 w-full" />}
      <div className={`${narrow ? 'max-w-5xl' : 'max-w-7xl'} mx-auto px-6`}>
        {(label || title || subtitle) && (
          <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
            {label && (
              <span className="inline-block px-4 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 rounded-full uppercase tracking-widest mb-4">
                {label}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg text-gray-500 mt-4 max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
