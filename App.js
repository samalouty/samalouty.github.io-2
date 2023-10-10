import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import Home from './Components/pages/Home';
import Projects from './Components/pages/Projects';
import Education from './Components/pages/Education';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/projects' exact element={ <Projects />}></Route>
        <Route path='/education' exact element={ <Education />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
