import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModalImage = ({
  image,
  direction,
  moveBack,
  moveForward,
  imgIndex,
  length,
}) => {
  return (
    <div className='w-full lg:w-10/12 xl:w-8/12 h-full relative flex flex-col justify-center items-center'>
      <AnimatePresence>
        <motion.img
          src={image.src}
          key={image.src}
          initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction < 0 ? 1000 : -1000 }}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.point.x < 0 && imgIndex < length - 1) {
              moveForward();
            } else if (info.point.x > 500 && imgIndex != 0) {
              moveBack();
            }
          }}
          className='absolute w-full object-contain'
          style={{ maxHeight: '86%' }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ModalImage;
