import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const SponsorsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const sponsors = [
    "CodeCrafters.io",
    "Stackup",
    ".xyz",
    "Balsamiq",
    "AoPS",
    "NordVPN",
    "Saily",
    "Incogni",
    "NordProtect",
    "Nexos.ai",
    "NordPass",
  ];

  return (
    <section 
      id="sponsors" 
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted/30 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center pixel-text text-foreground">
          SPONSORS
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          Thank you to our amazing partners who make Student Hackpad possible 💜
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-foreground rounded-2xl p-6 flex items-center justify-center aspect-square hover:scale-105 transition-transform shadow-lg border-2 border-primary"
            >
              <span className="text-background font-bold text-xl text-center">
                {sponsor}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold pixel-text shadow-lg"
          >
            Register
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/10 font-bold pixel-text"
          >
            Discord
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary/10 font-bold pixel-text"
          >
            Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
