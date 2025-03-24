
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
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Target all elements with opacity-0
    document.querySelectorAll('.opacity-0').forEach((el) => {
      observer.observe(el);
    });

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
