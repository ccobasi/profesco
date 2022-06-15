import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import About   from './components/About';
import { Course } from './components/Course';
import { Home } from './components/Home';
import { Price } from './components/Price';
import SignIn from './components/SignIn';
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/price" element={<Price />} />
          <Route path="/signin" element={<SignIn />} />
        
      </Routes>
      

    </div>
  );
}

export default App;
