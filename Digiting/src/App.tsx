import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Process />
      <About />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;