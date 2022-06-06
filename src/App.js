
import './App.css';
import AllAccess from './components/AllAccess';
import Footer from './components/Footer';
import Header from './components/Header'
import Hero from './components/Hero';
import LearnPace from './components/LearnPace';
import PersonalTutor from './components/PersonalTutor';
import Rate from './components/Rate';
import TakeClass from './components/TakeClasses';
import Testimonials from './components/Testimonial';
import Tutors from './components/Tutors';

function App() {
  return (
    <div>

      <Header />
      <Hero />
      <Tutors />
      <AllAccess />
      <PersonalTutor />
      <LearnPace />
      <Rate />
      <Testimonials />
      <TakeClass />
      <Footer />

    </div>
  );
}

export default App;
