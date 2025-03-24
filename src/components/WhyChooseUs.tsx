
import { Award, Heart, User, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Especialização em Diversas Técnicas",
      description: "Oferecemos fisioterapia, Pilates, entre outros tratamentos especializados."
    },
    {
      icon: <User className="w-8 h-8 text-primary" />,
      title: "Atenção Individualizada",
      description: "Cada paciente recebe um atendimento exclusivo, de acordo com suas necessidades específicas."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Resultados Eficazes",
      description: "Tratamentos focados na melhoria contínua da qualidade de vida e bem-estar do paciente."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Ambiente Aconchegante e Seguro",
      description: "Espaço planejado para o seu conforto e segurança durante todos os tratamentos."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto mb-16 animation-trigger">
          <h2 className="font-heading font-semibold mb-4">Por Que Nos Escolher?</h2>
          <p className="text-neutral-700 text-lg">
            Tratamentos Personalizados para Seu Bem-Estar Físico e Mental
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:translate-y-[-5px] transition-all duration-300 animation-trigger"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-medium mb-3">{card.title}</h3>
              <p className="text-neutral-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
