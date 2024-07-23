import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import { menuItems } from '../../data/menuItems';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileMenuClose } from '../../data/projectSlice';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = () => {
  const dispatch = useDispatch();
  const { mobileMenuOpen } = useSelector((state) => state.project);

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ x: 1200 }}
          animate={{ x: 0 }}
          exit={{ x: 1200 }}
          transition={{
            type: 'spring',
            duration: 0.5,
            bounce: 0,
          }}
          className='fixed w-full h-screen top-0 left-0 bg-brand z-50'
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeIn',
              duration: 0.4,
              delay: 0.3,
            }}
            className='w-full h-full flex-col pl-8 md:pl-16 lg:pl-20 pt-28 relative'
          >
            <div
              className='absolute top-4 right-4'
              onClick={() => dispatch(setMobileMenuClose())}
            >
              <XIcon className='w-8 md:w-12 h-8 md:h-12 text-white' />
            </div>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className='text-white capitalize cursor-pointer font-brand-bold text-5xl md:text-6xl lg:text-7xl mb-3 md:mb-4'
              >
                <a href={`${item.link}`} target='_blank'>
                  {item.name}
                </a>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
