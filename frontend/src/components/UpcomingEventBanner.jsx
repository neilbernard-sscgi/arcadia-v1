const UpcomingEventBanner = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-5xl font-serif font-bold uppercase mb-10">
            Upcoming Events
          </h2>
        </div>

        <div className="max-w-5xl mx-auto text-center mb-15">
          <img
            src="/pathway.png"
            alt="Weekly Impact Mixer"
            className="w-full h-auto shadow-xl"
          />
          {/* <h3 className="text-2xl md:text-3xl font-serif uppercase mb-4">
            Weekly Impact Mixer
          </h3> */}
        </div>
        <div className="max-w-5xl mx-auto text-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upcoming-60BjHPttLcNHHiOssi30Cq9ZRII8TE.png"
            alt="Weekly Impact Mixer"
            className="w-full h-auto shadow-xl"
          />
          {/* <h3 className="text-2xl md:text-3xl font-serif uppercase mb-4">
            Weekly Impact Mixer
          </h3> */}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventBanner;
