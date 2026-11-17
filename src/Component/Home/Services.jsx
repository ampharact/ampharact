import React from 'react';
import { SectionWrapper, CardGrid } from '../ui';
import { cardData } from '../../Content/content';

const Services = () => (
  <SectionWrapper bg="bg-pale-blue" centered label="What We Offer" title="How We Help">
    <CardGrid items={cardData} cols={3} />
  </SectionWrapper>
);

export default Services;
