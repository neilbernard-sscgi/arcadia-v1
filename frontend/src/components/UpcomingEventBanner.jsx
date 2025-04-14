const UpcomingEventBanner = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase">
            Coming Soon
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif uppercase">
            Weekly Impact Mixer
          </h3>
        </div>

        <div className="max-w-5xl mx-auto">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upcoming-60BjHPttLcNHHiOssi30Cq9ZRII8TE.png"
            alt="Weekly Impact Mixer"
            className="w-full h-auto shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventBanner;
