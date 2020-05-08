import React from 'react';
import './_home.scss';
import Nav from './components/Nav'
import Slider from './components/Slider'
import Footer from './components/Footer'

function Home() {
  return (
    <div className="Home">
      <>
        <Nav />
        <Slider />
        <Footer />
      </>
    </div>
  );
}

export default Home;
