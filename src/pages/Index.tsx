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
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 mb-16 md:mb-20">
          <h1 className="sr-only">Kronica</h1>
          <img 
            src={kronicaLogo} 
            alt="Kronica" 
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto opacity-0 animate-fade-in"
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

        {/* CTA Section */}
        <section 
          className="w-full flex justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <CTACard />
        </section>
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