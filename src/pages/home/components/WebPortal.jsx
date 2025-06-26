import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const WebPortal = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  const scrollToSection = ({ ref, name }) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(name);
  };

  // Scroll based on ?scrollTo query
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const target = params.get('scrollTo');

    const refMap = {
      home: homeRef,
      about: aboutRef,
      contact: contactRef,
    };

    if (target && refMap[target]?.current) {
      setTimeout(() => {
        refMap[target].current.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(target);
      }, 100); // wait a bit for DOM render
    }
  }, [location.search]);

  // Track scroll for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = [
      { ref: homeRef, id: 'home' },
      { ref: aboutRef, id: 'about' },
      { ref: contactRef, id: 'contact' },
    ];

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header
        onNavigate={scrollToSection}
        refs={{ homeRef, aboutRef, contactRef }}
        activeSection={activeSection}
        scrollProgress={scrollProgress}
      />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={contactRef}><ContactUs /></div>
      {/* <Footer /> */}
    </div>
  );
};

export default WebPortal;
