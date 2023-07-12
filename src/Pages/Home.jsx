import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import { HeroSection } from '../Components/HeroSection/HeroSection';
import Main from '../Components/Main/Main';
import Footer from '../Components/Footer/Footer';

export const Home = () => {
  return (
    <>
      <div className="wrapper">
        <Navigation />
        <HeroSection />
        <Main />
        <Footer />
      </div>
    </>
  );
};
