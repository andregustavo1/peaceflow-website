
const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Entendimento das necessidades do paciente e histórico detalhado."
    },
    {
      number: "02",
      title: "Avaliação Técnica",
      description: "Estudo das condições físicas e mentais para definir o melhor tratamento."
    },
    {
      number: "03",
      title: "Plano de Tratamento",
      description: "Definição de técnicas e métodos personalizados a serem aplicados."
    },
    {
      number: "04",
      title: "Sessões de Tratamento",
      description: "Implementação do plano com acompanhamento contínuo e ajustes quando necessário."
    },
    {
      number: "05",
      title: "Acompanhamento Pós-Tratamento",
      description: "Garantia de resultados duradouros e manutenção da saúde conquistada."
    }
  ];

  return (
    <section id="process" className="section bg-neutral-50 overflow-hidden">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="font-heading font-semibold mb-4">Nosso Processo</h2>
          <p className="text-neutral-700">
            Conheça como funciona o atendimento no Instituto Perucci Lopes
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-16 lg:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center md:gap-8 opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-card">
                    <span className="text-4xl font-heading font-bold text-primary-light">{step.number}</span>
                    <h3 className="text-xl font-medium mt-2 mb-3">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center my-4 md:my-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-medium text-lg">
                    {index + 1}
                  </div>
                </div>
                
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
