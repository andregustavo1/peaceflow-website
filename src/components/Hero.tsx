
const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-light text-primary-dark text-sm font-medium mb-6  ">
            Bem-estar Físico e Mental
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6  ">
            Melhore Seu Bem-Estar Físico e Mental
          </h1>
          
          <p className="text-lg sm:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto  ">
            Tratamentos Eficazes com Técnicas Especializadas para renovar seu corpo e mente.
          </p>
          
          <div className=" ">
            <a href="#contact" className="btn-primary text-base">
              Agende Sua Sessão
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/40 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
