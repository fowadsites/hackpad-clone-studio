import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import CTAButtons from "./CTAButtons";

const DetailsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="details" 
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-t from-muted/30 to-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* FAQ/Information Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-28 h-28 border-4 border-primary/10 rounded-lg rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-4 border-secondary/10 rounded-full"></div>
      </div>
      <div className="max-w-4xl w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center pixel-text text-foreground">
          DETAILS
        </h2>

        <div className="bg-card border-4 border-secondary rounded-3xl p-8 mb-12 shadow-lg">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="tools" className="border-none">
              <AccordionTrigger className="text-2xl pixel-text text-foreground hover:no-underline">
                TOOLS & PLATFORMS
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pt-4">
                Use any no-code, low-code, or traditional coding tools. AI tools are allowed - just
                disclose what you use.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="participate" className="border-none">
              <AccordionTrigger className="text-2xl pixel-text text-foreground hover:no-underline">
                WHO CAN PARTICIPATE?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pt-4">
                All students worldwide are welcome! Whether you're a beginner or experienced, there's
                a place for you here.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="submission" className="border-none">
              <AccordionTrigger className="text-2xl pixel-text text-foreground hover:no-underline">
                SUBMISSION REQUIREMENTS
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pt-4">
                Submit your project via Devpost with a demo video, description, and any links to
                your tool or codebase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="judging" className="border-none">
              <AccordionTrigger className="text-2xl pixel-text text-foreground hover:no-underline">
                JUDGING CRITERIA
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pt-4">
                Projects will be judged on innovation, impact, execution, and presentation quality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="conduct" className="border-none">
              <AccordionTrigger className="text-2xl pixel-text text-foreground hover:no-underline">
                CODE OF CONDUCT
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pt-4">
                Be respectful, no plagiarism, no hate speech or harmful content. Parent/guardian
                consent required for minors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="beyond" className="border-none">
              <AccordionTrigger className="text-2xl pixel-text text-foreground hover:no-underline">
                BEYOND THE HACKATHON
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pt-4">
                All projects will be featured on YouTube, creating a lasting showcase of your work.
                Network with mentors and continue building!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <CTAButtons />
      </div>
    </section>
  );
};

export default DetailsSection;
