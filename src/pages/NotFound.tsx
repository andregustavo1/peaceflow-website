
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="h-24 mb-4">
          <div className="relative inline-block">
            <span className="text-8xl font-heading font-bold text-neutral-900">404</span>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
              <span className="text-primary-dark font-bold">?</span>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-heading font-medium text-neutral-900 mb-4">Página não encontrada</h1>
        <p className="text-neutral-700 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Voltar para Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
