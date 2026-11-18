import React from 'react';

const InfoBlock = ({ label, title, children, icon, variant = 'default', gradient = 'from-blue-50 to-white', borderColor = 'border-blue-100', quote }) => {
  const variants = {
    default: `bg-gradient-to-br ${gradient} rounded-2xl p-8 shadow-soft border ${borderColor}`,
    highlight: `bg-white rounded-2xl p-8 shadow-soft border-l-4 border-blue-600`,
    glass: `glass-card p-8`,
  };

  return (
    <div className={variants[variant] || variants.default}>
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      {label && <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">{label}</span>}
      {title && <h4 className="text-2xl font-bold text-gray-900 mb-4">{title}</h4>}
      {children}
      {quote && (
        <blockquote className="mt-4 pl-4 border-l-2 border-blue-200 italic text-gray-500">
          {quote}
        </blockquote>
      )}
    </div>
  );
};

export default InfoBlock;
