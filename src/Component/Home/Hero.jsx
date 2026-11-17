import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="gradient-light">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Revolutionize Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Operations</span>
              <br />with Ampharact
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Welcome to Ampharact (I) Private Limited, where innovation meets efficiency.
              Explore our cutting-edge solutions to <strong>streamline business operations</strong> with
              secure &amp; scalable IT services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-3.5 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                Get Started
              </Link>
              <Link to="/services" className="px-8 py-3.5 text-lg font-semibold text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-all duration-300">
                Our Services
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl blur-2xl opacity-40"></div>
              <div className="relative bg-white rounded-2xl shadow-card p-8 max-w-md">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500 font-medium">Systems Online</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-blue-600">99%</p>
                      <p className="text-xs text-gray-500 mt-1">Uptime</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-green-600">24/7</p>
                      <p className="text-xs text-gray-500 mt-1">Support</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-purple-600">360+</p>
                      <p className="text-xs text-gray-500 mt-1">Backups</p>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-amber-600">40%</p>
                      <p className="text-xs text-gray-500 mt-1">Cost Save</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
