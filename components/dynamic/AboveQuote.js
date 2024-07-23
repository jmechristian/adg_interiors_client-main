import React from 'react';
import DynamicContent from './DynamicContent';

const AboveQuote = ({ content }) => {
  return (
    <div className='grid grid-auto gap-8 md:mt-6 md:mb-6'>
      {content
        ? content.map((item, index) => (
            <div key={index}>
              <DynamicContent component={item} />
            </div>
          ))
        : ''}
    </div>
  );
};

export default AboveQuote;
