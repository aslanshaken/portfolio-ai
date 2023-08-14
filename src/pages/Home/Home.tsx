import Banner from '@/components/Banner';
import Faq from '@/components/Faq'
import CourseProgram from '@/components/CourseProgram'
import  CourseFees  from '@/components/CourseFees';
import  CourseExpectations  from '@/components/CourseExpectations'
import WhoIsThis from '@/components/WhoIsThis';
import Students from '@/components/Students';
import Aynur from '../../components/Aynur';

const Home = () => {
  return (
    <>
  <Banner />
  <WhoIsThis />
  <CourseProgram/>
  <CourseExpectations/>
  <CourseFees/>
  <Aynur />
  <Students />
  <Faq/>
    </>
  );
};

export default Home;
