import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar/>
      <section id="home">
      <Home/>
      </section> 
      <section id="about">
      <About/>
      </section>
      <section id="skills">
      <Skills/>
      </section>
      <section id="contact">
            <Contact/>
      </section>

 
    </div>
  );
}

export default App;
