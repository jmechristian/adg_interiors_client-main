import React from 'react';

const CloseButton = ({ onClick }) => {
  const CloseIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='fill-white'
      viewBox='0 0 20 20'
      style={{ width: '20px', height: '20px' }}
    >
      <path
        fillRule='evenodd'
        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
        clipRule='evenodd'
      />
    </svg>
  );

  return (
    <div className='bg-slate-900 rounded-lg inline-block cursor-pointer shadow-md'>
      <div
        className='flex py-2 px-4 items-center align-middle self-center'
        onClick={onClick}
      >
        <div>{CloseIcon}</div>
        <div className='ml-2 hidden sm:inline-block text-white text-base'>
          Close
        </div>
      </div>
    </div>
  );
};

export default CloseButton;
