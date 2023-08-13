import Banner from '@/components/Banner';
import Faq from '@/components/Home/Faq'
import CourseProgram from '@/components/Home/CourseProgram'
import  CourseFees  from '@/components/Home/CourseFees';
import  CourseExpectations  from '@/components/Home/CourseExpectations'
import WhoIsThis from '@/components/WhoIsThis';
import Students from '@/components/Students';
import Aynur from '../../components/Aynur';
import CustomizedAccordions from '@/components/CourseProgram';

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
      {/* <CustomizedAccordions /> */}
    </>
  );
};

export default Home;
