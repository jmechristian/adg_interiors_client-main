import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterValue } from '../../data/filterSlice';

const FilterItem = ({ name, index, setActiveTab, value, closeMobile }) => {
  const dispatch = useDispatch();
  const [isActiveTab, setIsActiveTab] = useState();
  const tabRef = useRef();

  const tabChangeHandler = (e) => {
    setActiveTab(e.target);
    dispatch(setFilterValue({ name: name, value: value }));
    closeMobile();
  };

  return (
    <>
      <div
        ref={tabRef}
        className='text-xl xl:text-base font-bold xl:font-normal text-white xl:text-gray-500 px-4 my-2 relative w-full cursor-pointer'
        key={index}
        onClick={tabChangeHandler}
      >
        {name}
      </div>
    </>
  );
};

export default FilterItem;
