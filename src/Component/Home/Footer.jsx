import React from 'react';
import { footerSections, socialLinks, companyInfo } from '../../Content/content';

const Footer = () => (
  <footer>
    {/* Email bar */}
    <div className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="bg-blue-600 p-2.5 rounded-full">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89-3.94a4 4 0 014.22 0L21 8m-18 0v8a2 2 0 002 2h14a2 2 0 002-2V8m-2 0l-7.89 3.94a4 4 0 01-4.22 0L3 8z" />
            </svg>
          </div>
          <a href={`mailto:${companyInfo.email}`} className="text-lg font-semibold text-blue-700 hover:text-blue-800 transition-colors">
            {companyInfo.email}
          </a>
        </div>
        <div className="flex space-x-4">
          {Object.entries({ linkedin: { color: 'text-blue-700 hover:bg-blue-50', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx={4} cy={4} r={2} /></svg> },
            instagram: { color: 'text-pink-500 hover:bg-pink-50', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width={20} height={20} x={2} y={2} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" /></svg> },
          }).filter(([key]) => socialLinks[key]).map(([key, { color, icon }]) => (
            <a key={key} href={socialLinks[key]} target="_blank" rel="noopener noreferrer"
              className={`w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center ${color} transition-colors`}
              aria-label={key}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Main footer grid */}
    <div className="bg-brand-dark text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold text-white mb-4">{section.title}</h3>
            <ul className="space-y-2.5">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  {item.url ? (
                    <a href={item.url} className="text-gray-300 hover:text-white transition-colors text-sm"
                       target={item.url.startsWith('http') ? '_blank' : undefined}
                       rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Copyright */}
    <div className="bg-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; {companyInfo.year} {companyInfo.name}. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">{companyInfo.tagline}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
