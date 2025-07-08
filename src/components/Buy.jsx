import React, { useState } from "react";

// Example instrument data
const instruments = [
  {
    name: "Mridangam",
    qualities: [
      {
        quality: "Standard",
        price: "₹8,000",
        img: "/Tabla.jpg",
      },
      {
        quality: "Premium",
        price: "₹15,000",
        img: "/Tabla.jpg",
      },
    ],
  },
  {
    name: "Khanjira (Lizard Skin)",
    qualities: [
      {
        quality: "Standard",
        price: "₹2,500",
        img: "/Tabla.jpg",
      },
      {
        quality: "Premium",
        price: "₹4,000",
        img: "/Tabla.jpg",
      },
    ],
  },
  {
    name: "Khanjira (Synthetic)",
    qualities: [
      {
        quality: "Standard",
        price: "₹1,800",
        img: "/Tabla.jpg",
      },
      {
        quality: "Premium",
        price: "₹3,000",
        img: "/Tabla.jpg",
      },
    ],
  },
  {
    name: "Tabla",
    qualities: [
      {
        quality: "Standard",
        price: "₹6,000",
        img: "/Tabla.jpg",
      },
      {
        quality: "Premium",
        price: "₹12,000",
        img: "/Tabla.jpg",
      },
    ],
  },
  {
    name: "Dholak",
    qualities: [
      {
        quality: "Standard",
        price: "₹3,500",
        img: "/Tabla.jpg",
      },
      {
        quality: "Premium",
        price: "₹7,000",
        img: "/Tabla.jpg",
      },
    ],
  },
];

const whatsappNumber = "8121305781";

const Buy = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState(null);

  const handleBuyClick = (instrument, quality, price) => {
    setSelectedInstrument({ instrument, quality, price });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInstrument(null);
  };

  const handleWhatsApp = () => {
    const message = `Hello, I am interested in buying the ${selectedInstrument.instrument} (${selectedInstrument.quality} Quality) for ${selectedInstrument.price}.`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="w-full min-h-screen py-8 bg-gray-50">
      <div className="w-screen mx-auto px-4">
        <h1 className="text-xs font-bold mb-10 text-center text-black">
          Buy your Instrument from us:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {instruments.map((instrument) =>
            instrument.qualities.map((q) => (
              <div
                key={instrument.name + q.quality}
                className="bg-black rounded shadow p-4 flex flex-col items-center"
              >
                <img
                  src="/images/Tabla.jpg"
                  alt={`${instrument.name} ${q.quality}`}
                  className="mb-4 w-full h-40 object-cover rounded"
                />
                <h2 className="text-xl font-bold mb-2 text-black">
                  {instrument.name}
                </h2>
                <p className="mb-1 text-gray-700">{q.quality} Quality</p>
                <p className="mb-2 text-lg font-semibold text-green-700">
                  {q.price}
                </p>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  onClick={() =>
                    handleBuyClick(instrument.name, q.quality, q.price)
                  }
                >
                  Buy Now
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              {/* WhatsApp Icon */}
              <a
                onClick={handleWhatsApp}
                className="mb-4 cursor-pointer"
                title="Chat on WhatsApp"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="24" fill="#25D366" />
                  <path
                    d="M34.6 29.2c-.5-.2-2.9-1.4-3.3-1.6-.4-.2-.7-.2-1 .2-.3.4-1.1 1.6-1.4 1.9-.3.3-.5.4-1 .1-.5-.2-2-0.7-3.8-2.2-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-.9.2-.2.5-.6.7-.9.2-.3.2-.5.3-.8.1-.3 0-.6 0-.8 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.8.1-1.2.5-.4.4-1.6 1.6-1.6 3.8 0 2.2 1.6 4.3 1.8 4.6.2.3 3.1 4.7 7.6 6.1 1.1.3 2 .5 2.7.6 1.1.1 2.1.1 2.9 0 .9-.1 2.9-1.2 3.3-2.3.4-1.1.4-2.1.3-2.3-.1-.2-.4-.3-.9-.5z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <h2 className="text-xl font-bold mb-2 text-black">
                Connect on WhatsApp
              </h2>
              <p className="mb-4">
                Click below to chat with us on WhatsApp and buy your instrument!
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white px-6 py-2 rounded font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="24" fill="#25D366" />
                  <path
                    d="M34.6 29.2c-.5-.2-2.9-1.4-3.3-1.6-.4-.2-.7-.2-1 .2-.3.4-1.1 1.6-1.4 1.9-.3.3-.5.4-1 .1-.5-.2-2-0.7-3.8-2.2-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-.9.2-.2.5-.6.7-.9.2-.3.2-.5.3-.8.1-.3 0-.6 0-.8 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.8.1-1.2.5-.4.4-1.6 1.6-1.6 3.8 0 2.2 1.6 4.3 1.8 4.6.2.3 3.1 4.7 7.6 6.1 1.1.3 2 .5 2.7.6 1.1.1 2.1.1 2.9 0 .9-.1 2.9-1.2 3.3-2.3.4-1.1.4-2.1.3-2.3-.1-.2-.4-.3-.9-.5z"
                    fill="#fff"
                  />
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Buy;
