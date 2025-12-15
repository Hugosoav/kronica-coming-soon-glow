import { Circle } from "lucide-react";

const ConstructionBadge = () => {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border border-border">
      <Circle className="w-3 h-3 text-foreground animate-pulse-subtle" />
      <span className="text-sm font-medium text-muted-foreground">
        Site em construção.
      </span>
    </div>
  );
};

export default ConstructionBadge;
