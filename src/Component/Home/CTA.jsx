import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Let's Talk with Us</h2>
              <p className="text-blue-100 mt-2">Ready to transform your IT operations?</p>
            </div>
            <Link to="/contact" className="px-8 py-3.5 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
