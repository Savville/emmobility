import React from "react";
import { FaBicycle, FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const BicycleRentingApp = () => {
  return (
    <div className="font-poppins">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <FaBicycle className="text-green-500 text-4xl mr-2" />
            <h1 className="text-2xl font-bold">BikeRent</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-green-500">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-500">Rent a Bike</a>
            <a href="#" className="text-gray-600 hover:text-green-500">About Us</a>
            <a href="#" className="text-gray-600 hover:text-green-500">Contact</a>
          </nav>
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Explore the City on Two Wheels</h2>
            <p className="text-xl mb-6">Rent a bike and discover the beauty of urban cycling.</p>
            <button className="bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300">Rent a Bike</button>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1571188654248-7a89213915f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="People cycling" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose BikeRent?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaMapMarkerAlt className="text-green-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">GPS-Enabled Bikes</h3>
              <p>Easily locate and track your rented bike with our GPS technology.</p>
            </div>
            <div className="text-center">
              <FaClock className="text-green-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Rental Options</h3>
              <p>Choose from hourly, daily, or weekly rental plans to suit your needs.</p>
            </div>
            <div className="text-center">
              <IoMdCheckmarkCircleOutline className="text-green-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p>Book your bike in just a few clicks through our user-friendly app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Process Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Download App</h3>
              <p>Get our app from your device's app store.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Find a Bike</h3>
              <p>Locate available bikes near you on the map.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Scan & Unlock</h3>
              <p>Scan the QR code to unlock your chosen bike.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Enjoy & Return</h3>
              <p>Ride and return the bike to any designated area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Sarah L.</h4>
                  <div className="flex text-yellow-400">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
              <p>"BikeRent made my city tour so much fun! The app was easy to use, and the bikes were in great condition."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Mike R.</h4>
                  <div className="flex text-yellow-400">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
              <p>"I use BikeRent for my daily commute. It's reliable, affordable, and eco-friendly. Highly recommended!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Emily T.</h4>
                  <div className="flex text-yellow-400">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
              <p>"The GPS feature is a game-changer! I never worry about getting lost or finding a return station anymore."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BikeRent</h3>
              <p>Explore the city on two wheels with ease and convenience.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-500">Home</a></li>
                <li><a href="#" className="hover:text-green-500">Rent a Bike</a></li>
                <li><a href="#" className="hover:text-green-500">About Us</a></li>
                <li><a href="#" className="hover:text-green-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>123 Bike Street, Cycle City, BC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@bikerent.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-500"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-green-500"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-green-500"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-green-500"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2023 BikeRent. All rights reserved.</p>
            <div className="mt-2">
              <a href="#" className="text-sm hover:text-green-500 mr-4">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-green-500">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BicycleRentingApp;