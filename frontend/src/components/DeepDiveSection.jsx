const DeepDiveSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 items-stretch">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-5xl font-serif font-bold mb-6">
              DEEP DIVE DIALOGUES
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our Deep Dive Dialogue sessions are structured discussions
              designed to bring together stakeholders and experts to share
              experiences on the challenges and opportunities in sustainability.
              The sessions will be focused on sharing on-the-ground challenges,
              case studies, good and bad practices, as well as solutions,
              technologies, and best practices adopted by other countries.
            </p>
            <p className="text-lg font-medium text-gray-800 font-bold">
              Forums, Panel Discussions, Fireside Chats, Summits
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Deep Dive Dialogues"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepDiveSection;
