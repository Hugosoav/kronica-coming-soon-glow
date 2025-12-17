import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5528999161275";

const CTACard = () => {
  const handleClick = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="glass-card p-6 md:p-10 w-full max-w-3xl bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.15)]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-col gap-2 md:max-w-sm">
          <h3 className="text-foreground text-lg md:text-xl font-semibold">
            Pronto para transformar sua marca?
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            Entre em contato e vamos conversar sobre o seu projeto.
          </p>
        </div>
        <Button
          variant="cta"
          size="xl"
          onClick={handleClick}
          className="w-full md:w-auto group"
        >
          <span>Quero solicitar um orçamento</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default CTACard;
