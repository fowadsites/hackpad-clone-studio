import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const VisionSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="vision" 
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 border-4 border-primary/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-secondary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <div className="max-w-4xl w-full text-center relative z-10">
        <h2 className="text-6xl md:text-7xl font-bold mb-12 pixel-text text-foreground">
          VISION
        </h2>
        <p className="text-2xl md:text-3xl leading-relaxed mb-12 text-primary pixel-text font-bold">
          FOR MANY PARTICIPANTS, THIS WILL BE THEIR FIRST TIME BUILDING SOMETHING REAL. AND THAT'S
          EXACTLY THE POINT. WE WANT YOUR FIRST INNOVATIVE EXPERIENCE TO BE THE BEST ONE 💙!
          EVEN IF YOU'RE A SEASONED BUILDER, THERE'S LITERALLY NOTHING TO LOSE AND A LOT TO WIN!
        </p>
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

export default VisionSection;
