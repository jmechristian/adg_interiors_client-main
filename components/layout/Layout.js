import React from 'react';

import Head from 'next/head';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Interiors | Akseizer Design Group</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='title' content='Interiors | Akseizer Design Group' />
        <meta
          name='description'
          content='Creating heartfelt interiors that inspire and connect.'
        />
        <meta
          name='keywords'
          content='Interiors, interior design, design, 360 Design, historic renovation, renovation, buildings, rowhouses, multi-family, apartments, condos, single-family, commercial building'
        />
        <meta name='robots' content='index, follow' />
        <link rel='stylesheet' href='https://use.typekit.net/uji2lsl.css' />
      </Head>
      <div className='wrapper'>
        <div className='content'>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
