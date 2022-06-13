import React from 'react'
import All_Access from './All_Access';
import Footer from './Footer';
import Hero from './Hero';
import LearnPace from './LearnPace';
import Personal_Tutor from './PersonalTutor';
import Rate from './Rate';
import TakeClass from './TakeClasses';
import Testimonials from './Testimonial';
import Tutors from './Tutors';

export const Home = () => {
  return (
    <div>
    
      <Hero />
      <Tutors />
      <All_Access />
      <LearnPace />
      <Personal_Tutor />
      <Testimonials />
      <Rate />
      <TakeClass />
      <Footer />
    </div>
  )
}


