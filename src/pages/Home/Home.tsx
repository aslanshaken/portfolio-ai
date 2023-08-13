import React from 'react';
import Banner from '@/components/Banner';
import WhoIsThis from '@/components/WhoIsThis';
import Students from '@/components/Students';
import Aynur from '../../components/Aynur';
import CustomizedAccordions from '@/components/CourseProgram';

const Home = () => {
  return (
    <>
      <Banner />
      <WhoIsThis />
      <Students />
      <Aynur />
      <CustomizedAccordions />
    </>
  );
};

export default Home;
