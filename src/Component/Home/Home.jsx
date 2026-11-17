import React from 'react';
import SEO from '../SEO';
import Hero from './Hero';
import Services from './Services';
import Products from './Products';
import BusinessAgility from './BusinessAgility';
import Recognitions from './Recognitions';
import Stats from './Stats';
import WhyUs from './WhyUs';
import CTA from './CTA';
import Footer from './Footer';

export const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Ampharact provides enterprise-grade managed IT services specializing in cloud, DevOps, Kubernetes containers, data warehousing, and AI solutions."
        keywords="managed IT services, cloud, DevOps, Kubernetes, containers, AI, data warehousing"
      />
      <Hero />
      <Services />
      <Products />
      <BusinessAgility />
      <Recognitions />
      <CTA />
      <Stats />
      <WhyUs />
      <Footer />
    </>
  );
};
