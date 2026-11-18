import React from 'react';

const FeatureList = ({ features = [], cols = 2, variant = 'check' }) => {
  const colClass = cols === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2';

  const icon = (i) => {
    if (variant === 'number') return <span className="text-blue-600 font-bold text-sm">{i + 1}</span>;
    if (variant === 'dot') return <span className="w-2 h-2 bg-blue-500 rounded-full" />;
    return (
      <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <div className={`grid ${colClass} gap-3`}>
      {features.map((f, i) => {
        const text = typeof f === 'string' ? f : f.text;
        const detail = typeof f === 'object' ? f.detail : null;
        return (
          <div key={i} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              {icon(i)}
            </div>
            <div>
              <span className="text-gray-700 text-sm font-medium">{text}</span>
              {detail && <p className="text-gray-400 text-xs mt-0.5">{detail}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureList;
