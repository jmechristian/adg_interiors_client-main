import React from 'react';
import { ListViewItem } from './ListViewItem';
import _ from 'lodash';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import { XCircleIcon } from '@heroicons/react/solid';

export const ListViewDrawer = ({ projects, map, drawerHandler, setPlace }) => {
  const sortedPins = _.orderBy(
    projects,
    [(c) => c.attributes.name, 'name'],
    ['asc']
  );

  const isMobile = useMediaQuery('(max-width: 500px)');

  const flyToMarker = (p) => {
    drawerHandler();
    map.flyTo({
      center: [p.attributes.lng, p.attributes.lat],
      zoom: 14,
      duration: 2000,
      offset: isMobile ? [0, 200] : [0, 150],
      pitch: 70,
      bearing: 0,
      essential: true,
      curve: 0.7,
      easing: function (t) {
        return 1 - Math.pow(1 - t, 5);
      },
    });
    setPlace(p);
  };

  return (
    <div className='w-3/4 md:w-1/3 xl:w-1/4 bg-white shadow-lg absolute left-0 top-0 z-[82] h-full overflow-y-scroll'>
      <div className='py-4 px-6 flex-col'>
        <div className='flex justify-between'>
          <div className='font-medium text-2xl mb-6 text-slate-900'>
            Projects &#40;{projects.length}&#41;
          </div>
          <div onClick={drawerHandler} className='cursor-pointer'>
            <XCircleIcon className='w-6 h-6 fill-slate-800' />
          </div>
        </div>
        <div>
          {sortedPins.map((p, index) => (
            <div
              key={index}
              onClick={() => flyToMarker(p)}
              className='cursor-pointer mb-2'
            >
              <ListViewItem name={p.attributes.name} link={p.attributes.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListViewDrawer;
