import ConstructionBadge from "@/components/ConstructionBadge";
import CTACard from "@/components/CTACard";
import Footer from "@/components/Footer";
import BackgroundWaves from "@/components/BackgroundWaves";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <BackgroundWaves />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 mb-16 md:mb-20">
          <h1 
            className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight-custom text-foreground opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            KRONICA
          </h1>
          
          <div 
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <ConstructionBadge />
          </div>
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
