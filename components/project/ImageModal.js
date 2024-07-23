import React, { useEffect, useState } from 'react';
import ModalImage from '../layout/ModalImage';
import { useSelector, useDispatch } from 'react-redux';
import {
  setModal,
  setIndexBackwards,
  setIndexForward,
} from '../../data/projectSlice';
import {
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';

const ImageModal = ({ name }) => {
  const dispatch = useDispatch();
  const [imageToShow, setImageToShow] = useState(0);
  const [direction, setDirection] = useState(-1);
  const { projectImages, imageIndex } = useSelector((state) => state.project);

  useEffect(() => {
    setImageToShow(imageIndex);
  }, [imageIndex]);

  const moveBack = () => {
    dispatch(setIndexBackwards());
    setDirection(-1);
  };

  const moveForward = () => {
    dispatch(setIndexForward());
    setDirection(1);
  };

  return (
    <div className='w-full h-full bg-white fixed z-50 top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center'>
      <div className='flex justify-center lg:justify-between items-center w-full h-full'>
        <div
          className='hidden lg:flex w-1/12 justify-center'
          onClick={moveBack}
        >
          {imageIndex > 0 && (
            <ChevronLeftIcon className='w-9 h-9 text-gray-400 cursor-pointer' />
          )}
        </div>

        <ModalImage
          image={projectImages[imageToShow]}
          imgIndex={imageToShow}
          length={projectImages.length}
          direction={direction}
          moveBack={moveBack}
          moveForward={moveForward}
        />
        <div
          className='hidden lg:flex w-1/12 justify-center'
          onClick={moveForward}
        >
          {imageIndex < projectImages.length - 1 && (
            <ChevronRightIcon className='w-9 h-9 text-gray-400 cursor-pointer' />
          )}
        </div>
      </div>
      <div className='absolute flex top-4 w-full justify-between align-center px-3'>
        <div></div>
        <div className='font-brand-serif text-lg lg:text-2xl'>{name}</div>
        <div className='cursor-pointer' onClick={() => dispatch(setModal())}>
          <XIcon className='w-7 h-7 text-gray-400' />
        </div>
      </div>
      <div className='absolute bottom-9'>
        <div className='text-sm text-gray-500'>
          {projectImages[imageToShow].caption}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
