"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { LogOut, User, Calendar, FileText, Settings } from "lucide-react";

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />

      <div className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="bg-white shadow-md p-6">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <User className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold">
                      {user.name}
                    </h3>
                    <p className="text-gray-600">{user.role}</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center space-x-2 p-3 bg-emerald-50 text-emerald-700 rounded-md"
                  >
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 p-3 text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Events</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 p-3 text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    <FileText className="h-5 w-5" />
                    <span>Publications</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 p-3 text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 p-3 text-red-600 hover:bg-red-50 rounded-md w-full text-left"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Log Out</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <div className="bg-white shadow-md p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Welcome to your Dashboard
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-serif font-bold mb-4">
                    Account Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Username</p>
                      <p className="font-medium">{user.username}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Role</p>
                      <p className="font-medium">{user.role}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Last Login</p>
                      <p className="font-medium">
                        {new Date().toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-serif font-bold mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-emerald-500 bg-emerald-50">
                      <p className="font-medium">Login successful</p>
                      <p className="text-sm text-gray-600">
                        {new Date().toLocaleString()}
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-gray-300 bg-gray-50">
                      <p className="font-medium">Profile updated</p>
                      <p className="text-sm text-gray-600">Yesterday</p>
                    </div>
                    <div className="p-4 border-l-4 border-gray-300 bg-gray-50">
                      <p className="font-medium">New event published</p>
                      <p className="text-sm text-gray-600">3 days ago</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold mb-4">
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
                      Create New Event
                    </button>
                    <button className="p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      Publish Article
                    </button>
                    <button className="p-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                      Manage Partners
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
