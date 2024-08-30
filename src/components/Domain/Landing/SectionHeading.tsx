import { Typography } from 'components/Core';
import React from 'react';

const SectionHeading = ({ prefix, main }: any) => (
  <div>
    <Typography size="xl" style={{ fontStyle: 'italic', marginRight: '1rem' }}>
      <strong>{prefix}</strong>
    </Typography>
    <Typography size="2xl" style={{ textDecoration: 'italic' }}>
      <strong>{main}</strong>
    </Typography>
  </div>
);

export default SectionHeading;
