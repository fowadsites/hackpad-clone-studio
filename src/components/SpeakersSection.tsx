import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const SpeakersSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const speakers = Array(6).fill(null);

  return (
    <section 
      id="speakers" 
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Microphone Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/4 w-20 h-20 border-4 border-primary rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-secondary rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 border-4 border-primary rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center pixel-text text-foreground flex items-center justify-center gap-4">
          SPEAKERS, MENTORS & JUDGES 🎤
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          More insane lineup coming soon 🔥
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {speakers.map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-card border-4 border-primary rounded-3xl flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            >
              <User className="w-24 h-24 text-muted-foreground" />
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

export default SpeakersSection;
