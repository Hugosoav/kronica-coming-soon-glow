import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import ConstructionBadge from "@/components/ConstructionBadge";
import CTACard from "@/components/CTACard";
import Footer from "@/components/Footer";
import kronicaLogo from "@/assets/kronica-logo.png";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <main className="flex-1 flex items-center justify-center px-6 py-12 md:py-16 relative z-10">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Hero */}
          <section className="flex flex-col items-center lg:items-start gap-8">
            <h1 className="sr-only">Kronica</h1>
            <img 
              src={kronicaLogo} 
              alt="Kronica" 
              className="w-56 sm:w-72 md:w-80 lg:w-96 h-auto opacity-0 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            />
            
            <div 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <ConstructionBadge />
            </div>

            <Link to="/sobre" className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                variant="outline" 
                className="border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-foreground/40"
              >
                <Info className="w-4 h-4 mr-2" />
                Sobre + Serviços
              </Button>
            </Link>
          </section>

          {/* Right Side - CTA */}
          <section 
            className="flex justify-center lg:justify-end opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <CTACard />
          </section>
        </div>
      </main>

      <div 
        className="container opacity-0 animate-fade-in"
        style={{ animationDelay: '0.7s' }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Index;