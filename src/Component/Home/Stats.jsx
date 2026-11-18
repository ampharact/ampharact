import React from 'react';
import { stats } from '../../Content/content';

const Stats = () => (
  <section className="bg-white py-16 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
