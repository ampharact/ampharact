import React from 'react';

/**
 * Data-driven card grid. Renders any array of items as styled cards.
 * @param {Array} items - Array of card objects
 * @param {number} cols - Grid columns (2 or 3, default 3)
 * @param {Function} renderCard - Optional custom card renderer (item, index) => JSX
 */
const CardGrid = ({ items = [], cols = 3, renderCard }) => {
  const colClass = cols === 2 ? 'md:grid-cols-2' : cols === 4 ? 'grid-cols-2 md:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3';

  const defaultCard = (item, index) => (
    <article
      key={index}
      className="bg-white rounded-2xl p-7 shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
    >
      {item.icon && <div className="text-4xl mb-4">{item.icon}</div>}
      {item.number && (
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <span className="text-blue-600 font-bold">{item.number}</span>
        </div>
      )}
      {item.title && <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>}
      {item.content && <p className="text-gray-600 leading-relaxed">{item.content}</p>}
      {item.desc && <p className="text-gray-600 leading-relaxed">{item.desc}</p>}
    </article>
  );

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-8`}>
      {items.map((item, index) => renderCard ? renderCard(item, index) : defaultCard(item, index))}
    </div>
  );
};

export default CardGrid;
