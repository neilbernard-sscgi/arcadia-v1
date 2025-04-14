import Carousel from "../ui/carousel";

const FeaturedEventsSection = () => {
  // Carousel slide data
  const slideData = [
    {
      title: "Collaborative Dialogue and Knowledge Sharinge",
      button: "Know More",
      description:
        "Input for Position Papers and Reports & Participation in Forums and Summits",
      src: "https://plus.unsplash.com/premium_photo-1661769800950-a36da6a69d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Innovation and Solution Development",
      description:
        "Partnering in Hackathons and Campaign-Based Projects & Technology Demonstration and Pilot Projects",
      button: "Know More",
      src: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Supporting and Adopting Practical Solutions",
      button: "Learn More",
      description:
        "Adoption of Best Practices and Frameworks & Participation in the Solutions Fair",
      src: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Advocacy and Policy Engagement",
      button: "Get Tickets",
      description: "Advocating for Policy Change & Public Awareness Campaigns",
      src: "https://plus.unsplash.com/premium_photo-1665990294272-0c0f26cc6574?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Resource and Funding Support",
      button: "Get Tickets",
      description:
        "Funding and Sponsorship Opportunities & Leveraging Expertise",
      src: "https://images.unsplash.com/photo-1561837581-abd854e0ee22?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
