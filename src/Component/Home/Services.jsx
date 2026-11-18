import React from 'react';
import { Link } from 'react-router-dom';
import { cardData } from '../../Content/content';

const Services = () => (
  <section className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Services</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What we do</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((item, i) => (
          <Link to="/services" key={i} className="group block p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
            <span className="text-2xl block mb-4">{item.icon}</span>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.content}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
