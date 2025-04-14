import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import KeyComponentsSection from "./components/KeyComponentsSection";
import FeaturedEventsSection from "./components/FeaturedEventsSection";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import WhoWeAre from "./pages/WhoWeAre";
import EventCarousel from "./components/EventCarousel";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import Partners from "./pages/Partners";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <main className="min-h-screen">
                <HeroSection />
                <KeyComponentsSection />
                <EventCarousel />
                <Footer />
              </main>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/mission-and-vision" element={<WhoWeAre />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
