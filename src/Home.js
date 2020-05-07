import React from 'react';
import './Home.css';
import Nav from './components/Nav'
import SwipeableTextMobileStepper from './components/Slider'
import Footer from './components/Footer'

function Home() {
  return (
    <div className="Home">
      <>
        <Nav />
        <SwipeableTextMobileStepper />
        <Footer />
      </>
    </div>
  );
}

export default Home;
