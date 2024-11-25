import React, { useState } from "react";
import { FaBatteryHalf, FaClock, FaMapMarkedAlt, FaListUl } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "react-map-gl";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const BikeRentalInterface = () => {
  const [isMapView, setIsMapView] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);

  const vehicles = [
    {
      id: 1,
      name: "Electric Bike Pro",
      type: "Bike",
      image: "images.unsplash.com/photo-1531608139434-1912ae0713cd",
      battery: 85,
      cost: "$12/hour",
      available: true,
      location: { lat: 40.7128, lng: -74.006 }
    },
    {
      id: 2,
      name: "City Scooter X",
      type: "Scooter",
      image: "images.unsplash.com/photo-1604868189265-219ba7bf7ea3",
      battery: 92,
      cost: "$10/hour",
      available: true,
      location: { lat: 40.7148, lng: -74.008 }
    },
    {
      id: 3,
      name: "Mountain Bike Elite",
      type: "Bike",
      image: "images.unsplash.com/photo-1532298229144-0ec0c57515c7",
      battery: 78,
      cost: "$15/hour",
      available: false,
      location: { lat: 40.7138, lng: -74.004 }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  const ListView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {vehicles.map((vehicle) => (
        <motion.div
          key={vehicle.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <img
            src={`https://${vehicle.image}`}
            alt={vehicle.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f";
              setError("Some images failed to load");
            }}
          />
          <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center">
              <FaBatteryHalf className="text-green-500 mr-2" />
              {vehicle.battery}%
            </span>
            <span className="text-gray-600">{vehicle.cost}</span>
          </div>
          <button
            className={`w-full py-2 px-4 rounded-lg ${vehicle.available
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-400 cursor-not-allowed"
              } text-white transition-colors`}
            disabled={!vehicle.available}
          >
            {vehicle.available ? "Rent Now" : "Unavailable"}
          </button>
        </motion.div>
      ))}
    </div>
  );

  const MapView = () => (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      <Map
        initialViewState={{
          longitude: -74.006,
          latitude: 40.7128,
          zoom: 13
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="YOUR_MAPBOX_TOKEN"
      >
        {/* Map markers would go here */}
      </Map>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Rent a Bike or Scooter</h1>
        <button
          onClick={() => setIsMapView(!isMapView)}
          className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          aria-label={isMapView ? "Switch to list view" : "Switch to map view"}
        >
          {isMapView ? <FaListUl className="text-gray-600" /> : <FaMapMarkedAlt className="text-gray-600" />}
          <span>{isMapView ? "List View" : "Map View"}</span>
        </button>
      </div>

      <div className="relative mb-8">
        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="w-full flex-shrink-0">
                <img
                  src={`https://${vehicle.image}`}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f";
                    setError("Some images failed to load");
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={isMapView ? "map" : "list"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {isMapView ? <MapView /> : <ListView />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BikeRentalInterface;