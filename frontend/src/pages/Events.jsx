import Header from "../components/Header";
import Footer from "../components/Footer";
import UpcomingEventBanner from "../components/UpcomingEventBanner";
import DeepDiveSection from "../components/DeepDiveSection";
import HackathonsSection from "../components/HackathonsSection";
import { ArrowRight } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Upcycle Workshop",
      subtitle: "CHOPCHOP! Turning Single Used Chopsticks into Art",
      description:
        "Striving for net-zero emissions through comprehensive roadmaps and strategic planning for nationwide fleet decarbonization.",
      image: "/upcycle.png",
      linkText: "Read the full story",
      link: "#",
    },

    {
      title: "Deep Dive Dialogue",
      subtitle: "Towards a Zero Waste Nation",
      description:
        "The region is grappling with a mounting waste crisis, exacerbated by the COVID-19 pandemic.While India, the Philippines, and Cambodia face open dumpsites and trash-lined streets, China, Singapore, and Japan have taken significant strides to combat this issue",
      image: "/deepdive.png",
      linkText: "Read the full story",
      link: "#",
    },
    {
      title: "Deep Dive Dialogue",
      subtitle:
        "Municipal Zero Waste—Holistic Understanding of MSW in the Philippines, Pakistan, and China",
      description:
        "In today's world, the escalating volume of waste production presents a severe threat to our environment and human well-being. Annually, a staggering 11.2 billion pounds of solid waste burden our planet, with decaying organic matter significantly contributing to global greenhouse gas emissions. This crisis is exacerbated by poor waste management, which encompasses issues ranging from air pollution to water and soil contamination, demanding immediate attention.",
      image: "/municipal.png",
      linkText: "Read the full story",
      link: "#",
    },
    {
      title: "Analysis Paper",
      subtitle:
        "Climate adaptation: the $2 trillion market the private sector cannot ignore",
      description:
        "Unlocking the potential of climate finance for both adaptation and mitigation is a conversation we can't afford to miss. In a world grappling with the urgent realities of climate change, this article sheds light on why this balanced approach is essential. ",
      image: "/climate.png",
      linkText: "Read the full story",
      link: "#",
    },
    {
      title: "Build for Tomorrow:",
      subtitle: "Shaping the Future of Construction through Sustainability",
      description:
        "The construction industry is responsible for a significant portion of waste in the Philippines, and the majority of this waste ends up in landfills, polluting our environment and harming public health ",
      image: "/shaping.png",
      linkText: "Read the full story",
      link: "#",
    },
    {
      title: "From Compliance to Circularity",
      subtitle: "Bridging the Gap with EPR for Retail Plastics",
      description:
        "The event addresses the pressing issue of plastic waste in the Philippines, where only 9% of the 2.7 million tons of plastic waste generated annually is recycled. The retail sector significantly contributes to this problem, resulting in an estimated USD 790-890 million in lost material value each year",
      image: "/bridging.png",
      linkText: "Read the full story",
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
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Events Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Events & Collaboration
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Comprehensive events including forums, panel discussions, deep-dive
            dialogues, and hackathons to foster discourse and drive actionable
            sustainability solutions
          </p>
        </div>
      </section>

      {/* Deep Dive Dialogues Section */}
      <DeepDiveSection />

      {/* Hackathons Section */}
      <HackathonsSection />
      <UpcomingEventBanner />
      {/* Events List Section */}
      <section className="py-20 flex-grow bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-5xl font-serif font-bold text-center mb-16">
            Previous Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {events.map((event, index) => {
              const maxWords = 20;
              const words = event.description.split(" ");
              const limitedDescription =
                words.length > maxWords
                  ? words.slice(0, maxWords).join(" ") + "..."
                  : event.description;
              return (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-3/5">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="md:w-2/5">
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-100 mb-2">{event.subtitle}</p>
                    <p className="text-gray-400 mb-3">{limitedDescription}</p>
                    <a
                      href={event.link}
                      className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                    >
                      {event.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
