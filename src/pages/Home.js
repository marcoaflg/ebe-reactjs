import React from 'react';
import '../styles/_home.scss';
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
// import Card from './components/Card'

function Home() {
  return (
    <div className="Home">
      <Nav />
      <Slider />
      <Footer />
    </div>
  );
}

export default Home;
