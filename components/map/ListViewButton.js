import React from 'react';

const ListViewButton = ({ onClick }) => {
  const ListIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='fill-slate-900'
      viewBox='0 0 20 20'
      style={{ width: '20px', height: '20px' }}
    >
      <path
        fillRule='evenodd'
        d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
        clipRule='evenodd'
      />
    </svg>
  );

  return (
    <div className='bg-white rounded-lg inline-block text-slate-900 cursor-pointer shadow-md mr-3'>
      <div
        className='flex py-2 px-4 items-center align-middle self-center'
        onClick={onClick}
      >
        <div>{ListIcon}</div>
        <div className='ml-2 hidden sm:inline-block text-base'>List View</div>
      </div>
    </div>
  );
};

export default ListViewButton;
