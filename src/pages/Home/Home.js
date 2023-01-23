import React from 'react';
import ScrollToTop from 'react-scroll-up';
import Features from '../../components/Features/Features';
import Projects from '../../components/Projects/Projects';
import Services from '../../components/services/Services';
import HomeSlider from '../../components/Slider/HomeSlider';

const Home = () => {
  return (
    <div className=''>
      <HomeSlider></HomeSlider>
      <Features></Features>
      <ScrollToTop showUnder={160} duration={1000}>
        <span className="bg-primary p-4 text-white rounded-md">Top</span>
      </ScrollToTop>
      <Services></Services>
      <Projects></Projects>
    </div>
  );
};

export default Home;