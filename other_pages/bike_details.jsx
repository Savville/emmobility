import React, { useState, useEffect } from "react";
import { FaBicycle, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const BikeRentalConfirmation = () => {
  const [isRentalStarted, setIsRentalStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  const mockRentalData = {
    bikeModel: "Mountain Pro X1",
    rentalDuration: "1 hour",
    cost: "$15.00",
    station: "Central Park Bike Station",
    address: "123 Park Avenue, New York, NY 10001"
  };

  useEffect(() => {
    let timer;
    if (isRentalStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRentalStarted, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleStartRental = () => {
    setIsRentalStarted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <FaBicycle className="text-4xl text-blue-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Rental Confirmation
          </h1>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Rental Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bike Model:</span>
                  <span className="font-medium text-gray-900">{mockRentalData.bikeModel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-gray-900">{mockRentalData.rentalDuration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cost:</span>
                  <span className="font-medium text-gray-900">{mockRentalData.cost}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Location</h2>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">{mockRentalData.station}</p>
                  <p className="text-gray-600">{mockRentalData.address}</p>
                </div>
              </div>
            </div>

            {isRentalStarted ? (
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-blue-600" />
                    <span className="font-medium text-blue-600">Time Remaining:</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">
                    {formatTime(timeLeft)}
                  </span>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-green-600">Rental Successfully Started</span>
                </div>
              </div>
            ) : (
              <button
                onClick={handleStartRental}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 ease-in-out hover:scale-[1.02]"
                aria-label="Start Rental"
              >
                Start Rental
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeRentalConfirmation;
