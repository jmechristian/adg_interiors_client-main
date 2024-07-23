import React, { useRef } from 'react';
import ImageComponent from '../layout/ImageComponent';
import { useInView, motion } from 'framer-motion';

const FullWidth = ({ image }) => {
  const fullRef = useRef();
  const imageInView = useInView(fullRef);

  return (
    <motion.div
      className='w-full md:aspect-w-16 md:aspect-h-9'
      initial={{ opacity: 0, y: 25 }}
      animate={imageInView && { opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      ref={fullRef}
    >
      <ImageComponent image={image.data.attributes} />
    </motion.div>
  );
};

export default FullWidth;
