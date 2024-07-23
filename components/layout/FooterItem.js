import React from 'react';

const FooterItem = ({ heading, line1, line2, line3 }) => {
  return (
    <div className='my-4 text-sm'>
      <div className='uppercase text-brand tracking-widest'>{heading}</div>
      <div className='mt-4 text-gray-800 leading-normal'>{line1}</div>
      <div className='text-gray-800 leading-normal'>{line2}</div>
      <div className='text-gray-800 leading-normal'>{line3}</div>
    </div>
  );
};

export default FooterItem;
