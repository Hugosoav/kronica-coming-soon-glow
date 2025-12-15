import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_URL =
  "https://wa.me/5528999161275?text=Ol%C3%A1!%20Quero%20solicitar%20um%20or%C3%A7amento%20com%20a%20Kronica.";

const CTACard = () => {
  const handleClick = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="glass-card p-6 md:p-10 w-full max-w-3xl bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.15)]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:max-w-sm">
          Mas para agilizar seu atendimento, entre em contato com a gente clicando no botão:
        </p>
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
