import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => (
  <section className="bg-white py-24">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
      <p className="text-gray-500 mb-8 max-w-lg mx-auto">Let's discuss how we can help you build reliable, scalable infrastructure.</p>
      <Link to="/contact" className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">
        Talk to us
      </Link>
    </div>
  </section>
);

export default CTA;
