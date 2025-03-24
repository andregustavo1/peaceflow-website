
import { ArrowRight } from 'lucide-react';

const Treatments = () => {
  const treatments = [
    {
      name: "Acupuntura",
      description: "Técnica tradicional chinesa para alívio da dor e estresse.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Drenagem Linfática",
      description: "Melhora a circulação e reduz o inchaço.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Fisioterapia",
      description: "Tratamentos para reabilitação e alívio de dores musculares e articulares.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Osteopatia",
      description: "Terapia manual para melhorar a função corporal.",
      image: "https://images.unsplash.com/photo-1573811018435-b5f8712657ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Pilates",
      description: "Exercícios para fortalecimento e flexibilidade.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Posturologia",
      description: "Correção de postura e prevenção de dores.",
      image: "https://images.unsplash.com/photo-1616279969856-759f559ada6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Treinamento Funcional",
      description: "Exercícios personalizados para melhorar a performance e qualidade de vida.",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
  ];

  return (
    <section id="treatments" className="section bg-neutral-50">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="font-heading font-semibold mb-4">Tratamentos Especializados</h2>
          <p className="text-neutral-700">
            Conheça os tratamentos oferecidos pelo Instituto Perucci Lopes para melhorar sua saúde física e mental
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className="card group overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={treatment.image} 
                  alt={treatment.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{treatment.name}</h3>
                <p className="text-neutral-600 mb-4">{treatment.description}</p>
                <a href="#contact" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
                  <span className="mr-2">Saiba mais</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
