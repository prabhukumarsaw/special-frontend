import React from 'react';

// Define the type for the props
type SubtitleProps = {
  subtitle: string; // Explicitly define the type for subtitle
};

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <h3 className='section__subtitle'>{subtitle}</h3>
  );
};

export default Subtitle;
