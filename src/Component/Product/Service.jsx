import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Footer from '../Home/Footer';
import { serviceDetails } from '../../Content/content';

export const Service = () => (
  <>
    <SEO title="Services" description="Ampharact managed IT services — cloud, containers, data, microservices, and 24/7 support." keywords="managed cloud, Kubernetes, data warehousing, microservices, IT support" />

    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Our Services</h1>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl">Comprehensive managed IT solutions engineered for reliability and scale.</p>
      </div>
    </section>

    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceDetails.map((s, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </div>
              {s.highlights && (
                <div className="ml-10 mt-3 flex flex-wrap gap-2">
                  {s.highlights.map((h, hi) => (
                    <span key={hi} className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">{h}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Need something custom?</h2>
        <p className="text-gray-500 mb-6">Every business is different. Let's find the right solution for yours.</p>
        <Link to="/contact" className="inline-block px-7 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">
          Get in touch
        </Link>
      </div>
    </section>

    <Footer />
  </>
);
