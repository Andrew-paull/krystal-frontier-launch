const AtlasFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
            Atlas Frontier Corp L.L.C – FZ
          </h3>
          <p className="font-body text-primary-foreground/70 mb-6">
            Connecting capital with opportunity through intelligent investment management.
          </p>
          <div className="border-t border-primary-foreground/10 pt-6">
            <p className="font-body text-sm text-primary-foreground/50">
              © {currentYear} Atlas Frontier Corp L.L.C – FZ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AtlasFooter;
