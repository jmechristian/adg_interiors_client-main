import React, { useState, useRef, useMemo } from 'react';
import Map, { NavigationControl, Marker, Popup } from 'react-map-gl';
import MarkerPin from './MarkerPin';
import PopupContent from './PopupContent';
import ListViewButton from './ListViewButton';
import ResetButton from './ResetButton';
import CloseButton from './CloseButton';
import ListViewDrawer from './ListViewDrawer';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapContainer = ({ allPins, closeMap }) => {
  const initialView = {
    longitude: -77.0307193335218,
    latitude: 38.87225889119998,
    zoom: 12,
    pitch: 70,
  };

  const [place, setPlace] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [viewState, setViewState] = useState(initialView);
  const mapRef = useRef();

  const pins = useMemo(
    () =>
      allPins.map((p) => (
        <Marker
          longitude={p.attributes.lng}
          latitude={p.attributes.lat}
          key={p.id}
          anchor='bottom'
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPlace(p);
            mapRef.current.flyTo({
              center: [p.attributes.lng, p.attributes.lat],
              zoom: 14,
              duration: 1500,
              offset: [0, 100],
              pitch: 70,
              bearing: 0,
              essential: true,
              curve: 0.7,
              easing: function (t) {
                return 1 - Math.pow(1 - t, 5);
              },
            });
          }}
        >
          <MarkerPin />
        </Marker>
      )),
    [allPins]
  );

  const resetCamera = () => {
    setViewState(initialView);
  };

  const closeMapHandler = () => {
    closeMap();
  };

  const drawerHandler = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <div className='w-full h-screen relative'>
      <div className='absolute top-4 right-4 z-[81]'>
        <ListViewButton onClick={drawerHandler} />
        <ResetButton onClick={resetCamera} />
        <CloseButton onClick={closeMapHandler} />
      </div>
      {drawerOpen && (
        <ListViewDrawer
          projects={allPins}
          map={mapRef.current}
          drawerHandler={drawerHandler}
          setPlace={setPlace}
        />
      )}
      <Map
        initialViewState={{
          longitude: -77.0307193335218,
          latitude: 38.87225889119998,
          zoom: 12,
          pitch: 70,
        }}
        {...viewState}
        mapStyle='mapbox://styles/adg-branding/cl47jmywy003p15rmjzucu62i'
        mapboxAccessToken={
          'pk.eyJ1IjoiYWRnLWJyYW5kaW5nIiwiYSI6ImNsM3czZ3IwZDBuaGYzYm8yemcwdWFlMGgifQ.2378CUUNBJppYXdD1c5aHg'
        }
        ref={mapRef}
        onMove={(event) => setViewState(event.viewState)}
        style={{ width: '100%', height: '100%' }}
      >
        <NavigationControl position='bottom-right' />
        {pins}
        {place && (
          <Popup
            anchor='bottom'
            longitude={place.attributes.lng}
            latitude={place.attributes.lat}
            onClose={() => setPlace(null)}
            offset={40}
            focusAfterOpen={false}
            maxWidth='none'
          >
            <PopupContent
              name={place.attributes.name}
              hero={
                place.attributes.hero.data &&
                place.attributes.hero.data.attributes.url
              }
              department={place.attributes.department.data.attributes.name}
              subcategory={
                place.attributes.subcategories.data &&
                place.attributes.subcategories.data
              }
              building_type={
                place.attributes.building_type &&
                place.attributes.building_type.data?.attributes.type
              }
              description={
                place.attributes.description && place.attributes.description
              }
              link={place.attributes.link && place.attributes.link}
            />
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapContainer;
