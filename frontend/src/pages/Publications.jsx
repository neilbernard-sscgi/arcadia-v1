import Header from "../components/Header";
import Footer from "../components/Footer";
import UpcomingEventBanner from "../components/UpcomingEventBanner";
import { ArrowRight } from "lucide-react";

const Publications = () => {
  const caseStudies = [
    {
      title: "Market Analysis",
      description:
        "Arcadia conducts in-depth market analysis to provide businesses with a comprehensive understanding of the sustainability landscape. These analyses explore trends, opportunities, challenges, and key drivers in the transition to a circular economy",
      image:
        "https://plus.unsplash.com/premium_photo-1661310049066-57565d639aba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Position Papers",
      description:
        "Arcadia develops position papers that outline informed perspectives on critical sustainability issues. These papers offer a deep dive into industry challenges, policy recommendations, and strategic actions that stakeholders should adopt to drive systemic change",
      image:
        "https://plus.unsplash.com/premium_photo-1661573111481-da21c4137d0b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Waste Reports / Manifestos",
      description:
        "Our waste reports provide detailed assessments of current waste management practices, with a focus on gaps, inefficiencies, and opportunities for improvement",
      image:
        "https://plus.unsplash.com/premium_photo-1661431121792-81fa2b971d0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1609619385076-36a873425636?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Publications Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Your Knowledge Hub!
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Explore our latest research, case studies, and insights on
            sustainability and circular economy.
          </p>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Unlock the power of Sustainability
          </h2>

          <div className="max-w-5xl mx-auto">
            <p className="text-xl mb-12 text-center">
              Our research helps organizations transform faster, innovate
              smarter, and anticipate the future, unlocking the power of
              sustainability to reinvent themselves from the ground up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-none overflow-hidden"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={`Case Study ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-4">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    {study.description}
                  </p>
                  <a
                    href={study.link}
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <a
              href="#"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-lg"
            >
              Learn more about our research{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Event Banner */}
      <UpcomingEventBanner />

      <Footer />
    </div>
  );
};

export default Publications;
