import { Button } from "@/components/ui/button";
import { Trophy, DollarSign, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PreviousEditionSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    {
      icon: DollarSign,
      value: "$19,500+",
      label: "In Sponsors",
      color: "text-primary",
    },
    {
      icon: Users,
      value: "252",
      label: "Attendees",
      color: "text-secondary",
    },
    {
      icon: Trophy,
      value: "3",
      label: "Major Companies",
      color: "text-primary",
    },
  ];

  const judges = [
    { company: "AMD", icon: Award },
    { company: "Tesla", icon: Award },
    { company: "Google", icon: Award },
  ];

  return (
    <section 
      id="previous" 
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 pixel-text text-foreground">
            PREVIOUS EDITION 🎯
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Our first Build-a-thon was a massive success!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border-4 border-primary rounded-3xl p-10 shadow-lg hover:scale-105 transition-transform animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <stat.icon className={`w-16 h-16 mb-4 ${stat.color}`} />
                <h3 className="text-5xl font-bold mb-2 pixel-text text-foreground">
                  {stat.value}
                </h3>
                <p className="text-xl text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Judges Section */}
        <div className="bg-card border-4 border-secondary rounded-3xl p-10 shadow-lg mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center pixel-text text-foreground flex items-center justify-center gap-3">
            <Award className="text-secondary" />
            JUDGES FROM TOP COMPANIES
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {judges.map((judge, index) => (
              <div
                key={index}
                className="bg-foreground rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-lg"
              >
                <judge.icon className="w-12 h-12 text-background mb-4" />
                <span className="text-background font-bold text-2xl pixel-text">
                  {judge.company}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-primary pixel-text font-bold mb-8">
            JOIN US FOR AN EVEN BIGGER EVENT IN 2026! 🚀
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
      </div>
    </section>
  );
};

export default PreviousEditionSection;
