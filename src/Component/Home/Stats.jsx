import React from 'react';
import { SectionWrapper } from '../ui';
import { stats } from '../../Content/content';

const Stats = () => (
  <SectionWrapper bg="bg-pale-blue" className="!py-16">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-soft text-center border border-gray-100">
          <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
          <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Stats;
