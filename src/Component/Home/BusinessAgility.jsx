import React from 'react';
import { SectionWrapper, CardGrid } from '../ui';
import { agilityFeatures } from '../../Content/content';

const BusinessAgility = () => (
  <SectionWrapper bg="bg-pale-blue" title="Scale Business Agility"
    subtitle="Scale your business with agile strategies and innovative solutions. We enhance responsiveness, streamline operations, and drive continuous improvement.">
    <CardGrid items={agilityFeatures} cols={3} />
  </SectionWrapper>
);

export default BusinessAgility;
