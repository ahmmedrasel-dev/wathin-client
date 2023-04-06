import React from 'react';
import Features from '../../components/Features/Features';
import Projects from '../../components/Projects/Projects';
import Services from '../../components/services/Services';
import HomeSlider from '../../components/Slider/HomeSlider';
import useTitle from '../../hooks/useTitle';
import Contact from '../Contact/Contact';


const Home = () => {
  useTitle('Home')

  return (
    <main>
      <HomeSlider></HomeSlider>
      <Features></Features>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>
      {/* <Blogs></Blogs> */}
    </main>
  );
};

export default Home;