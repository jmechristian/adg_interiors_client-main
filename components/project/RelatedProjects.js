import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useInView, motion } from 'framer-motion';
import ProjectItem from '../layout/ProjectItem';
import Container from '../layout/Container';
import InnerContainer from '../layout/InnerContainer';

const RelatedProjects = ({ subCat, projId }) => {
  const relatedRef = useRef();
  const relatedInView = useInView(relatedRef);

  const [relatedproj, setRelatedProj] = useState();

  useEffect(() => {
    if (subCat) {
      const getRelated = async () => {
        const res = await axios.get(
          `https://adg-projects-hs6ir.ondigitalocean.app/api/projects?pagination[limit]=3&filters[department][name][$eq][0]=Commercial Interiors&filters[building_type][type][$contains][1]=${subCat}&filters[id][$gt][2]=${projId}&populate=*`
        );
        const projects = res.data.data;

        if (projects.length < 3) {
          const res = await axios.get(
            `https://adg-projects-hs6ir.ondigitalocean.app/api/projects?pagination[limit]=3&filters[department][name][$eq][0]=Commercial Interiors&filters[building_type][type][$contains][1]=${subCat}&filters[id][$lt][2]=${projId}&populate=*`
          );

          const lessProj = res.data.data;
          setRelatedProj(_.slice(lessProj, [0], [3]));
        } else {
          setRelatedProj(_.slice(projects, [0], [3]));
        }
        console.log(relatedproj);
        console.log(subCat);
      };

      getRelated();
    }
  }, [projId]);

  return (
    <div className='bg-brand-light-gray w-full pt-12 pb-8' ref={relatedRef}>
      <Container>
        <InnerContainer>
          <motion.div
            className='border border-b-gray-800 pb-2 text-gray-800'
            initial={{ width: '0%' }}
            animate={relatedInView && { width: '100%' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          ></motion.div>
          <motion.div
            className='text-4xl mt-4 font-brand-serif'
            initial={{ opacity: 0 }}
            animate={relatedInView && { opacity: 1 }}
            transition={{ delay: 0.5, ease: 'easeInOut' }}
          >
            Related Projects
          </motion.div>
          {relatedproj && (
            <motion.div
              className='w-full grid md:grid-cols-3 gap-6 related-project pt-6'
              initial={{ opacity: 0 }}
              animate={relatedInView && { opacity: 1 }}
              transition={{ delay: 0.5, ease: 'easeInOut' }}
            >
              {relatedproj.map((p, index) => (
                <ProjectItem
                  hero={
                    p.attributes.hero.data
                      ? p.attributes.hero.data.attributes.url
                      : 'https://adg-projects.nyc3.digitaloceanspaces.com/d510c4975f36df4b67a706957c4cf046.png'
                  }
                  name={p.attributes.name}
                  location={p.attributes.location}
                  id={p.id}
                  key={index}
                />
              ))}
            </motion.div>
          )}
        </InnerContainer>
      </Container>
    </div>
  );
};

export default RelatedProjects;
