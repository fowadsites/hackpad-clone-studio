import { Star, Users, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import CTAButtons from "./CTAButtons";

const CommunitySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const teamMembers = ["Arnav Chhajed", "Allen"];

  return (
    <section 
      id="community" 
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Network/Connection Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-40 left-1/3 w-3 h-3 bg-secondary rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/2 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-3 h-3 bg-secondary rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}></div>
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <line x1="25%" y1="20%" x2="33%" y2="40%" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <line x1="33%" y1="40%" x2="50%" y2="60%" stroke="hsl(var(--secondary))" strokeWidth="2"/>
          <line x1="75%" y1="60%" x2="66%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="2"/>
        </svg>
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center pixel-text text-foreground">
          COMMUNITY & SHOWCASE
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          After the hackathon, we'll showcase all projects on YouTube — so your work lives on.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Hall of Fame */}
          <div className="bg-card border-4 border-primary rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-3xl font-bold mb-4 pixel-text text-foreground flex items-center justify-center gap-2">
              HALL OF FAME <Star className="text-secondary" />
            </h3>
            <p className="text-muted-foreground mb-6">
              Top submissions featured and archived on our YouTube channel.{" "}
              <span className="text-primary underline cursor-pointer font-bold">Watch →</span>
            </p>
          </div>

          {/* Connect */}
          <div className="bg-card border-4 border-secondary rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-3xl font-bold mb-6 pixel-text text-foreground">CONNECT</h3>
            <div className="space-y-4">
              <a href="#" className="block text-primary underline text-lg font-bold">
                Discord
              </a>
              <a href="#" className="block text-muted-foreground underline text-lg">
                Email
              </a>
              <a href="#" className="block text-muted-foreground underline text-lg">
                Youtube
              </a>
            </div>
          </div>

          {/* Meet the Team */}
          <div className="bg-card border-4 border-primary rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-3xl font-bold mb-6 pixel-text text-foreground">MEET THE TEAM</h3>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center border-2 border-primary">
                    <User className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground underline">{member}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTAButtons />
      </div>
    </section>
  );
};

export default CommunitySection;
