import React from 'react';

const ProjectHero = ({ image }) => {
  return (
    <div className='w-full aspect-w-16 aspect-h-12 md:aspect-w-16 md:aspect-h-9 my-10'>
      <div
        className='text-white h-full flex flex-1 justify-center items-center bg-cover bg-center'
        style={{ backgroundImage: `url(${image.src})` }}
      >
        {/* <div className='text-4xl lg:text-6xl font-brand-serif'>
          Hero <span className='italic'> Image</span>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectHero;
