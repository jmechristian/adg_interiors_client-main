import { useEffect } from 'react';
import axios from 'axios';
import Landing from '../components/home/Landing';
import { useDispatch } from 'react-redux';
import { setAllprojects } from '../data/filterSlice';
import { setMapPins } from '../data/projectSlice';

export default function Home({ allProjects, mapPins }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllprojects(allProjects));
    dispatch(setMapPins(mapPins));
  }, []);

  return (
    <>
      <Landing />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    'https://adg-projects-hs6ir.ondigitalocean.app/api/projects?filters[department][name][$eq]=Commercial Interiors&fields[0]=name&fields[1]=location&fields[2]=grid_order&populate[0]=hero&populate[1]=building_type'
  );

  const allProjects = res.data.data;

  const map = await axios.get(
    'https://adg-projects-hs6ir.ondigitalocean.app/api/projects?filters[department][name][$eq]=Commercial Interiors&populate=*'
  );

  const mapPins = map.data.data;

  return {
    props: {
      allProjects,
      mapPins,
    },
  };
}
