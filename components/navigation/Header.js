import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import Menu from './Menu';
import InnerContainer from '../layout/InnerContainer';
import { MenuAlt3Icon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { setMobileMenuOpen } from '../../data/projectSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className='container mx-auto'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
      >
        <InnerContainer>
          <div className='flex justify-between items-end w-full pt-6 xl:pt-5 px-0 md:px-12 lg:px-16'>
            <div className='fill-brand w-64 md:w-72 lg:w-80'>
              <Logo />
            </div>
            <div className='hidden xl:block'>
              <Menu />
            </div>
            <div
              className='block xl:hidden'
              onClick={() => dispatch(setMobileMenuOpen())}
            >
              <MenuAlt3Icon className='w-7 md:w-9 h-7 md:h-9 fill-brand' />
            </div>
          </div>
        </InnerContainer>
      </motion.div>
    </div>
  );
};

export default Header;
