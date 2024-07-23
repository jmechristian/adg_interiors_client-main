import React from 'react';

export const ListViewItem = ({ name, link }) => {
  const itemMarkerIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-5 w-5'
      viewBox='0 0 20 20'
      fill='#d31b5d'
    >
      <path
        fillRule='evenodd'
        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
        clipRule='evenodd'
      />
    </svg>
  );

  const externalLinkIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-5 w-5'
      viewBox='0 0 20 20'
      fill='#475569'
    >
      <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
      <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
    </svg>
  );

  return (
    <div className='inline-block'>
      <div className='flex items-center'>
        <div className='color-brand mr-5'>{itemMarkerIcon}</div>
        <div className=' text-slate-900' style={{ fontSize: '18px' }}>
          {name}
        </div>
        <div className='ml-1'>
          {link ? (
            <a href={link} target='_blank'>
              {externalLinkIcon}
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
