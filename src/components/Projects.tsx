
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Recuperação de Lesão Esportiva",
      description: "Atleta recuperado de lesão no joelho através da combinação de fisioterapia e osteopatia."
    },
    {
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Melhora Postural Significativa",
      description: "Paciente apresentou melhora na postura e alívio de dores crônicas após tratamento combinado."
    },
    {
      image: "https://img.freepik.com/free-photo/side-view-woman-meditating-nature_23-2148940305.jpg?t=st=1742842062~exp=1742845662~hmac=f644b56fbf018d5f1fbdd172b62be095f3c37ad71495d38f464e571035740070&w=1060",
      title: "Redução de Estresse e Ansiedade",
      description: "Técnicas integradas proporcionaram redução de sintomas de estresse e melhora na qualidade de vida."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section bg-white">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="font-heading font-semibold mb-4">Projetos de Sucesso</h2>
          <p className="text-neutral-700">
            Conheça alguns casos de sucesso do Instituto Perucci Lopes
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto opacity-0 animate-scale-in">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-medium mb-4">{project.title}</h3>
                      <p className="text-neutral-700 mb-6">{project.description}</p>
                      <a href="#contact" className="btn-primary">
                        Agende Sua Avaliação
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-soft hover:shadow-lg transition-all"
              aria-label="Projeto anterior"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary scale-125' : 'bg-neutral-200'
                  }`}
                  aria-label={`Ver projeto ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-soft hover:shadow-lg transition-all"
              aria-label="Próximo projeto"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
