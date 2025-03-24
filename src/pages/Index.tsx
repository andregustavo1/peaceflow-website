
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Treatments from '../components/Treatments';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set up intersection observer for animation triggers
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When element comes into view, add animation classes
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('animate-visible');
          
          // Optional: For staggered animations on child elements
          const animatedChildren = entry.target.querySelectorAll('.animate-child');
          animatedChildren.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-visible');
            }, index * 150); // Staggered delay
          });
          
          // Once animated, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Target all elements with animation-trigger class
    document.querySelectorAll('.animation-trigger').forEach((el) => {
      observer.observe(el);
    });

    // Clean up
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Treatments />
        <Process />
        <Projects />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
