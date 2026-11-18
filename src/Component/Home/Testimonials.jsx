import React from 'react';
import { SectionWrapper, AnimatedSection } from '../ui';
import { testimonials } from '../../Content/content';

const Testimonials = () => (
  <SectionWrapper bg="bg-gray-50" centered label="Client Stories" title="What Our Partners Say">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <AnimatedSection key={i} delay={i * 150}>
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 h-full flex flex-col">
            <span className="text-5xl text-blue-100 font-serif leading-none mb-4">"</span>
            <p className="text-gray-600 italic leading-relaxed mb-6 flex-1">{t.quote}</p>
            <div>
              <div className="w-12 h-0.5 bg-blue-200 mb-4" />
              <p className="font-bold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </SectionWrapper>
);

export default Testimonials;
