import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Careers', path: '/careers' },
  ];

  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3' : 'bg-white py-4'}`}>
      <div className="max-w-7xl flex items-center justify-between mx-auto px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-glow-blue">
            <span className="text-white font-extrabold text-lg">A</span>
          </div>
          <span className="text-xl font-extrabold text-gray-900 tracking-tight font-montserrat">AMPHARACT</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map(({ label, path }) => (
            <Link key={path} to={path} className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(path) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'}`}>
              {label}
              {isActive(path) && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full" />}
            </Link>
          ))}
          <Link to="/contact" className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            Let's Talk
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-2 space-y-1 border-t border-gray-100 bg-white">
          {navLinks.map(({ label, path }) => (
            <Link key={path} to={path} onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(path) ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'}`}>
              {label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center mt-3 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-semibold">
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
