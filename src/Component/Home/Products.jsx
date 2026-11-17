import React from 'react';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../ui';
import { homeProducts } from '../../Content/content';

const Products = () => (
  <SectionWrapper centered label="Innovation" title="Our Products">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {homeProducts.map((product, index) => (
        <article key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300">
          <div className={`h-3 bg-gradient-to-r ${product.gradient}`}></div>
          <div className="p-8">
            <span className="inline-block px-3 py-1 text-xs font-bold text-blue-600 bg-blue-50 rounded-full mb-4">{product.tag}</span>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h4>
            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
            <Link to="/products" className="text-blue-600 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
  </SectionWrapper>
);

export default Products;
