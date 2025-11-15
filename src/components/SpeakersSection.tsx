import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import judge1 from "@/assets/judges/judge1.jpg";
import judge2 from "@/assets/judges/judge2.jpg";
import judge3 from "@/assets/judges/judge3.jpg";
import judge4 from "@/assets/judges/judge4.jpg";
import judge5 from "@/assets/judges/judge5.jpg";
import judge6 from "@/assets/judges/judge6.jpg";
import judge7 from "@/assets/judges/judge7.jpg";

const SpeakersSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const judges = [
    { image: judge1, name: "Judge 1" },
    { image: judge2, name: "Judge 2" },
    { image: judge3, name: "Judge 3" },
    { image: judge4, name: "Judge 4" },
    { image: judge5, name: "Judge 5" },
    { image: judge6, name: "Judge 6" },
    { image: judge7, name: "Judge 7" },
  ];

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {judges.map((judge, index) => (
            <div
              key={index}
              className="aspect-square bg-card border-4 border-primary rounded-3xl overflow-hidden hover:scale-105 transition-transform shadow-lg"
            >
              <img 
                src={judge.image} 
                alt={judge.name}
                className="w-full h-full object-cover"
              />
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
