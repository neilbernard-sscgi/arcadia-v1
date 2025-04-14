import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import PartnersSection from "../components/PartnersSection";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Our Mission
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              At Arcadia, we are committed to driving progress towards a
              circular economy by empowering companies, innovators, and
              communities to co-create sustainable solutions.
            </p>
            <p className="text-xl mb-8 leading-relaxed">
              We believe that sustainability is not just a goal but a journey
              that requires collaboration, innovation, and a shared commitment
              to creating a better future for our planet.
            </p>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4">Innovation</h3>
              <p className="text-gray-700">
                We foster innovative solutions that address environmental
                challenges while creating economic opportunities.
              </p>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Collaboration
              </h3>
              <p className="text-gray-700">
                We connect stakeholders across sectors to co-create solutions
                for a more sustainable future.
              </p>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Knowledge Sharing
              </h3>
              <p className="text-gray-700">
                We provide resources and platforms for sharing best practices
                and insights on circular economy.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}

      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">
            Our Team
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-bold">Jane Doe</h3>
              <p className="text-emerald-600">Founder & CEO</p>
            </div>

            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-bold">John Smith</h3>
              <p className="text-emerald-600">Chief Sustainability Officer</p>
            </div>

            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-bold">Emily Johnson</h3>
              <p className="text-emerald-600">Head of Research</p>
            </div>

            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-bold">Michael Chen</h3>
              <p className="text-emerald-600">Community Manager</p>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default WhoWeAre;
