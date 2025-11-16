import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ThemeSection from "@/components/ThemeSection";
import ScheduleSection from "@/components/ScheduleSection";
import PreviousEditionSection from "@/components/PreviousEditionSection";
import SponsorsSection from "@/components/SponsorsSection";
import SpeakersSection from "@/components/SpeakersSection";
import LearnSection from "@/components/LearnSection";
import RulesSection from "@/components/RulesSection";
import CommunitySection from "@/components/CommunitySection";
import DetailsSection from "@/components/DetailsSection";
import ScrollNavigation from "@/components/ScrollNavigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
const Index = () => {
  return <div className="relative">
      <ParticleBackground />
      <ScrollNavigation />
      <HeroSection />
      <VisionSection />
      <ThemeSection />
      <ScheduleSection />
      <PreviousEditionSection />
      <SponsorsSection />
      <SpeakersSection />
      <LearnSection />
      <RulesSection />
      
      <DetailsSection />
      <Footer />
    </div>;
};
export default Index;