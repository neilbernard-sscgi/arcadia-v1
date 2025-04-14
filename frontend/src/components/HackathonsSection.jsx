const HackathonsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-5dxl font-serif font-bold mb-6">
              HACKATHONS AND CAMPAIGNS
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Arcadia organizes hackathons and campaign-driven events designed
              to bring together innovative minds and passionate advocates to
              solve real-world sustainability challenges. These immersive,
              hands-on sessions invite companies, young leaders, and experts to
              collaborate in developing creative solutions, while raising
              awareness about critical environmental issues.
            </p>
            <p className="text-lg font-medium text-gray-800">
              Innovation Challenges, Sustainability Campaigns, Solution Sprints
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://www.sxsw.com/wp-content/uploads/2019/06/2019-Hackathon-Photo-by-Randy-and-Jackie-Smith.jpg"
              alt="Hackathons and Campaigns"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
