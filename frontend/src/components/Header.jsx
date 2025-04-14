"use client";

import { useState, useEffect } from "react";
import { Menu, ChevronRight, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = ({ isHomePage = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isHomePage
    ? "absolute top-0 left-0 w-full z-20 px-6 py-4"
    : `fixed top-0 left-0 w-full z-20 px-6 py-4 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      } transition-all duration-300`;

  const textColor = isHomePage && !scrolled ? "text-white" : "text-gray-800";

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <header className={headerClass}>
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/"
          className={`text-3xl font-serif font-bold ${textColor} tracking-tight`}
        >
          Arcadia
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          <div className="relative group">
            <button
              className={`${textColor} text-lg font-serif relative flex items-center`}
            >
              Who We Are
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <ChevronRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-none shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
              <div className="py-1">
                <a
                  href="/mission-and-vision"
                  className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                >
                  Mission & Vision
                </a>
                <a
                  href="/contact-us"
                  className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="/partners"
                  className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                >
                  Partners
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link
              to="/events"
              className={`${textColor} text-lg font-serif relative flex items-center`}
            >
              Events
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <ChevronRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Link>
          </div>

          <div className="relative group">
            <a
              href="/publications"
              className={`${textColor} text-lg font-serif relative flex items-center`}
            >
              Publications
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <ChevronRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>

          {isAuthenticated ? (
            <div className="relative group">
              <a
                href="/dashboard"
                className={`${textColor} text-lg font-serif relative flex items-center`}
              >
                Dashboard
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                <ChevronRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-none shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                <div className="py-1">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <a
                href="/login"
                className={`${textColor} text-lg font-serif relative flex items-center`}
              >
                Log In
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-none shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                <div className="py-1">
                  <span className="block px-4 py-2 text-gray-600 text-sm">
                    Admin Only
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-8 w-8" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-30">
          <div className="flex flex-col">
            <div className="py-3 px-6 border-b border-gray-200">
              <span className="font-serif font-bold text-lg">Who We Are</span>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <a
                  href="/who-we-are"
                  className="text-gray-800 hover:text-emerald-600"
                >
                  Our Mission
                </a>
                <a href="#" className="text-gray-800 hover:text-emerald-600">
                  Team
                </a>
                <a href="#" className="text-gray-800 hover:text-emerald-600">
                  Partners
                </a>
              </div>
            </div>
            <a
              href="/events"
              className="py-3 px-6 border-b border-gray-200 font-serif text-lg"
            >
              Events
            </a>
            <a
              href="/publications"
              className="py-3 px-6 border-b border-gray-200 font-serif text-lg"
            >
              Publications
            </a>
            {isAuthenticated ? (
              <>
                <a
                  href="/dashboard"
                  className="py-3 px-6 border-b border-gray-200 font-serif text-lg"
                >
                  Dashboard
                </a>
                <button
                  onClick={handleLogout}
                  className="py-3 px-6 text-left text-red-600 font-serif text-lg flex items-center"
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Log Out
                </button>
              </>
            ) : (
              <a href="/login" className="py-3 px-6 font-serif text-lg">
                Log In{" "}
                <span className="text-sm text-gray-500">(Admin Only)</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
