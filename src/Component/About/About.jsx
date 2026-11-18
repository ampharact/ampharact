import React from 'react';
import SEO from '../SEO';
import Footer from '../Home/Footer';
import { coreValues, securityItems } from '../../Content/content';

export const About = () => (
  <>
    <SEO title="About Us" description="Ampharact — enterprise IT managed services company based in India." keywords="about Ampharact, IT company, cloud, DevOps" />

    {/* Hero */}
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">About Ampharact</h1>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl">Enterprise-grade managed IT services. Built on trust, powered by innovation.</p>
      </div>
    </section>

    {/* Story */}
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Building reliable infrastructure</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Ampharact (I) Private Limited was founded to empower businesses with scalable, secure IT solutions. Based in Tamil Nadu, India, we serve enterprises across industries with deep expertise in AWS, Azure, GCP, and Kubernetes.</p>
            <p className="text-gray-500 leading-relaxed">We don't just manage infrastructure — we engineer it for performance, security, and cost efficiency.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 content-start">
            {[{ v: '2023', l: 'Founded' }, { v: '50+', l: 'Clients' }, { v: '500+', l: 'Deployments' }, { v: '99.99%', l: 'Uptime' }].map((m, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 text-center">
                <p className="text-xl font-bold text-gray-900">{m.v}</p>
                <p className="text-xs text-gray-400 mt-1">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Values</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">What we stand for</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
              <span className="text-xl mb-3 block">{v.icon}</span>
              <h4 className="font-bold text-gray-900 mb-1">{v.title}</h4>
              <p className="text-sm text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Security */}
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Compliance</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Security & governance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityItems.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-6">
              <span className="text-xl mb-3 block">{item.icon}</span>
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </>
);
