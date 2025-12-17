import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5528999161275";

const CTACard = () => {
  const handleClick = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="glass-card p-6 md:p-10 w-full max-w-3xl bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.15)]">
      <Tabs defaultValue="manifesto" className="w-full">
        <TabsList className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] mb-6">
          <TabsTrigger 
            value="manifesto" 
            className="flex-1 data-[state=active]:bg-[rgba(255,255,255,0.12)] data-[state=active]:text-foreground text-muted-foreground"
          >
            Manifesto
          </TabsTrigger>
          <TabsTrigger 
            value="contato" 
            className="flex-1 data-[state=active]:bg-[rgba(255,255,255,0.12)] data-[state=active]:text-foreground text-muted-foreground"
          >
            Contato
          </TabsTrigger>
        </TabsList>

        <TabsContent value="manifesto" className="mt-0">
          <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed text-center">
            <div className="space-y-1">
              <h3 className="text-foreground text-xl md:text-2xl font-semibold">
                Kronica
              </h3>
              <p className="text-muted-foreground/80 text-sm md:text-base italic">
                marcas que contam histórias
              </p>
            </div>
            
            <p>
              A Kronica é um brand studio independente que acredita que marcas vão muito além da estética. Elas são narrativas vivas, construídas no tempo, no detalhe e na coerência.
            </p>
            
            <p>
              Inspirados no conceito de crônica, criamos marcas como quem escreve histórias: com propósito, personalidade e intenção. Aqui, nada é genérico e nada é por acaso. Cada projeto é único, pensado para refletir a essência de quem está por trás da marca e sustentar um posicionamento claro e consistente.
            </p>
            
            <p>
              Trabalhamos de forma próxima, estratégica e autoral, unindo design e branding para construir marcas que fazem sentido, se diferenciam e permanecem.
            </p>
            
            <p>
              A Kronica existe para marcas que entendem que branding é construção contínua, que boas histórias não se contam em um único capítulo, mas se sustentam ao longo do tempo.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="contato" className="mt-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:max-w-sm">
              Agilize seu atendimento, entre em contato com a gente:
            </p>
            <Button
              variant="cta"
              size="xl"
              onClick={handleClick}
              className="w-full md:w-auto group"
            >
              <span>Solicitar um orçamento</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CTACard;
