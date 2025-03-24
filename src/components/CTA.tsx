
const CTA = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url("https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-content relative z-10">
        <div className="max-w-3xl mx-auto text-center animation-trigger">
          <h2 className="font-heading font-semibold mb-4">
            Pronto para Melhorar Sua Qualidade de Vida?
          </h2>
          
          <p className="text-lg text-neutral-700 mb-8">
            Agende uma sessão e comece sua transformação para uma vida mais saudável e equilibrada.
          </p>
          
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Agende Sua Sessão
          </a>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-white/0 pointer-events-none"></div>
    </section>
  );
};

export default CTA;
