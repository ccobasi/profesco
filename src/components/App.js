import React from 'react';
import { Routes,Route } from 'react-router-dom';
import '../App.css';
import About   from './About';
import { Course } from './Course';
import { Home } from './Home';
import { Price } from './Price';
import { SignIn } from './SignIn';
import Header from './Header'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/price" element={<Price />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
      

    </div>
  );
}

export default App;
