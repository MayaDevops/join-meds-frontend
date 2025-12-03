import React, { useEffect, useRef, useState } from 'react';
import Home from './Home';
import WhyChoose from './WhyChoose';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import DownloadApp from './DownloadApp';

const WebPortal = () => {
  const homeRef = useRef(null);
  const whyRef = useRef(null);
  const aboutRef = useRef(null);
  const downloadRef = useRef(null);
  const contactRef = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const scrollToSection = ({ ref, name }) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(name);
  };

  // scroll using query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const target = params.get('scrollTo');

    const refMap = {
      home: homeRef,
      why: whyRef,
      about: aboutRef,
      download: downloadRef,
      contact: contactRef
    };

    if (target && refMap[target]?.current) {
      setTimeout(() => {
        refMap[target].current.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(target);
      }, 150);
    }
  }, [location.search]);

  return (
    <div>
      <Header onNavigate={scrollToSection} refs={{ homeRef, whyRef, aboutRef, downloadRef, contactRef }} />
      {/* HOME SECTION */}
      <section ref={homeRef} id="home" className="scroll-mt-24">
        <Home
          onNavigate={scrollToSection}
          refs={{ homeRef, whyRef, aboutRef, downloadRef, contactRef }}
        />
      </section>

      {/* WHY CHOOSE */}
      <section ref={whyRef} id="why" className="scroll-mt-24">
        <WhyChoose />
      </section>

      {/* ABOUT US */}
      <section ref={aboutRef} id="about" className="scroll-mt-24">
        <AboutUs />
      </section>

      <section ref={downloadRef} id="download">
        <DownloadApp />
      </section>


      {/* CONTACT */}
      {/* <section ref={contactRef} id="contact">
        <ContactUs />
      </section> */}
      <section ref={contactRef} id="contact">
        <Footer />
      </section>

    </div>
  );
};

export default WebPortal;
