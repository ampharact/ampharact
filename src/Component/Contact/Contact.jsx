import React from 'react';
import SEO from '../SEO';
import Footer from '../Home/Footer';
import { contactSteps, processGuarantees, socialLinks, companyInfo } from '../../Content/content';

const Contact = () => (
  <>
    <SEO title="Contact Us" description="Get in touch with Ampharact. We respond within 24 hours." keywords="contact Ampharact, IT services, managed services" />

    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Let's talk</h1>
        <p className="text-lg text-gray-400 mt-4">We respond within 24 hours.</p>
      </div>
    </section>

    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Process */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">How it works</h2>
            <div className="space-y-8">
              {contactSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Email us</h3>
              <a href={`mailto:${companyInfo.email}`} className="text-blue-600 font-semibold hover:underline">{companyInfo.email}</a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Connect</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'linkedin', label: 'LinkedIn' },
                  { key: 'instagram', label: 'Instagram' },
                  { key: 'youtube', label: 'YouTube' },
                ].filter(s => socialLinks[s.key]).map(s => (
                  <a key={s.key} href={socialLinks[s.key]} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-blue-200 hover:text-blue-600 transition-colors">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Our promise</h3>
              <ul className="space-y-2">
                {processGuarantees.map((g, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2.5" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default Contact;
