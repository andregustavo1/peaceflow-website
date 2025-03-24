
import { ArrowRight } from 'lucide-react';

const Treatments = () => {
  const treatments = [
    {
      name: "Drenagem Linfática",
      description: "Melhora a circulação e reduz o inchaço.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Fisioterapia",
      description: "Tratamentos para reabilitação e alívio de dores musculares e articulares.",
      image: "/images/image1.png"
    },
    {
      name: "Osteopatia",
      description: "Terapia manual para melhorar a função corporal.",
      image: "https://img.freepik.com/free-photo/physiotherapist-helping-patient-her-clinic_23-2149115653.jpg?t=st=1742841970~exp=1742845570~hmac=6f1649f57a9ba0cfcaa46fab579811ebd2f5d9f6e13111e95bb04a4270afcda7&w=996"
    },
    {
      name: "Pilates",
      description: "Exercícios para fortalecimento e flexibilidade.",
      image: "/images/image2.png"
    },
    {
      name: "Posturologia",
      description: "Correção de postura e prevenção de dores.",
      image: "https://img.freepik.com/free-photo/young-woman-with-back-problems-doing-physiotherapy-treatment_23-2149115620.jpg?t=st=1742842009~exp=1742845609~hmac=fe86d0a2327a17486de8920ba4a546020126d67a433855716a386ef6da24bda0&w=996"
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
        <div className="text-center max-w-2xl mx-auto mb-16 animation-trigger opacity-0">
          <h2 className="font-heading font-semibold mb-4">Tratamentos Especializados</h2>
          <p className="text-neutral-700">
            Conheça os tratamentos oferecidos pelo Perucci Lopes para melhorar sua saúde física e mental
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className="card group overflow-hidden animation-trigger opacity-0"
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
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
