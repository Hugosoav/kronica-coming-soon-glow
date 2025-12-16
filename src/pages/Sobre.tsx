import { ArrowLeft, Paintbrush, Layout, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import kronicaLogo from "@/assets/kronica-logo.png";

const services = [
  {
    icon: Paintbrush,
    title: "Construção de Marca",
    description: "Desenvolvemos identidades visuais únicas que comunicam a essência do seu negócio e conectam com seu público-alvo."
  },
  {
    icon: Layout,
    title: "UX/UI Site",
    description: "Criamos experiências digitais intuitivas e interfaces modernas que convertem visitantes em clientes."
  },
  {
    icon: Share2,
    title: "Gestão de Marca nas Redes Sociais",
    description: "Estratégias personalizadas para fortalecer sua presença digital e engajar sua audiência nas principais plataformas."
  }
];

const Sobre = () => {
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
      
      <main className="flex-1 flex flex-col items-center px-6 py-12 relative z-10">
        {/* Back Button */}
        <div className="w-full max-w-4xl mb-8">
          <Link to="/">
            <Button variant="ghost" className="text-foreground/70 hover:text-foreground hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>

        {/* Logo */}
        <img 
          src={kronicaLogo} 
          alt="Kronica" 
          className="w-40 sm:w-48 h-auto mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        />

        {/* Sobre Section */}
        <section 
          className="w-full max-w-4xl mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center">
            Sobre
          </h1>
          <div className="glass-card p-8 md:p-10 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-2xl">
            <p className="text-foreground/80 text-lg leading-relaxed text-center">
              A Kronica é uma agência criativa especializada em transformar ideias em experiências visuais memoráveis. 
              Combinamos estratégia, design e tecnologia para construir marcas que se destacam no mercado digital.
            </p>
          </div>
        </section>

        {/* Serviços Section */}
        <section 
          className="w-full max-w-4xl opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10 text-center">
            Serviços
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="glass-card p-6 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-2xl hover:bg-[rgba(255,255,255,0.12)] transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <service.icon className="w-10 h-10 text-foreground mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sobre;
