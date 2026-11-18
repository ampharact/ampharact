import React from 'react';
import { Link } from 'react-router-dom';
import { homeProducts } from '../../Content/content';

const Products = () => (
  <section className="bg-gray-50 py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Products</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What we build</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {homeProducts.map((product, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className={`h-1 bg-gradient-to-r ${product.gradient}`} />
            <div className="p-8">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{product.tag}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-3 mb-3">{product.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{product.description}</p>
              <Link to="/products" className="text-sm text-blue-600 font-semibold hover:text-blue-700">
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
