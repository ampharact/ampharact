import React from 'react';
import { Link } from 'react-router-dom';
import { footerSections, socialLinks, companyInfo } from '../../Content/content';

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold tracking-tight">AMPHARACT</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">{companyInfo.tagline}</p>
          <a href={`mailto:${companyInfo.email}`} className="text-sm text-blue-400 hover:text-blue-300">{companyInfo.email}</a>
        </div>

        {/* Link columns */}
        {footerSections.map((section, i) => (
          <div key={i}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">{section.title}</h4>
            <ul className="space-y-2.5">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  {item.url ? (
                    <a href={item.url} className="text-sm text-gray-400 hover:text-white transition-colors" target={item.url.startsWith('http') ? '_blank' : undefined} rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} {companyInfo.name}</p>
        <p className="mt-2 sm:mt-0">Privacy · Terms</p>
      </div>
    </div>
  </footer>
);

export default Footer;
