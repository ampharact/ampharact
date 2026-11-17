import React from 'react';
import SEO from '../SEO';
import { PageHero, SectionWrapper, CardGrid, InfoBlock } from '../ui';
import Footer from '../Home/Footer';
import { coreValues, securityItems } from '../../Content/content';

export const About = () => (
  <>
    <SEO title="About Us" description="Learn about Ampharact - our vision, mission, core values, and the team driving innovation in managed IT services." keywords="about Ampharact, IT company, cloud experts, DevOps team, company values" />

    <PageHero title="Growing Businesses with Smart IT Solutions" subtitle="We deliver reliable, scalable, and secure technology personalized to your unique business needs." />

    <SectionWrapper centered title="About Us">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <InfoBlock label="Our Vision" title="Driving Growth and Transformation">
          <p className="text-gray-600 leading-relaxed mb-4">Our vision is to be the go-to partner for businesses seeking innovative IT solutions that drive growth &amp; transformation. As we continue to expand our global presence, we aim to provide businesses with the tools &amp; expertise to thrive in the ever-evolving digital world.</p>
          <p className="text-gray-500 italic">"Innovation, trust, and customer satisfaction are at the core of everything we do."</p>
        </InfoBlock>
        <InfoBlock label="Our Mission" title="Empowering Businesses with Innovative IT Solutions" gradient="from-indigo-50 to-white" borderColor="border-indigo-100">
          <p className="text-gray-600 leading-relaxed mb-4">At Ampharact, we are driven by our mission to empower businesses with robust, scalable, &amp; secure IT solutions. Whether it's cloud management, data warehousing, or microservices, our expertise enables businesses to transform their IT infrastructure with confidence.</p>
          <p className="text-gray-500 italic">"Our goal is to simplify complexity, drive success, and build long-term partnerships."</p>
        </InfoBlock>
      </div>
    </SectionWrapper>

    <SectionWrapper bg="bg-pale-blue" centered title="Our Core Values">
      <CardGrid items={coreValues} cols={4} renderCard={(value, i) => (
        <div key={i} className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-card transition-all">
          <h4 className="text-lg font-bold text-blue-600 mb-2">{value.title}</h4>
          <p className="text-sm text-gray-600">{value.desc}</p>
        </div>
      )} />
    </SectionWrapper>

    <SectionWrapper>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 md:p-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Client-Centric Approach</h2>
        <p className="text-gray-600 leading-relaxed mb-4">At Ampharact, we put our clients at the heart of everything we do. Our approach is built around understanding your unique challenges, goals, and vision. We actively listen, communicate openly, and customize solutions that align with your specific business needs.</p>
        <p className="text-gray-500 italic">This customer-first mindset ensures that we not only meet expectations but also exceed them, fostering long-term relationships based on mutual trust and success.</p>
      </div>
    </SectionWrapper>

    <SectionWrapper bg="bg-pale-blue" centered title="Our Security &amp; Compliance">
      <CardGrid items={securityItems} cols={3} renderCard={(item, i) => (
        <div key={i} className="bg-white rounded-2xl p-7 shadow-soft border border-gray-100 text-center">
          <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
            <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </div>
      )} />
    </SectionWrapper>

    <Footer />
  </>
);
