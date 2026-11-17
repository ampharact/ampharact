import React from 'react';
import SEO from '../SEO';
import { PageHero, SectionWrapper, CardGrid } from '../ui';
import Footer from '../Home/Footer';
import { careerPerks, companyInfo } from '../../Content/content';

export const Careers = () => (
  <>
    <SEO title="Careers" description="Join Ampharact and shape your future. Explore exciting career opportunities in cloud, DevOps, and AI." keywords="Ampharact careers, IT jobs, cloud engineer, DevOps jobs, AI jobs" />

    <PageHero title="Shape Your Future with Us" subtitle="Explore exciting opportunities and join a team that values innovation." gradient="bg-gradient-to-br from-blue-600 to-indigo-700" dark={false} />

    <SectionWrapper centered title="Why Join Ampharact?">
      <CardGrid items={careerPerks} cols={4} renderCard={(perk, i) => (
        <div key={i} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-7 shadow-soft border border-blue-100 text-center">
          <div className="text-4xl mb-4">{perk.icon}</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{perk.title}</h3>
          <p className="text-gray-600 text-sm">{perk.desc}</p>
        </div>
      )} />
    </SectionWrapper>

    <SectionWrapper bg="bg-pale-blue" className="!py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-10 shadow-card border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in joining us?</h2>
          <p className="text-gray-600 mb-6">Send your resume and a brief introduction to:</p>
          <a href={`mailto:${companyInfo.email}`} className="text-blue-600 font-bold text-xl hover:underline">{companyInfo.email}</a>
          <p className="text-gray-500 text-sm mt-4">We review all applications and get back to qualified candidates within a week.</p>
        </div>
      </div>
    </SectionWrapper>

    <Footer />
  </>
);
