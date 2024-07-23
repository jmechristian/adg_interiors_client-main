import React, { useRef } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';

const DetailSub = ({ name, detail, dividers, id }) => {
  const categoryRef = useRef();
  const lineRef = useRef();
  const titleRef = useRef();

  const lineInView = useInView(lineRef);

  return (
    <>
      {detail ? (
        <div className='flex flex-col mb-4 lg:pl-9 xl:pl-9' ref={lineRef}>
          {dividers && (
            <motion.div
              className='border-t border-t-gray-900 mb-2'
              initial={{ width: '0%' }}
              animate={lineInView && { width: '100%' }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            ></motion.div>
          )}
          <motion.div
            className='font-brand-bold text-sm'
            ref={titleRef}
            initial={{ opacity: 0 }}
            animate={lineInView && { opacity: 1 }}
            transition={{ delay: 0.5, ease: 'easeInOut' }}
          >
            {name}
          </motion.div>
          <motion.div
            className='font-brand-serif text-xl md:text-lg lg:text-xl mt-0 detail-item w-full flex justify-start'
            ref={categoryRef}
            initial={{ opacity: 0 }}
            animate={lineInView && { opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
          >
            {detail.map((item) => (
              <div className='w-full' key={item.id}>
                {item.attributes.subcategory}
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default DetailSub;
