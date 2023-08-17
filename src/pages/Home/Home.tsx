import Banner from '@/components//Home/Banner';
import Faq from '@/components//Home/Faq';
import CourseProgram from '@/components/Home/CourseProgram';
import CourseFees from '@/components/Home/CourseFees';
import CourseExpectations from '@/components/Home/CourseExpectations';
import WhoIsThis from '@/components/Home/WhoIsThis';
import Students from '@/components/Home/Students';
import Aynur from '../../components/Home/Aynur';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <WhoIsThis />
      <CourseProgram />
      <CourseExpectations />
      <CourseFees />
      <Aynur />
      <Students />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
