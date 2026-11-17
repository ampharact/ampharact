import React from 'react';
import { SectionWrapper } from '../ui';
import { recognitions } from '../../Content/content';

const Recognitions = () => (
  <SectionWrapper centered label="Trusted &amp; Verified" title="Industry Recognized" subtitle="Leading the change in tech startups">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {recognitions.map((item, index) => (
        <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-7 shadow-soft border border-blue-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <span className="text-blue-600 text-xl font-bold">&#10003;</span>
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
          <p className="text-gray-600 leading-relaxed">{item.content}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Recognitions;
