import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import ImageComponent from '../layout/ImageComponent';
import Watermark from '../layout/Watermark';

const ProjectImage = ({ image }) => {
  const projectImageRef = useRef();

  const projectImageInView = useInView(projectImageRef);

  return (
    <>
      <motion.div
        className='w-full aspect-w-16 aspect-h-12 md:aspect-w-16 md:aspect-h-9 my-4 lg:my-6 relative'
        ref={projectImageRef}
        initial={{ opacity: 0 }}
        animate={projectImageInView && { opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div
          className='text-white h-full flex flex-1 justify-center items-center bg-cover bg-center'
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <Watermark />
        </div>
      </motion.div>
    </>
  );
};

export default ProjectImage;
