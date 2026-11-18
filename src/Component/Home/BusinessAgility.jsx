import React from 'react';
import { AnimatedSection } from '../ui';
import { agilityFeatures } from '../../Content/content';

const BusinessAgility = () => (
  <section className="bg-gradient-to-br from-gray-900 to-blue-950 py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 text-xs font-bold text-blue-300 bg-white/10 rounded-full uppercase tracking-widest mb-4">Capabilities</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Scale Business Agility</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed">Scale your business with agile strategies and innovative solutions that drive continuous improvement.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {agilityFeatures.map((item, i) => (
          <AnimatedSection key={i} delay={i * 150}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{item.content}</p>
              {item.highlights && (
                <ul className="space-y-2">
                  {item.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-center text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessAgility;
