import React, { useState } from "react";
import { FaStar, FaCreditCard, FaPaypal, FaApplePay, FaHistory } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";

const RideSummary = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("credit_card");

  const tripDetails = {
    duration: "25 mins",
    distance: "12.5 km",
    baseCost: 25.50
  };

  const tipOptions = [0, 2, 5, 10];

  const paymentMethods = [
    { id: "credit_card", name: "Credit Card", icon: <FaCreditCard /> },
    { id: "paypal", name: "PayPal", icon: <FaPaypal /> },
    { id: "apple_pay", name: "Apple Pay", icon: <FaApplePay /> },
    { id: "cash", name: "Cash", icon: <BsCashStack /> }
  ];

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleTipSelection = (amount) => {
    setTipAmount(amount);
  };

  const handlePaymentSelection = (method) => {
    setSelectedPayment(method);
  };

  const handleSubmit = () => {
    console.log("Submitting feedback and payment");
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 max-w-3xl mx-auto">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Ride Summary</h1>

        {/* Trip Details Card */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Trip Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Duration</p>
              <p className="text-lg font-medium">{tripDetails.duration}</p>
            </div>
            <div>
              <p className="text-gray-500">Distance</p>
              <p className="text-lg font-medium">{tripDetails.distance}</p>
            </div>
            <div>
              <p className="text-gray-500">Base Cost</p>
              <p className="text-lg font-medium">${tripDetails.baseCost.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-500">Total Cost</p>
              <p className="text-lg font-medium">
                ${(tripDetails.baseCost + tipAmount).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Tip Options */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add a Tip</h2>
          <div className="flex space-x-4">
            {tipOptions.map((amount) => (
              <button
                key={amount}
                onClick={() => handleTipSelection(amount)}
                className={`px-4 py-2 rounded-full ${
                  tipAmount === amount
                    ? "bg-green-100 text-green-700 border-2 border-green-500"
                    : "bg-gray-100 text-gray-700 border-2 border-transparent"
                } transition-all duration-200`}
              >
                ${amount}
              </button>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Method</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => handlePaymentSelection(method.id)}
                className={`flex items-center justify-center p-4 rounded-lg ${
                  selectedPayment === method.id
                    ? "bg-green-100 text-green-700 border-2 border-green-500"
                    : "bg-gray-100 text-gray-700 border-2 border-transparent"
                } transition-all duration-200`}
                aria-label={`Select ${method.name}`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-2xl">{method.icon}</span>
                  <span className="text-sm">{method.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Rating and Feedback */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Rate Your Trip</h2>
          <div className="flex space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRatingClick(star)}
                className="text-2xl focus:outline-none"
                aria-label={`Rate ${star} stars`}
              >
                <FaStar
                  className={`${
                    rating >= star ? "text-yellow-400" : "text-gray-300"
                  } transition-colors duration-200`}
                />
              </button>
            ))}
          </div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your experience (optional)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows="3"
            aria-label="Feedback text area"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Submit payment and feedback"
          >
            Complete Payment
          </button>
          <button
            className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label="View ride history"
          >
            <FaHistory />
            <span>View Previous Rides</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RideSummary;