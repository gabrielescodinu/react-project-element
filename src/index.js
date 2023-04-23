import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import backgroundImage from './images/background.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero backgroundImage={backgroundImage} text="Questo è il nuovo testo del componente Hero" />
    <About
      title="Lorem Ipsum"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus odit eveniet voluptatum optio quaerat molestiae. Laboriosam, quos consequatur! Odit repudiandae consectetur maxime minus sed fuga earum architecto perspiciatis. Eos!
      Doloremque soluta facilis veniam quae reprehenderit impedit tempora similique distinctio.
      "
      className="bg-gradient-to-r from-template-violet to-template-magenta"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
