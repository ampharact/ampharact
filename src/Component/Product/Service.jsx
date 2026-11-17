import React from 'react';
import SEO from '../SEO';
import { PageHero, SectionWrapper, CardGrid } from '../ui';
import Footer from '../Home/Footer';
import { serviceDetails } from '../../Content/content';

const numberedServices = serviceDetails.map((s, i) => ({ ...s, number: String(i + 1).padStart(2, '0') }));

export const Service = () => (
  <>
    <SEO title="Services" description="Explore Ampharact managed IT services: cloud, containers, data warehousing, microservices, outsourcing, and 24/7 support." keywords="managed cloud services, container orchestration, data warehousing, microservices, IT outsourcing, L1 support" />

    <PageHero title="Features of Our Managed Services" subtitle="Discover how our comprehensive solutions can transform your business cloud operations. We specialize in driving efficiency and innovation through managed cloud services, container orchestration, data warehousing, and microservice development." />

    <SectionWrapper>
      <CardGrid items={numberedServices} cols={2} renderCard={(service, i) => (
        <article key={i} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-soft border border-blue-100 hover:shadow-card transition-all duration-300">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-blue-600 font-bold">{service.number}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed">{service.desc}</p>
        </article>
      )} />
    </SectionWrapper>

    <Footer />
  </>
);
