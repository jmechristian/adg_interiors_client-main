import React from 'react';
import InnerContainer from '../layout/InnerContainer';
import Filter from './Filter';
import ProjectGrid from './ProjectGrid';
import { motion } from 'framer-motion';

const ProjectFilter = () => {
  return (
    <InnerContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      >
        <Filter />
        <ProjectGrid />
      </motion.div>
    </InnerContainer>
  );
};

export default ProjectFilter;
