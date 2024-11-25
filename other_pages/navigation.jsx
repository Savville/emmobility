import React, { useState, useEffect } from "react";
import { FaPause, FaPlay, FaStop, FaMapMarkerAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { GiPathDistance } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";

const RideTracker = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [fare, setFare] = useState(0);

  const mockDropOffStations = [
    { id: 1, name: "Central Station", distance: "0.5 km" },
    { id: 2, name: "Downtown Hub", distance: "1.2 km" },
    { id: 3, name: "Park Station", distance: "2.0 km" },
  ];

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setDistance((prev) => prev + 0.1);
        setTime((prev) => prev + 1);
        setFare((prev) => prev + 0.25);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleEndRide = () => {
    setIsPaused(true);
    // Additional end ride logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Map Placeholder */}
        <div className="h-64 bg-gray-200 relative" role="region" aria-label="Ride map">
          <div className="absolute inset-0 flex items-center justify-center">
            <FaMapMarkerAlt className="text-green-500 text-4xl animate-bounce" />
          </div>
        </div>

        {/* Ride Information */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* ETA */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <BiTime className="text-green-500 text-xl" />
                <span className="text-gray-700 font-semibold">ETA</span>
              </div>
              <p className="text-2xl font-bold text-gray-800 mt-2">12 mins</p>
            </div>

            {/* Distance */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <GiPathDistance className="text-green-500 text-xl" />
                <span className="text-gray-700 font-semibold">Distance</span>
              </div>
              <p className="text-2xl font-bold text-gray-800 mt-2">
                {distance.toFixed(1)} km
              </p>
            </div>

            {/* Fare */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <MdAttachMoney className="text-green-500 text-xl" />
                <span className="text-gray-700 font-semibold">Fare</span>
              </div>
              <p className="text-2xl font-bold text-gray-800 mt-2">
                ${fare.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Nearby Stations */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Nearby Drop-off Stations
            </h3>
            <div className="space-y-2">
              {mockDropOffStations.map((station) => (
                <div
                  key={station.id}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700">{station.name}</span>
                  <span className="text-green-500 font-medium">
                    {station.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handlePauseResume}
              className="flex-1 flex items-center justify-center space-x-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label={isPaused ? "Resume ride" : "Pause ride"}
            >
              {isPaused ? (
                <>
                  <FaPlay className="text-lg" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <FaPause className="text-lg" />
                  <span>Pause</span>
                </>
              )}
            </button>
            <button
              onClick={handleEndRide}
              className="flex-1 flex items-center justify-center space-x-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="End ride"
            >
              <FaStop className="text-lg" />
              <span>End Ride</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideTracker;
