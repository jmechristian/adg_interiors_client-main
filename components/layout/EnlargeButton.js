import React from 'react';
import { PlusSmIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { setModal } from '../../data/projectSlice';

const EnlargeButton = ({ imageId, caption }) => {
  const dispatch = useDispatch();

  return (
    <div
      className='absolute z-40 left-2 bottom-2 text-white rounded-md cursor-pointer'
      style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
      onClick={() => dispatch(setModal(imageId))}
    >
      <div className='flex items-center justify-center px-3 py-2 '>
        <div>
          <PlusSmIcon className='w-5 h-5' />
        </div>
        <div className='text-sm hidden md:inline-block'>{caption}</div>
      </div>
    </div>
  );
};

export default EnlargeButton;
