import { ArrowRight, Lightbulb, FileText, Presentation, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import CTAButtons from "./CTAButtons";
import { Button } from "@/components/ui/button";

const LearnSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const tutorials = [
    {
      number: "1.",
      icon: Lightbulb,
      title: "Turning ideas into tools using only prompts and no-code platforms",
    },
    {
      number: "2.",
      icon: FileText,
      title: "GitHub & Devpost project submission guides",
    },
    {
      number: "3.",
      icon: Presentation,
      title: "Creating impactful pitches and presentations",
    },
    {
      number: "4.",
      icon: Sparkles,
      title: "Finalizing and polishing your project for submission",
    },
  ];

  return (
    <section 
      id="learn" 
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Educational Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-56 h-56 border-8 border-primary/10 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-8 border-secondary/10 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl animate-pulse"></div>
      </div>
      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center pixel-text text-foreground">
          LEARN AS YOU BUILD
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          Comprehensive video tutorials guide you from idea to impact—no matter your experience level.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-card border-4 border-primary rounded-2xl p-8 hover:border-secondary transition-colors group shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary pixel-text">
                    {tutorial.number}
                  </span>
                  <tutorial.icon className="w-8 h-8 text-secondary" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 pixel-text"
                >
                  WATCH <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-muted-foreground text-lg">• {tutorial.title}</p>
            </div>
          ))}
        </div>

        <CTAButtons />
      </div>
    </section>
  );
};

export default LearnSection;
