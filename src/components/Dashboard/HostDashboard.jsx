import { useState } from "react";
import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { Button } from "@heroui/react";

const HostDashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabChange = (tab) => setActiveTab(tab);

  const logout = () => {
    console.log("User logged out");
    // Add your logout logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-700">
            Welcome to Your Dashboard
          </h1>
          <Button
            onPress={logout}
            className="flex items-center space-x-2 text-red-600 hover:text-red-800"
          >
            <FiLogOut className="h-6 w-6" />
            <span>Logout</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 flex">
        {/* Sidebar */}
        <nav className="w-1/4 bg-black shadow-lg rounded-lg p-4">
          <ul className="space-y-4">
            <li>
              <Button
                onPress={() => handleTabChange("Home")}
                className={`w-full flex items-center space-x-2 p-3 rounded-lg ${
                  activeTab === "Home"
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FiHome className="h-6 w-6" />
                <span>Home</span>
              </Button>
            </li>
            <li>
              <Button
                onPress={() => handleTabChange("Profile")}
                className={`w-full flex items-center space-x-2 p-3 rounded-lg ${
                  activeTab === "Profile"
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FiUser className="h-6 w-6" />
                <span>Profile</span>
              </Button>
            </li>
            <li>
              <Button
                onPress={() => handleTabChange("Settings")}
                className={`w-full flex items-center space-x-2 p-3 rounded-lg ${
                  activeTab === "Settings"
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FiSettings className="h-6 w-6" />
                <span>Settings</span>
              </Button>
            </li>
          </ul>
        </nav>

        {/* Main Dashboard Area */}
        <div className="w-3/4 p-6 bg-black shadow-lg rounded-lg ml-4">
          {activeTab === "Home" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-100 text-blue-800 rounded-lg shadow-md">
                  <h3 className="font-bold">Bookings</h3>
                  <p>You have 3 active bookings.</p>
                </div>
                <div className="p-4 bg-green-100 text-green-800 rounded-lg shadow-md">
                  <h3 className="font-bold">Earnings</h3>
                  <p>Your total earnings this month: $500.</p>
                </div>
                <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow-md">
                  <h3 className="font-bold">Notifications</h3>
                  <p>You have 5 unread notifications.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Profile" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Your Profile</h2>
              <p>Manage your personal details here.</p>
              {/* Add more profile-related content */}
            </div>
          )}

          {activeTab === "Settings" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Settings</h2>
              <p>Adjust your preferences and account settings.</p>
              {/* Add more settings-related content */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostDashboard;
