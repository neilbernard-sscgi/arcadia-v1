import Carousel from "../ui/carousel";

const FeaturedEventsSection = () => {
  // Carousel slide data
  const slideData = [
    {
      title: "Collaborative Dialogue and Knowledge Sharinge",
      button: "Know More",
      description:
        "Input for Position Papers and Reports & Participation in Forums and Summits",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Innovation and Solution Development",
      description:
        "Partnering in Hackathons and Campaign-Based Projects & Technology Demonstration and Pilot Projects",
      button: "Know More",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Supporting and Adopting Practical Solutions",
      button: "Learn More",
      description:
        "Adoption of Best Practices and Frameworks & Participation in the Solutions Fair",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Advocacy and Policy Engagement",
      button: "Get Tickets",
      description: "Advocating for Policy Change & Public Awareness Campaigns",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Resource and Funding Support",
      button: "Get Tickets",
      description:
        "Funding and Sponsorship Opportunities & Leveraging Expertise",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-8 tracking-tight">
          How To Get Involved
        </h2>

        <div className="relative overflow-hidden w-full h-full py-13">
          <Carousel slides={slideData} autoAdvance={true} startIndex={1} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsSection;
