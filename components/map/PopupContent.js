import React from 'react';
import _ from 'lodash';

const PopupContent = ({
  name,
  hero,
  department,
  subcategory,
  building_type,
  link,
  description,
}) => {
  return (
    <div className='w-80 bg-white p-2'>
      <div className='flex flex-col'>
        {hero ? (
          <div className='mb-3'>
            <img src={hero} alt={name ? name : 'Akseizer Design Group'} />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='flex italic text-gray-500 text-xs mb-1'>
        {department ? department : ''}
        {subcategory && subcategory.length > 0
          ? ', ' + subcategory[0].attributes.subcategory
          : ''}
        {building_type ? ', ' + building_type : ''}
      </div>
      <div className='font-bold text-3xl text-gray-900 mb-1'>
        {name ? name : ''}
      </div>
      <div className='text-base mb-6 text-gray-500 leading-snug'>
        {description ? _.truncate(description, { length: 110 }) : ''}
      </div>
      <div>
        {link ? (
          <div className='bg-slate-900 rounded-lg w-1/2 flex justify-center align-middle'>
            <div className='text-white py-2 text-base'>
              <a href={link}>View Project</a>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default PopupContent;
