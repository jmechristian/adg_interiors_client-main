import React from 'react';
import LandingHero from './LandingHero';
import ProjectFilter from '../projectFilter/ProjectFilter';
import Container from '../layout/Container';
import MapContainer from '../map/MapContainer';
import MobileMenu from '../navigation/MobileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setMapClose } from '../../data/projectSlice';
import 'mapbox-gl/dist/mapbox-gl.css';

const Landing = () => {
  const dispatch = useDispatch();
  const { mapOpen, mapPins, mobileMenuOpen } = useSelector(
    (state) => state.project
  );
  return (
    <>
      {mapOpen && (
        <div className='fixed top-0 left-0 z-[80] w-full h-screen bg-white'>
          <MapContainer
            allPins={mapPins}
            closeMap={() => dispatch(setMapClose())}
          />
        </div>
      )}
      <MobileMenu />
      <Container>
        <LandingHero />
        <ProjectFilter />
      </Container>
    </>
  );
};

export default Landing;
