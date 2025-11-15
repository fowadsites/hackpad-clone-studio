import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import CTAButtons from "./CTAButtons";

const ThemeSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="theme" 
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 border-8 border-primary/30 rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-8 border-secondary/30 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-36 border-8 border-primary/20 rotate-45"></div>
      </div>
      <div className="max-w-4xl w-full text-center relative z-10">
        <h2 className="text-6xl md:text-7xl font-bold mb-12 pixel-text text-foreground">
          THEME
        </h2>
        <p className="text-2xl md:text-3xl leading-relaxed mb-12 text-primary pixel-text font-bold">
          MAKE TOOLS THAT HELP ___; MORE SPECIFICS BEFORE HACKING STARTS 🤫!
        </p>
        <CTAButtons />
      </div>
    </section>
  );
};

export default ThemeSection;
