const PartnersSection = () => {
  const partners = [
    {
      name: "OASES",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JmMf6kXCLp2J0JRpGrs81AQ8FIMFGk7xTg&s",
      description:
        "A sustainability consulting firm that helps clients with total transformation -- driving complex change, enabling sustainable growth, and driving bottomline impact.",
    },
    {
      name: "eco.AI",
      logo: "https://mms.businesswire.com/media/20240716630123/en/2184460/22/echoai_logo.jpg",
      description:
        "The all-in-one platform for carbon management and climate action—powered by AI. eco.AI simplifies sustainability for organizations by automating carbon tracking, generating ESG reports, and enabling nature-based offsetting— all in one localized, intelligent platform.",
    },
    {
      name: "Ecobloom",
      logo: "https://ecobloom-gdsc-challenge.firebaseapp.com/static/media/logo.43db69f880fbeac1c9f5.png",
      description:
        "Ecobloom is an eco-friendly packaging solution. This sustainable alternative to plastic and paper packaging aims to reduce environmental waste while providing durable and biodegradable packaging for various industries (e-commerce, logistics and retail).",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">
          Innovations and Solutions Exchange
        </h2>
        <p className="text-xl text-center max-w-4xl mx-auto mb-16">
          List of Arcadia's Partnered and Accredited Solutions. Contact us if
          you'd like the opportunity to be included
        </p>

        <div className="space-y-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-8 shadow-md"
            >
              <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="w-48 h-48 object-contain"
                />
              </div>
              <div className="w-full md:w-2/3 lg:w-3/4">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  {partner.name}
                </h3>
                <p className="text-gray-700 text-lg">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-white border-2 border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-50 transition-colors duration-300 rounded-none">
            Get Listed With Arcadia
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
