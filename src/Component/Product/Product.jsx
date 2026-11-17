import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { PageHero, SectionWrapper, FeatureList } from '../ui';
import Footer from '../Home/Footer';
import { productDetails } from '../../Content/content';

export const Product = () => (
  <>
    <SEO title="Products" description="Explore Ampharact products: AI-Powered Container Platform (CaaS) and Personalized AI solutions for enterprise." keywords="CaaS, container platform, AI solutions, enterprise AI, container management" />

    <PageHero title="AI-Powered Solutions" subtitle="Experience the future of container management and enterprise optimization with our AI-powered solutions that deliver tangible results and a competitive edge." />

    <SectionWrapper>
      <div className="space-y-12">
        {productDetails.map((product, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100">
            <div className={`h-2 bg-gradient-to-r ${product.gradient}`}></div>
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{product.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">{product.desc}</p>
              <div className="mb-8">
                <FeatureList features={product.features} />
              </div>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                Get Started
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>

    <Footer />
  </>
);
