import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />

      {/* Contact Form Section */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default ContactUs;
