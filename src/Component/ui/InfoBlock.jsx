import React from 'react';

/**
 * Reusable info block with gradient background.
 * Used for vision/mission cards, process boxes, etc.
 * @param {string} label - Small uppercase label
 * @param {string} title - Block heading
 * @param {string|React.Node} children - Block content
 * @param {string} gradient - Tailwind gradient class
 * @param {string} borderColor - Border color class
 */
const InfoBlock = ({ label, title, children, gradient = 'from-blue-50 to-white', borderColor = 'border-blue-100' }) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 shadow-soft border ${borderColor}`}>
      {label && <h3 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-2">{label}</h3>}
      {title && <h4 className="text-2xl font-bold text-gray-900 mb-4">{title}</h4>}
      {children}
    </div>
  );
};

export default InfoBlock;
