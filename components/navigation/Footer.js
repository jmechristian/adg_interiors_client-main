import React from 'react';
import InnerContainer from '../layout/InnerContainer';
import FooterItem from '../layout/FooterItem';

const Footer = () => {
  return (
    <div className='w-full bg-brand-light-gray pt-8 pb-12 sticky top-0'>
      <InnerContainer>
        <div className='flex flex-col md:flex-row md:justify-evenly mb-8 px-0 md:px-12 lg:px-16'>
          <FooterItem
            heading={'Office'}
            line1={'Akseizer Design Group'}
            line2={'1315 Powhatan St.'}
            line3={'Alexandria, VA 22314'}
          />
          <FooterItem
            heading={'Contact'}
            line1={'Tel: (703) 288-9488'}
            line2={
              <>
                <a href='mailto:Info@DesignADG.com'>
                  Info@DesignADG.com &rarr;
                </a>
              </>
            }
          />
          <FooterItem
            heading={'Social'}
            line1={
              <>
                <a
                  href='https://www.facebook.com/AkseizerDesignGroup/'
                  target='_blank'
                >
                  Facebook &rarr;
                </a>
              </>
            }
            line2={
              <>
                <a href='https://twitter.com/akseizerdesign' target='_blank'>
                  Twitter &rarr;
                </a>
              </>
            }
            line3={
              <>
                <a
                  href='https://www.instagram.com/akseizerdesigngroup/'
                  target='_blank'
                >
                  Instagram &rarr;
                </a>
              </>
            }
          />
        </div>
        <div className='text-gray-800 text-sm md:text-center'>
          ©2022 Akseizer Design Group, LLC
        </div>
      </InnerContainer>
    </div>
  );
};

export default Footer;
