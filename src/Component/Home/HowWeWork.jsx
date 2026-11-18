import React from 'react';
import { AnimatedSection } from '../ui';
import { processSteps } from '../../Content/content';

const HowWeWork = () => (
  <section className="bg-white py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 rounded-full uppercase tracking-widest mb-4">Our Process</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">How We Work</h2>
        <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto leading-relaxed">A proven methodology that ensures successful outcomes at every stage.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {processSteps.map((step, i) => (
          <AnimatedSection key={i} delay={i * 150}>
            <div className="text-center lg:text-left">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-lg mx-auto lg:mx-0 mb-5 shadow-glow-blue">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWork;
