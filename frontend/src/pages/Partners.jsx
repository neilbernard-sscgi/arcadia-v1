import Header from "../components/Header";
import Footer from "../components/Footer";
import PartnersSection from "../components/PartnersSection";
const Partners = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />

      {/* Partners Section */}
      <PartnersSection />

      <Footer />
    </div>
  );
};

export default Partners;
