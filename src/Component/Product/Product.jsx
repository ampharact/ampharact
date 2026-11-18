import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import Footer from '../Home/Footer';
import { productDetails } from '../../Content/content';

export const Product = () => (
  <>
    <SEO title="Products" description="Ampharact products — AI-Powered Container Platform and Enterprise AI Solutions." keywords="CaaS, container platform, AI solutions, enterprise AI" />

    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Our Products</h1>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl">AI-powered platforms built for modern enterprise operations.</p>
      </div>
    </section>

    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        {productDetails.map((product, i) => (
          <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
            <div className={`h-1 bg-gradient-to-r ${product.gradient}`} />
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-6 max-w-2xl">{product.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {product.features.map((f, fi) => (
                  <span key={fi} className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">{f}</span>
                ))}
              </div>
              <Link to="/contact" className="text-sm text-blue-600 font-semibold hover:text-blue-700">
                Get started →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </>
);
