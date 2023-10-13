import React from "react";

export default function Discover() {
  return (
    <section className="container mx-auto mt-28">
      <div className="flex flex-col md:flex-row justify-center items-center place-items-stretch">
        {/* Vector Image (Left Side) */}
        <div className="w-3/4 md:w-full mb-6 md:mb-0 mx-auto">
          <div className="md:w-3/4">
            <img
              src="/images/discover2.jpg" // Replace with your vector image path
              alt="Vector Image"
              className="w-full rounded-lg drop-shadow-lg"
            />
          </div>
        </div>

        {/* Discover Search (Right Side) */}
        <div className="w-full px-4 text-center sm:text-start">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Temukan Artikel
          </h2>
          <p className="mb-8 text-base md:text-lg font-normal">
            Menemukan Pengetahuan Terpercaya dalam Sentuhan Jari Anda,
            Eksplorasi Dunia Pengetahuan yang Luas
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring focus:border-blue-500"
            />
            <div className="absolute top-0 right-0 mt-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-5-5m-2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
