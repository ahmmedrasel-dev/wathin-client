import React from 'react';
import Blogs from '../../components/Blogs/Blogs';
import Features from '../../components/Features/Features';
import Projects from '../../components/Projects/Projects';
import Services from '../../components/services/Services';
import HomeSlider from '../../components/Slider/HomeSlider';


const Home = () => {
  return (
    <main>
      <HomeSlider></HomeSlider>
      <Features></Features>
      <Services></Services>
      <Projects></Projects>
      <Blogs></Blogs>
    </main>
  );
};

export default Home;