import { useState, useEffect } from "react";
import { FiPhone, FiMail, FiMessageSquare, FiChevronDown, FiChevronUp, FiMapPin } from "react-icons/fi";

const SupportPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions sent to your email."
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for payments."
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 days for international orders."
    },
    {
      id: 4,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging."
    }
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          setError("Unable to retrieve your location");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  }, []);

  const handleFAQClick = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const ContactOption = ({ icon: Icon, title, value, onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-64 group"
      aria-label={`Contact via ${title}`}
    >
      <Icon className="w-6 h-6 text-green-500 group-hover:text-green-600" />
      <div className="ml-4 text-left">
        <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
        <p className="text-gray-800">{value}</p>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Support Center</h1>

        {/* Contact Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContactOption
              icon={FiPhone}
              title="Phone Support"
              value="+1 (555) 123-4567"
              onClick={() => window.location.href = "tel:+15551234567"}
            />
            <ContactOption
              icon={FiMail}
              title="Email Support"
              value="support@example.com"
              onClick={() => window.location.href = "mailto:support@example.com"}
            />
            <ContactOption
              icon={FiMessageSquare}
              title="Live Chat"
              value="Available 24/7"
              onClick={() => console.log("Open chat")}
            />
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Location</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FiMapPin className="w-6 h-6 text-green-500 mr-2" />
              {userLocation ? (
                <p className="text-gray-800">
                  Latitude: {userLocation.lat.toFixed(6)}, Longitude: {userLocation.lng.toFixed(6)}
                </p>
              ) : (
                <p className="text-red-500">{error || "Detecting location..."}</p>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500"
                  onClick={() => handleFAQClick(faq.id)}
                  aria-expanded={expandedFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFAQ === faq.id ? (
                    <FiChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === faq.id && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 py-4 bg-gray-50"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;