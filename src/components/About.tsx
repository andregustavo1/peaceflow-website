
import { Heart, Users, Star, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-neutral-50 overflow-hidden">
      <div className="container-content">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in-up animate-delay-100">
            <h2 className="font-heading font-semibold text-neutral-900 relative pb-4 inline-block">
              Sobre o Instituto Perucci Lopes
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
            </h2>
            
            <p className="text-neutral-700">
              O Instituto Perucci Lopes é especializado em tratamentos físicos e mentais, oferecendo uma ampla gama de técnicas e procedimentos para promover o bem-estar. Nossa missão é aliviar o sofrimento físico e mental dos nossos pacientes, proporcionando resultados duradouros com um atendimento personalizado e acolhedor.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-1">Profissionais capacitados</h3>
                  <p className="text-sm text-neutral-600">Equipe especializada e constantemente atualizada</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-1">Abordagem personalizada</h3>
                  <p className="text-sm text-neutral-600">Tratamentos adaptados às suas necessidades</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-1">Saúde integral</h3>
                  <p className="text-sm text-neutral-600">Foco no corpo e mente como um todo</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-1">Resultados duradouros</h3>
                  <p className="text-sm text-neutral-600">Tratamentos com efeitos a longo prazo</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] opacity-0 animate-fade-in-up animate-delay-200">
            <div className="absolute top-0 right-0 w-full h-full rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Profissional realizando tratamento" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Detalhe de tratamento" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute top-10 -left-10 glass-card p-4 z-10">
              <p className="text-lg font-medium">+1000</p>
              <p className="text-sm text-neutral-600">Pacientes atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
