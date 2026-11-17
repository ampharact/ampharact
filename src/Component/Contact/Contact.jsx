import React from 'react';
import SEO from '../SEO';
import { PageHero, SectionWrapper } from '../ui';
import Footer from '../Home/Footer';
import { contactSteps, processGuarantees, socialLinks, companyInfo } from '../../Content/content';

const socialButtons = [
  { key: 'linkedin', label: 'LinkedIn', color: 'text-blue-700' },
  { key: 'instagram', label: 'Instagram', color: 'text-pink-600' },
  { key: 'youtube', label: 'YouTube', color: 'text-red-600' },
];

const Contact = () => (
  <>
    <SEO title="Contact Us" description="Get in touch with Ampharact. Write us about your project and we'll prepare a proposal within 24 hours." keywords="contact Ampharact, IT services inquiry, managed services quote" />

    <PageHero title="Let's Talk" subtitle="You can reach us any time" gradient="bg-gradient-to-br from-blue-600 to-indigo-700" dark={false} />

    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Process Steps */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What will be the next step?</h2>
          <p className="text-gray-500 mb-10">You are one step closer to building your perfect product.</p>
          <div className="space-y-10 relative pl-8 before:absolute before:left-3 before:top-2 before:h-[80%] before:w-0.5 before:bg-blue-200">
            {contactSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[22px] top-1 w-4 h-4 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Card */}
        <div>
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
            <div className="bg-blue-50 p-6">
              <p className="text-gray-700">Write us a few words about your project and we'll prepare a proposal for you within <strong>24 hours.</strong></p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">📧 Email Us</h3>
                <a href={`mailto:${companyInfo.email}`} className="text-blue-600 font-semibold text-lg hover:underline">{companyInfo.email}</a>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">🔗 Connect With Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialButtons.filter(s => socialLinks[s.key]).map(s => (
                    <a key={s.key} href={socialLinks[s.key]} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 bg-white rounded-lg text-sm font-medium ${s.color} shadow-sm hover:shadow-md transition-all`}>{s.label}</a>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">🏢 About Our Process</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {processGuarantees.map((g, i) => (
                    <li key={i} className="flex items-center space-x-2"><span className="text-green-500">✓</span><span>{g}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <Footer />
  </>
);

export default Contact;
