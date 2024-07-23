import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='container h-full mx-auto px-0 md:px-12 lg:px-16'>
      {children}
    </div>
  );
};

export default Container;
