import React from 'react'
import HeroSection from './home-components/hero'
import Testimionals from './home-components/testimionals'
import SectionTitle from '../_components/section-title'
import CourseSection from './home-components/courses'
import ProjectsSection from './home-components/projects'
import RecrutingSection from './home-components/recrute'
import TeacherSection from './home-components/teacher'
import StudentPage from './home-components/student'
import PartnersSlider from './home-components/partner'

const HomePage = () => {
  return (
    <div className='max-w-[1313px]   mx-auto pt-30 '>
      <HeroSection />
      <Testimionals />
      <SectionTitle title='Courses' />
      <CourseSection />
      <SectionTitle title='Projects' />
      <ProjectsSection />
      <SectionTitle title='Recruiting' />
      <RecrutingSection />
      <SectionTitle title='Teachers'/>
      <TeacherSection />
      <SectionTitle title='Students' />
      <StudentPage/>
      <SectionTitle title='Colobrating Organizations' />
      <PartnersSlider />
    </div>
  )
}

export default HomePage