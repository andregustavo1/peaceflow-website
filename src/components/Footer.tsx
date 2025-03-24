
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-content">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-neutral-800">
          <div>
            <h3 className="text-xl font-heading font-medium mb-4">Instituto Perucci Lopes</h3>
            <p className="text-neutral-400 mb-6">
              Especialistas em tratamentos para o bem-estar físico e mental.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  <span>Sobre Nós</span>
                </a>
              </li>
              <li>
                <a href="#treatments" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  <span>Tratamentos</span>
                </a>
              </li>
              <li>
                <a href="#process" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  <span>Como Trabalhamos</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  <span>Projetos</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-white transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  <span>Contato</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contato</h4>
            <address className="text-neutral-400 not-italic space-y-3">
              <p>Rua Dr. Paulo Ferraz da Costa Aguiar, 1327<br />Vila Yara – Osasco – SP</p>
              <p>
                <a href="tel:1133704136" className="hover:text-white transition-colors">
                  (11) 3370-4136
                </a>
              </p>
              <p>
                <a href="mailto:contato@peruccilopes.com.br" className="hover:text-white transition-colors">
                  contato@peruccilopes.com.br
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Instituto Perucci Lopes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
