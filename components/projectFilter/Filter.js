import React, { useState } from 'react';
import { MapIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { categories } from '../../data/categories';
import FilterItem from './FilterItem';
import { useSelector, useDispatch } from 'react-redux';
import { setMapClose, setMapOpen } from '../../data/projectSlice';
import { motion, AnimatePresence } from 'framer-motion';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveTab, setActiveTab] = useState({
    left: '140px',
    width: '126px',
  });

  const dispatch = useDispatch();

  const { filterValue } = useSelector((state) => state.filter);

  const getActiveTab = (target) => {
    setActiveTab({
      left: `${target.offsetLeft}px`,
      width: `${target.offsetWidth}px`,
    });
  };

  return (
    <div className='flex w-full justify-between items-center relative'>
      <div className='flex items-end flex-1 xl:items-center'>
        <div className='text-gray-800 font-brand-bold text-xl md:text-2xl lg:text-3xl lg:mr-1 xl:mr-4'>
          Projects
        </div>
        {/* Mobile Filter */}
        <div className='text-brand text-lg md:text-xl flex items-center ml-2 xl:hidden relative'>
          <div className='flex items-center' onClick={() => setIsOpen(!isOpen)}>
            {filterValue.name}{' '}
            <ChevronDownIcon className='w-4 h-4 ml-1 text-brand' />
          </div>
          <AnimatePresence>
            <motion.div
              className='absolute top-8 -left-7 z-30 bg-brand py-4 px-3 shadow-xl'
              initial={{ opacity: 0 }}
              animate={isOpen && { opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              key={isOpen}
            >
              {categories.map((item, index) => (
                <FilterItem
                  name={item.name}
                  value={item.value}
                  index={index}
                  setActiveTab={getActiveTab}
                  key={index}
                  closeMobile={() => setIsOpen(false)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Desktop Filter */}
        <div className='xl:flex hidden'>
          {categories.map((item, index) => (
            <FilterItem
              name={item.name}
              value={item.value}
              index={index}
              setActiveTab={getActiveTab}
              key={index}
              closeMobile={() => setIsOpen(false)}
            />
          ))}
        </div>
      </div>
      <div
        className='text-gray-800 bg-brand-light-gray flex items-center px-4 py-2 cursor-pointer'
        onClick={() => dispatch(setMapOpen())}
      >
        <MapIcon className='w-6 h-6 text-gray-800' />
        <div className='text-lg text-gray-900 ml-1'>Map</div>
      </div>
      <div className='absolute bg-brand-light-gray w-full h-px bottom-0'></div>
      <div
        className='absolute bg-brand h-1 -bottom-px transition-all hidden xl:inline-block'
        style={{ left: `${isActiveTab.left}`, width: `${isActiveTab.width}` }}
      ></div>
    </div>
  );
};

export default Filter;
