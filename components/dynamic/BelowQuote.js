import React from 'react';
import DynamicContent from './DynamicContent';

const BelowQuote = ({ content }) => {
  return (
    <div className='grid grid-auto gap-8 md:mt-8 md:mb-8'>
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

export default BelowQuote;
