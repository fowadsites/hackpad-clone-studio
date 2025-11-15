import { Calendar, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import CTAButtons from "./CTAButtons";
const ScheduleSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const events = [{
    title: "Week 1",
    subtitle: "March 15-21"
  }, {
    title: "Week 2",
    subtitle: "March 22-28"
  }, {
    title: "Week 3",
    subtitle: "March 29 - April 4"
  }, {
    title: "Finals",
    subtitle: "April 5"
  }];
  return <section id="schedule" ref={ref} className={`min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Calendar Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-56 h-56 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-primary/5 rounded-full"></div>
      </div>
      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center pixel-text text-foreground">
          SCHEDULE
        </h2>

        <p className="text-center text-2xl text-primary pixel-text mb-12 font-bold">
          DETAILED SCHEDULE TO BE ANNOUNCED SOON 🗓️
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {events.map((event, index) => <div key={index} className="bg-card border-4 border-primary rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform">
              <div className="flex flex-col items-center justify-center h-full">
                <Calendar className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2 pixel-text text-foreground text-center">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-center">{event.subtitle}</p>
              </div>
            </div>)}
        </div>

        <p className="text-center text-muted-foreground text-lg mb-8">
          Stay tuned for the full schedule with workshops, speaker sessions, and deadlines!
        </p>

        
      </div>
    </section>;
};
export default ScheduleSection;