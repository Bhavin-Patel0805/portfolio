import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from './components/Skills'
import Contact from "./components/Contact";
import { useTheme } from "./context/ThemeContext";
import Footer from './components/Footer'
import Projects from "./components/Projects";

const App = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={
        darkMode
          ? "bg-black text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
