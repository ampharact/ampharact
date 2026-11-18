import React from 'react';
import { Link } from 'react-router-dom';

const CardGrid = ({ items = [], cols = 3, renderCard, gap = 'gap-6 lg:gap-8' }) => {
  const colMap = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-2 lg:grid-cols-3', 4: 'grid-cols-2 lg:grid-cols-4', 6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6' };
  const colClass = colMap[cols] || colMap[3];

  const defaultCard = (item, index) => (
    <article key={index} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-card-hover hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
      {item.icon && (
        <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">{item.icon}</span>
        </div>
      )}
      {item.number && (
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
          <span className="text-blue-600 font-bold text-sm">{item.number}</span>
        </div>
      )}
      {item.title && <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">{item.title}</h4>}
      {item.content && <p className="text-gray-500 text-sm leading-relaxed">{item.content}</p>}
      {item.desc && <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>}
      {item.highlights && (
        <ul className="mt-4 space-y-1.5">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex items-center text-xs text-gray-400">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}
      {item.link && (
        <Link to={item.link} className="inline-flex items-center text-blue-600 text-sm font-semibold mt-5 group-hover:translate-x-1 transition-transform">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      )}
    </article>
  );

  return (
    <div className={`grid grid-cols-1 ${colClass} ${gap}`}>
      {items.map((item, i) => renderCard ? renderCard(item, i) : defaultCard(item, i))}
    </div>
  );
};

export default CardGrid;
