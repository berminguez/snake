import React from 'react';
import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import generalbackground from '../public/generalbackground.jpg';
import MobileController from '../components/SnakeGame/MobileController';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div
        className='flex flex-col bg-center min-h-screen relative bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url(${generalbackground.src})`,
        }}
      >
        <Header />

        <Component {...pageProps} />

        <MobileController />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
