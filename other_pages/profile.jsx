import React, { useState } from "react";
import { FiEdit2, FiSettings, FiChevronRight, FiBell, FiLock, FiUser, FiCreditCard } from "react-icons/fi";
import { FaStar, FaCarSide } from "react-icons/fa";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("rides");

  const userData = {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    bio: "Adventure seeker | Frequent traveler | Coffee enthusiast",
    profilePic: "images.unsplash.com/photo-1494790108377-be9c29b29330",
    points: 2500,
    level: "Gold",
    progress: 75
  };

  const rideHistory = [
    {
      id: 1,
      date: "2024-01-15",
      time: "14:30",
      destination: "Airport Terminal 3",
      fare: "$45.50",
      driver: "John Smith"
    },
    {
      id: 2,
      date: "2024-01-12",
      time: "09:15",
      destination: "Downtown Business Center",
      fare: "$28.75",
      driver: "Mike Wilson"
    },
    {
      id: 3,
      date: "2024-01-10",
      time: "19:45",
      destination: "Central Mall",
      fare: "$32.20",
      driver: "Emma Davis"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Profile Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={`https://${userData.profilePic}`}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
                <button
                  aria-label="Edit profile"
                  className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full text-white hover:bg-green-600 transition"
                >
                  <FiEdit2 />
                </button>
              </div>
              <h1 className="mt-4 text-2xl font-semibold">{userData.name}</h1>
              <p className="text-gray-600 text-center mt-2">{userData.bio}</p>
              <p className="text-gray-500 mt-2">{userData.email}</p>
            </div>

            {/* Rewards Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">Rewards</h2>
              <div className="bg-green-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium">{userData.points} Points</span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    {userData.level}
                  </span>
                </div>
                <div className="mt-4 bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${userData.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex space-x-6 border-b mb-6">
              <button
                onClick={() => setActiveTab("rides")}
                className={`pb-4 ${
                  activeTab === "rides"
                    ? "border-b-2 border-green-500 text-green-600"
                    : "text-gray-500"
                }`}
              >
                Ride History
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`pb-4 ${
                  activeTab === "settings"
                    ? "border-b-2 border-green-500 text-green-600"
                    : "text-gray-500"
                }`}
              >
                Settings
              </button>
            </div>

            {activeTab === "rides" && (
              <div className="space-y-4">
                {rideHistory.map((ride) => (
                  <div
                    key={ride.id}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <FaCarSide className="text-green-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-medium">{ride.destination}</h3>
                        <p className="text-sm text-gray-500">
                          {ride.date} at {ride.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">{ride.fare}</p>
                      <p className="text-sm text-gray-500">{ride.driver}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <FiUser className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Personal Information</h3>
                      <p className="text-sm text-gray-500">Update your personal details</p>
                    </div>
                  </div>
                  <FiChevronRight className="text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <FiBell className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Notifications</h3>
                      <p className="text-sm text-gray-500">Manage your notifications</p>
                    </div>
                  </div>
                  <FiChevronRight className="text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <FiLock className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Security</h3>
                      <p className="text-sm text-gray-500">Manage your security preferences</p>
                    </div>
                  </div>
                  <FiChevronRight className="text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <FiCreditCard className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Payment Methods</h3>
                      <p className="text-sm text-gray-500">Manage your payment options</p>
                    </div>
                  </div>
                  <FiChevronRight className="text-gray-400" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;