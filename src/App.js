import React from 'react'
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';
import aboutimage from './images/frame19.gif';
import aboutimage1 from './images/download.png';
import aboutimage3 from './images/presentation.svg';
import EventRegistration from './Components/EventRegistration';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <Presentation image={aboutimage3}/>
      <EventRegistration image={aboutimage1} title='Power of Young Generation in the Right Hands' button='Be a Part ' / >
      <About  image={aboutimage} title='Happening Now!' button='Join now' / >
      <Contact/>
    </div>
  );
}

export default App;
