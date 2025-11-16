import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import CTAButtons from "./CTAButtons";
import buildathonLogo from "@/assets/buildathon-logo.png";
const HeroSection = () => {
  return <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img src={buildathonLogo} alt="Build-a-thon Logo" className="w-20 h-20" />
        </div>

        {/* Main Title */}
        <h1 className="text-center mb-8">
          <div className="pixel-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground">
            BUILD-A-THON
          </div>
          <div className="pixel-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-2 text-primary">
            2026
          </div>
        </h1>

        {/* Countdown Timer */}
        <div className="mb-8">
          <h3 className="text-center text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 pixel-text">
            Event Starts In:
          </h3>
          <CountdownTimer />
        </div>

        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-2 px-4">
            Idea 2 Impact; no matter the means <span className="text-foreground">→</span>{" "}
            <span className="text-primary font-bold">March 15 - April 5, 2026</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4">
            <span>48 hours</span>
            <span>•</span>
            <span>Virtual</span>
            
            
            
            <span>•</span>
            <span>No/low/all-code</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12">
          <CTAButtons />
        </div>
      </div>
    </section>;
};
export default HeroSection;