import Header from "./Header";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0"
        poster="/placeholder.svg?height=1080&width=1920"
      >
        <source
          src="https://videos.pexels.com/video-files/1437396/1437396-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      {/* Navigation */}
      <Header isHomePage={true} />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
          Driving Progress Towards a Circular Economy
        </h1>
        <p className="text-xl md:text-3xl text-white mb-12 leading-relaxed font-light">
          Arcadia is a sustainability hub empowering companies, innovators, and
          communities to co-create circular solutions.
        </p>
        <button className="border-2 border-white bg-transparent hover:bg-white/10 text-white text-xl px-10 py-4 transition-all duration-300 hover:-translate-y-1 rounded-none">
          Join Us
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronDown className="h-12 w-12 text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
