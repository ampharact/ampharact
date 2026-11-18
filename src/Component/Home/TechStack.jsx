import React from 'react';
import { AnimatedSection } from '../ui';
import { techStack } from '../../Content/content';

const TechStack = () => (
  <section className="bg-white py-20 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 rounded-full uppercase tracking-widest mb-4">Technology Partners</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Built on Industry-Leading Platforms</h2>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, i) => (
            <span key={i} className="px-6 py-3 bg-gray-50 rounded-xl text-gray-600 font-semibold text-sm border border-gray-100 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TechStack;
