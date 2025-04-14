"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      title: "Plastic Pathways",
      subtitle: "Leading the Way in Plastic Reuse and Reduction",
      description:
        "This project is focused on addressing the growing plastic pollution crisis by promoting the reduction, reuse, and recycling of plastics. This initiative collaborates with retail companies, e-commerce platforms, and manufacturers to explore innovative packaging alternatives, establish circular systems for plastic recovery, and reduce reliance on single-use plastics.",
      image:
        "https://plasticseurope.org/wp-content/uploads/2021/10/plastic-recycling-facility-scaled.jpg",
      buttonText: "Read the full story",
    },
    {
      title: "TechCycle",
      subtitle: "Closing the Loop on E-Waste",
      description:
        "TechCycle Project is designed to address the complex challenges posed by discarded electronic devices. Through partnerships with technology companies, recyclers, and regulatory bodies, Arcadia works to develop sustainable e-waste management solutions that emphasize recycling, reuse, and responsible disposal.",
      image:
        "https://images.squarespace-cdn.com/content/v1/5b1daec7f93fd44d70cddd9c/1565828886203-OS7SZ5LSNWKL8A140CHS/Supporting+Families.jpg",
      buttonText: "Register now",
    },
    {
      title: "Food Forward",
      subtitle: "From Food Waste to Resource",
      description:
        "Arcadia ’s Food Waste Project aims to minimize food waste at every level of the supply chain—from production to consumption. Through partnerships with businesses, local governments, and non-profits, we promote efficient food waste management practices, including redistributing surplus food to communities in need, creating sustainable business models for food recovery, and supporting innovations in waste-to-energy solutions.",
      image:
        "https://www.re-sources.org/wp-content/uploads/2023/01/YEP-farmers-market-2022_small-4739-1024x728.jpg",
      buttonText: "Know More",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  // Auto advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentEvent = events[currentSlide];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-center mb-5 tracking-tight">
          Flagship Projects
        </h2>
        <p className="text-xl !mb-10 text-center">
          Our flagship projects bring together key stakeholders to address
          pressing waste challenges through collaborative dialogue and
          innovation. By assessing on-the-ground realities and identifying gaps,
          we harness feedback, insights, and our network of experts to develop
          actionable frameworks..
        </p>
        <div className="flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              {currentEvent.title}
            </h2>
            <h3 className="text-xl font-serif font-bold mb-6 text-gray-700">
              {currentEvent.subtitle}
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              {currentEvent.description}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
              {currentEvent.buttonText}
            </button>

            {/* Navigation Controls */}
            <div className="mt-16 flex items-center">
              <div className="flex-grow h-1 bg-gray-200 relative">
                <div
                  className="absolute top-0 left-0 h-1 bg-green-500 transition-all duration-500"
                  style={{
                    width: `${((currentSlide + 1) / events.length) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="ml-4 flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="ml-4 text-sm text-gray-500">
                {currentSlide + 1}/{events.length}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <img
                src={currentEvent.image || "/placeholder.svg"}
                alt={currentEvent.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCarousel;
