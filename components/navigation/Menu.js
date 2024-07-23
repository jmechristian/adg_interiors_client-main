import React from 'react';
import { menuItems } from '../../data/menuItems';

const Menu = () => {
  return (
    <div className='flex'>
      {menuItems.map((item, index) => (
        <div
          className='uppercase text-gray-500 text-xs pr-5 last:pr-0'
          key={index}
        >
          <a href={`${item.link}`} target='_blank'>
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Menu;
