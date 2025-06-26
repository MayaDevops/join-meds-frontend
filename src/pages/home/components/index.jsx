 
import React, { useRef} from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';

const WebPortal = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // const [activeSection, setActiveSection] = useState('home');
  // const [scrollProgress, setScrollProgress] = useState(0);

  // const scrollToSection = (refObj) => {
  //   refObj.ref.current?.scrollIntoView({ behavior: 'smooth' });
  //   setActiveSection(refObj.name);
  // };

  // Scroll progress calculation
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  //     const scrolled = (scrollTop / docHeight) * 100;
  //     setScrollProgress(scrolled);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Section observer to update active section on scroll
  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.6
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const { id } = entry.target;
  //         setActiveSection(id);
  //       }
  //     });
  //   }, options);

  //   const sections = [
  //     { ref: homeRef, id: 'home' },
  //     { ref: aboutRef, id: 'about' },
  //     { ref: contactRef, id: 'contact' }
  //   ];

  //   sections?.forEach(({ ref, id }) => {
  //     if (ref.current) {
  //       ref.current.id = id;
  //       observer.observe(ref.current);
  //     }
  //   });

  //   return () => observer.disconnect();
  // }, []);

  return (
    <div>
      {/* <Header
        onNavigate={scrollToSection}
        refs={{
          homeRef, aboutRef, contactRef
        }}
        activeSection={activeSection}
        scrollProgress={scrollProgress}
      /> */}
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef} className="mb-8" />
      <div><About /></div>
       <div ref={contactRef} className="mb-6" />
      <div><ContactUs /></div>
      {/* <div><Footer /></div> */}
    </div>
  );
};

export default WebPortal;
