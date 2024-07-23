import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectQuote from './ProjectQuote';

const ProjectGallery = ({ images }) => {
  return (
    <div className='mb-12'>
      <ProjectImage image={images[1]} />
      <ProjectImage image={images[2]} />
      <ProjectQuote />
      <ProjectImage image={images[3]} />
      <ProjectImage image={images[4]} />
      <ProjectImage image={images[5]} />
    </div>
  );
};

export default ProjectGallery;
