const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8">
      <div className="border-t border-border/50 pt-8">
        <p className="text-center text-sm text-muted-foreground/60">
          Copyright © {currentYear} KRONICA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
