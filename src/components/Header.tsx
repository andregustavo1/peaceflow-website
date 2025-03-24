
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'header-scrolled' : 'glass-header'
    }`}>
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-neutral-900 font-heading font-semibold text-xl">
              Perucci Lopes
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-neutral-700 hover:text-primary-dark transition-colors text-sm font-medium">
              Sobre
            </a>
            <a href="#treatments" className="text-neutral-700 hover:text-primary-dark transition-colors text-sm font-medium">
              Tratamentos
            </a>
            <a href="#process" className="text-neutral-700 hover:text-primary-dark transition-colors text-sm font-medium">
              Como Trabalhamos
            </a>
            <a href="#projects" className="text-neutral-700 hover:text-primary-dark transition-colors text-sm font-medium">
              Projetos
            </a>
            <a href="#contact" className="text-neutral-700 hover:text-primary-dark transition-colors text-sm font-medium">
              Contato
            </a>
          </nav>
          
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Agende Sua Sessão
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
