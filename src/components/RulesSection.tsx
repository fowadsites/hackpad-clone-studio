import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import CTAButtons from "./CTAButtons";
const RulesSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const rules = ["Be respectful to all participants and organisers", "No plagiarism - build your own ideas", "AI tools allowed - just disclose what you use", "No hate speech, NSFW, or harmful projects", "Parent/Guardian consent required"];
  return <section id="rules" ref={ref} className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Shield/Security Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-tl from-secondary/10 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border-4 border-primary/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-4 border-secondary/20 rounded-full"></div>
      </div>
      <div className="max-w-4xl w-full relative z-10">
        <div className="bg-card border-4 border-primary rounded-3xl p-12 shadow-lg">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center pixel-text text-foreground">
            RULES & CODE OF CONDUCT
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            We're building something positive. Help keep the event welcoming and safe for everyone.
          </p>

          <div className="space-y-6 mb-8">
            {rules.map((rule, index) => <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground text-lg">{rule}</p>
              </div>)}
          </div>

          <p className="text-center text-muted-foreground text-lg font-semibold">
            Violations result in disqualification.
          </p>
        </div>

        <div className="mt-12">
          
        </div>
      </div>
    </section>;
};
export default RulesSection;