import React from 'react';
import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import generalbackground from '../public/generalbackground.jpg';

function MyApp({ Component, pageProps }) {
  return (
    <div
      className='flex flex-col bg-center min-h-screen  relative bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url(${generalbackground.src})`,
      }}
    >
      <Header />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
