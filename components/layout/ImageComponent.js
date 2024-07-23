import React, { useRef, useState } from 'react';
import Watermark from './Watermark';
import EnlargeButton from './EnlargeButton';
import { motion, AnimatePresence } from 'framer-motion';

const ImageComponent = ({ image, caption }) => {
  const imageRef = useRef();
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className='w-full relative overflow-hidden'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={image.url}
        // width={image.width}
        // height={image.height}
        id={image.hash}
        className='object-center object-cover w-full h-full'
        data-caption={image.caption}
      />
      <Watermark />
      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            exit={{ opacity: 0 }}
          >
            <EnlargeButton imageId={image.hash} caption={image.caption} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageComponent;
