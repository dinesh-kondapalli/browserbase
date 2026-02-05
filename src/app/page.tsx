import FeaturesSection from "./sections/features";
import Footer from "./sections/footer";
import HeroSection from "./sections/hero";
import HowItWorksSection from "./sections/howItWorks";
import Navbar from "./sections/navbar";
import SponsorsSection from "./sections/sponsors";
import TweetWallSection from "./sections/tweetWall";
import UseCasesSection from "./sections/useCases";
import "./sections/home.css";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <HeroSection />
        <SponsorsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <TweetWallSection />
      </main>
      <Footer />
    </div>
  );
}
