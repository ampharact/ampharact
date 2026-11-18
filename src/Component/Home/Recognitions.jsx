import React from 'react';
import { SectionWrapper, AnimatedSection } from '../ui';
import { recognitions } from '../../Content/content';

const Recognitions = () => (
  <SectionWrapper centered label="Trust & Recognition" title="Industry Recognized" subtitle="Certified and recognized by leading innovation and technology bodies.">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {recognitions.map((item, i) => (
        <AnimatedSection key={i} delay={i * 150}>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 h-full">
            <span className="text-3xl mb-4 block">{item.badge || '✓'}</span>
            <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </SectionWrapper>
);

export default Recognitions;
