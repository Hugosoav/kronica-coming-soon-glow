const BackgroundWaves = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Subtle wave 1 */}
      <div 
        className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] opacity-[0.03]"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, hsl(0 0% 30%), transparent)`,
          transform: 'rotate(-12deg)',
        }}
      />
      
      {/* Subtle wave 2 */}
      <div 
        className="absolute -bottom-1/4 -right-1/4 w-[120%] h-[100%] opacity-[0.02]"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 70% 60%, hsl(0 0% 40%), transparent)`,
          transform: 'rotate(8deg)',
        }}
      />
      
      {/* Subtle center glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] opacity-[0.015]"
        style={{
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, hsl(0 0% 50%), transparent)`,
        }}
      />
    </div>
  );
};

export default BackgroundWaves;
