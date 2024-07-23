import React from 'react';

const ProjectInfoCategory = ({ name, detail }) => {
  return (
    <div className='mb-6 flex flex-col md:pl-12'>
      {detail && (
        <>
          <div className='font-brand-bold text-sm text-gray-800'>{name}</div>
          <div className='flex detail-item text-base lg:text-lg flex-wrap text-gray-800'>
            {detail.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectInfoCategory;
