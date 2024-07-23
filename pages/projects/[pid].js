import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProject, setProjectImages } from '../../data/projectSlice';
import axios from 'axios';
import Container from '../../components/layout/Container';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectQuote from '../../components/project/ProjectQuote';
import InnerContainer from '../../components/layout/InnerContainer';
import ProjectModernAllInfo from '../../components/project/ProjectModernAllInfo';
import RelatedProjects from '../../components/project/RelatedProjects';
import AboveQuote from '../../components/dynamic/AboveQuote';
import BelowQuote from '../../components/dynamic/BelowQuote';
import ImageModal from '../../components/project/ImageModal';

const Index = ({ project, pid }) => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state) => state.project);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    for (const img of images) {
      dispatch(
        setProjectImages({
          src: img.src,
          id: img.id,
          caption: img.dataset.caption,
        })
      );
    }
  }, []);

  const {
    name,
    location,
    collaborators,
    description,
    hero,
    subcategories,
    project_types,
    building_type,
    size,
    quote,
    quote_attribution,
    above_quote,
    below_text_content,
    hero_caption,
  } = project.attributes;
  const id = pid;

  return (
    <>
      {modalOpen && <ImageModal name={name} />}
      <Container>
        <ProjectHeader
          title={name}
          hero={hero}
          location={location}
          caption={hero_caption ? hero_caption : ''}
        />
        <InnerContainer>
          <ProjectModernAllInfo
            id={id}
            dividers={true}
            description={description}
            collaborators={collaborators}
            size={size}
            subcategory={subcategories.data}
            building_type={building_type}
            project_type={project_types}
          />
        </InnerContainer>
        <AboveQuote content={above_quote} />
        {quote ? (
          <ProjectQuote quote={quote} attribution={quote_attribution} />
        ) : (
          <div className='my-8'></div>
        )}

        <BelowQuote content={below_text_content} />
      </Container>
      <RelatedProjects
        subCat={building_type.data.attributes.type}
        projId={id}
      />
    </>
  );
};

export async function getStaticPaths() {
  const res = await axios.get(
    'https://adg-projects-hs6ir.ondigitalocean.app/api/projects?filters[department][name][$eq]=Commercial Interiors&populate=*'
  );
  const projects = await res.data.data;

  const paths = projects.map((proj) => ({
    params: { pid: `${proj.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { pid } = params;

  const url = 'https://adg-projects-hs6ir.ondigitalocean.app';

  const res = await axios.get(
    `https://adg-projects-hs6ir.ondigitalocean.app/api/projects/${pid}?populate=*`
  );
  const project = res.data.data;

  return {
    props: { project, pid },
  };
}

export default Index;
