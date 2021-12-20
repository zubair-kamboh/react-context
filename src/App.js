import React, { createContext, useContext, useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  ThemeProvider,
  NameContext,
  ThemeContext,
  ThemeUpdateContext,
} from './ThemeContext';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

function Home() {
  const dark = ThemeContext();
  const toggleTheme = ThemeUpdateContext();

  console.log(dark);
  const themeStyles = {
    width: '200px',
    height: '200px',
    background: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `30px solid ${dark ? '#fff' : '#333'}`,
  };

  return (
    <>
      <h1>Home Page</h1>

      <div style={themeStyles}>{dark ? ' Dark Theme' : 'White Theme'}</div>
      <br />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <br />
      <br />
      <Link to="/about">About </Link>
      <br />
      <Link to="/contact">Contact </Link>
    </>
  );
}
function About() {
  const name = Name();
  // console.log(name);
  return (
    <>
      <h1>About </h1>
      <h1>{name}</h1>
      <Link to="/">Go back </Link>
    </>
  );
}
function Contact() {
  return (
    <>
      <h1>Contact </h1>
      <Link to="/">Go back </Link>
    </>
  );
}
