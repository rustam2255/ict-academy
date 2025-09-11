import React from 'react'
import HeroSection from './home-components/hero'
import Testimionals from './home-components/testimionals'
import SectionTitle from '../_components/section-title'
import CourseSection from './home-components/courses'
import ProjectsSection from './home-components/projects'
import TeacherSection from './home-components/teacher'
import StudentPage from './home-components/student'
import PartnersSlider from './home-components/partner'
import ContactSection from './home-components/contact'
import NewsSection from './home-components/news'

const HomePage = () => {
  return (
    <div className='max-w-[90%]   mx-auto mt-5 '>
      <HeroSection />
      <Testimionals />
      <SectionTitle title='News' />
      <NewsSection />
      <SectionTitle title='Courses' />
      <CourseSection />
      <SectionTitle title='Projects' />
      <ProjectsSection />
      {/* <SectionTitle title='Recruiting' />
      <RecrutingSection /> */}
      <SectionTitle title='Teachers'/>
      <TeacherSection />
      <SectionTitle title='Students' />
      <StudentPage/>
      <SectionTitle title='Colobrating Organizations' />
      <PartnersSlider />
      <ContactSection />
    </div>
  )
}

export default HomePage