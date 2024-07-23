import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const ProjectItem = ({ hero, id, name, location }) => {
  const router = useRouter();

  const projectItemClickHandler = () => {
    window.location.href = `/projects/${id}`;
  };

  return (
    <>
      <div
        className='h-64 md:h-56 w-full relative cursor-pointer'
        onClick={projectItemClickHandler}
      >
        <motion.div
          className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end'
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
        >
          <div className='flex flex-col pl-4 pb-4'>
            <div className='font-brand-bold text-white text-xl xl:text-2xl'>
              {name}
            </div>
            <div className='text-white uppercase text-sm'>{location}</div>
          </div>
        </motion.div>
        <div
          className='bg-slate-300 w-full h-full bg-cover bg-center'
          style={{ backgroundImage: `url(${hero})` }}
        >
          <a href={`/projects/${id}`}></a>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
