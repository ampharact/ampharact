import React from 'react';
import { AnimatedSection } from '../ui';

const WhyUs = () => (
  <section className="bg-white py-24">
    <div className="max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-10 md:p-16 shadow-soft border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Ampharact IT Managed Services?</h2>
          <p className="text-gray-700 font-medium leading-relaxed mb-4">
            <strong className="text-blue-600">WE LISTEN.</strong> At Ampharact, we prioritize your needs above all else. Dedicated to fueling your business growth, we specialize in advanced Cloud IT managed services that align with your strategic goals.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            From seamless infrastructure deployment to intelligent data management and round-the-clock operations support, we ensure your systems run at peak performance. Our engineering teams swiftly optimize your architecture so you can focus on what matters most — growing your business.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our tailored cloud services are built to align with your objectives and exceed expectations. We combine deep technical expertise with a consultative approach to deliver measurable outcomes.
          </p>
          <div className="flex flex-wrap gap-8">
            {['15+ Years Combined Experience', 'ISO-Aligned Processes', 'Zero Vendor Lock-in'].map((text) => (
              <span key={text} className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WhyUs;
