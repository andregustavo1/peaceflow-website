
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-16 animation-trigger">
          <h2 className="font-heading font-semibold mb-4">Entre em Contato</h2>
          <p className="text-neutral-700">
            Estamos prontos para cuidar de você e proporcionar o melhor tratamento
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center animation-trigger flex flex-col items-center" style={{ transitionDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-dark" />
              </div>
              <h3 className="text-lg font-medium mb-2">Telefone</h3>
              <a 
                href="tel:1133704136" 
                className="text-neutral-700 hover:text-primary transition-colors"
              >
                (11) 3370-4136
              </a>
            </div>
            
            <div className="glass-card p-6 text-center animation-trigger flex flex-col items-center" style={{ transitionDelay: '200ms' }}>
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-dark" />
              </div>
              <h3 className="text-lg font-medium mb-2">E-mail</h3>
              <a 
                href="mailto:contato@peruccilopes.com.br" 
                className="text-neutral-700 hover:text-primary transition-colors"
              >
                contato@peruccilopes.com.br
              </a>
            </div>
            
            <div className="glass-card p-6 text-center animation-trigger flex flex-col items-center" style={{ transitionDelay: '300ms' }}>
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-dark" />
              </div>
              <h3 className="text-lg font-medium mb-2">Localização</h3>
              <address className="text-neutral-700 not-italic">
                Rua Dr. Paulo Ferraz da Costa Aguiar, 1327<br />
                Vila Yara – Osasco – SP
              </address>
            </div>
          </div>
          
          <div className="mt-16 rounded-2xl overflow-hidden h-80 shadow-card animation-trigger" style={{ transitionDelay: '400ms' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.978861767105!2d-46.7743275!3d-23.5351675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5548d4f3d5a7%3A0x8e47547fd9f92a4!2sR.%20Dr.%20Paulo%20Ferraz%20da%20Costa%20Aguiar%2C%201327%20-%20Vila%20Yara%2C%20Osasco%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1658265402541!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da localização do Perucci Lopes"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
