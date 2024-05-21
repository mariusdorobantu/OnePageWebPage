import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/Nav.tsx';
import About from './components/About.tsx';
import Coding from './components/Coding.tsx';
import Projects from './components/Projects.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <About />
    <Coding />
    <Projects />
  </React.StrictMode>,
)
