import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import githubEducationLogo from "@/assets/sponsors/github-education.png";
import aopsLogo from "@/assets/sponsors/aops.png";
import balsamiqLogo from "@/assets/sponsors/balsamiq.png";
import interviewCakeLogo from "@/assets/sponsors/interview-cake.png";

import jukeboxLogo from "@/assets/sponsors/jukebox.png";
import codecraftersLogo from "@/assets/sponsors/codecrafters.png";
import unibeeLogo from "@/assets/sponsors/unibee.png";
import xyzLogo from "@/assets/sponsors/xyz.png";
import givemycertificateLogo from "@/assets/sponsors/givemycertificate.jpg";
import CTAButtons from "./CTAButtons";
const SponsorsSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const sponsors = [{
    name: "GitHub Education",
    logo: githubEducationLogo
  }, {
    name: "AoPS",
    logo: aopsLogo
  }, {
    name: "Balsamiq",
    logo: balsamiqLogo
  }, {
    name: "Interview Cake",
    logo: interviewCakeLogo
  }, {
    name: "Jukebox",
    logo: jukeboxLogo
  }, {
    name: "CodeCrafters",
    logo: codecraftersLogo
  }, {
    name: "UniBee",
    logo: unibeeLogo
  }, {
    name: ".xyz",
    logo: xyzLogo
  }, {
    name: "Givemycertificate",
    logo: givemycertificateLogo
  }];
  return <section id="sponsors" ref={ref} className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-pulse" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>
      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center pixel-text text-foreground">
          SPONSORS
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          Thank you to our amazing partners who make Student Hackpad possible 💜
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {sponsors.map((sponsor, index) => <div key={index} className="bg-card rounded-2xl p-6 flex items-center justify-center aspect-square hover:scale-105 transition-transform shadow-lg border-2 border-border">
              <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain" />
            </div>)}
        </div>

        
      </div>
    </section>;
};
export default SponsorsSection;