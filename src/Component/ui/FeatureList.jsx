import React from 'react';

/**
 * Renders a list of features with checkmark icons.
 * @param {Array<string>} features - Array of feature strings
 * @param {number} cols - Number of grid columns (1 or 2, default 2)
 */
const FeatureList = ({ features = [], cols = 2 }) => {
  const colClass = cols === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2';

  return (
    <div className={`grid ${colClass} gap-4`}>
      {features.map((feature, i) => (
        <div key={i} className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
