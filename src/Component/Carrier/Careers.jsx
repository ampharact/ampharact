import React from 'react';
import SEO from '../SEO';
import Footer from '../Home/Footer';
import { careerPerks, companyInfo } from '../../Content/content';

export const Careers = () => (
  <>
    <SEO title="Careers" description="Join Ampharact — career opportunities in cloud, DevOps, and AI." keywords="Ampharact careers, IT jobs, cloud, DevOps" />

    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Careers</h1>
        <p className="text-lg text-gray-400 mt-4">Join a team that values innovation and growth.</p>
      </div>
    </section>

    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-10">Why join us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {careerPerks.map((perk, i) => (
            <div key={i} className="text-center p-6 rounded-xl border border-gray-100">
              <span className="text-3xl mb-3 block">{perk.icon}</span>
              <h3 className="font-bold text-gray-900 mb-1">{perk.title}</h3>
              <p className="text-xs text-gray-500">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Interested?</h2>
        <p className="text-gray-500 mb-5">Send your resume to:</p>
        <a href={`mailto:${companyInfo.email}`} className="text-blue-600 font-bold text-lg hover:underline">{companyInfo.email}</a>
        <p className="text-xs text-gray-400 mt-4">We get back to qualified candidates within a week.</p>
      </div>
    </section>

    <Footer />
  </>
);
