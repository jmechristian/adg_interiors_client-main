import React, { useRef, useEffect } from 'react';
import DetailSize from './details/DetailSize';
import DetailSub from './details/DetailSub';
import DetailProjectType from './details/DetailProjectType';
import DetailBuildingType from './details/DetailBuildingType';
import { useInView, motion, AnimatePresence } from 'framer-motion';

const ProjectModernAllInfo = ({
  description,
  collaborators,
  building_type,
  subcategory,
  project_type,
  size,
  id,
}) => {
  const descRef = useRef(null);
  const descInView = useInView(descRef);

  return (
    <div className='mb-6'>
      <div className='grid grid-cols-1 lg:grid-cols-12' ref={descRef}>
        <motion.div
          key={id}
          className='flex flex-col lg:col-span-9 mb-6 lg:pr-1'
          initial={{ opacity: 0 }}
          animate={descInView && { opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className='font-brand-serif text-2xl md:text-2xl lg:text-3xl leading-tight md:leading-snug lg:leading-snug lg:pr-3 mb-4 -mt-2'>
            {description}
          </div>
          <div className='text-xs text-gray-400'>{collaborators}</div>
        </motion.div>
        <div className='lg:col-span-3'>
          <DetailSize name={'Size'} detail={size} dividers id={id} />
          <DetailSub name={'Category'} detail={subcategory} dividers id={id} />
          <DetailProjectType
            name={'Project Type'}
            detail={project_type}
            dividers
            id={id}
          />
          <DetailBuildingType
            name={'Building Type'}
            detail={building_type}
            dividers
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectModernAllInfo;
