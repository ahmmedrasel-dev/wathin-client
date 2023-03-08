import React from 'react';
import Blogs from '../../components/Blogs/Blogs';
import Features from '../../components/Features/Features';
import Projects from '../../components/Projects/Projects';
import Services from '../../components/services/Services';
import HomeSlider from '../../components/Slider/HomeSlider';
import useTitle from '../../hooks/useTitle';


const Home = () => {
  useTitle('Home')

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