import React, { useRef, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';
import { ProjectModernInfoAnimation } from '../../data/animation';

const ProjectQuote = ({ quote, attribution }) => {
  const quoteRef = useRef();
  const quoteInView = useInView(quoteRef);

  useEffect(() => {
    ProjectModernInfoAnimation(quoteRef.current);
  }, []);

  return (
    <div className='w-full flex flex-col my-10 lg:my-14'>
      <div className='mx-auto w-4/5 md:w-3/4'>
        <div
          className='text-gray-800 font-brand-serif text-2xl lg:text-3xl xl:text-4xl leading-tight lg:leading-tight xl:leading-tight'
          ref={quoteRef}
          // initial={{ opacity: 0 }}
          // animate={quoteInView && { opacity: 1 }}
          // transition={{ duration: 0.5, delay: 0.25, ease: 'easeInOut' }}
        >
          {quote}
        </div>
        <motion.div
          className='text-gray-800 font-brand-bold text-left md:text-center text-xs lg:text-base mt-6'
          initial={{ opacity: 0 }}
          animate={quoteInView && { opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.25, ease: 'easeInOut' }}
        >
          {attribution}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectQuote;
