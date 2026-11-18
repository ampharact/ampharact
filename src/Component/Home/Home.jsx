import React from 'react';
import SEO from '../SEO';
import Hero from './Hero';
import Stats from './Stats';
import Services from './Services';
import Products from './Products';
import CTA from './CTA';
import Footer from './Footer';

export const Home = () => (
  <>
    <SEO
      title="Home"
      description="Ampharact — enterprise-grade managed IT services. Cloud infrastructure, DevOps, Kubernetes, and AI solutions."
      keywords="managed IT services, cloud, DevOps, Kubernetes, AI"
    />
    <Hero />
    <Stats />
    <Services />
    <Products />
    <CTA />
    <Footer />
  </>
);
