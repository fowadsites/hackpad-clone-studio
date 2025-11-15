import { useState, useEffect } from "react";

const sections = [
  "hero",
  "vision",
  "theme",
  "schedule",
  "previous",
  "sponsors",
  "speakers",
  "learn",
  "rules",
  "community",
  "details",
];

const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4 bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-full p-4 shadow-lg">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-3 h-3 rounded-full transition-all border-2 ${
              activeSection === section
                ? "bg-primary border-primary scale-150 animate-glow-pulse"
                : "bg-transparent border-primary hover:bg-primary/50 hover:scale-125"
            }`}
            aria-label={`Scroll to ${section}`}
          />
        ))}
      </div>
    </nav>
  );
};

export default ScrollNavigation;
