import React from "react";

const Hero3 = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0 text-white text-xl">
              <a
                href="#"
                title="BakerStreet"
                className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary"
              >
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo.svg"
                  alt="BakerStreet"
                />
                {/* <h1>Easyway Driving</h1> */}
              </a>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
              <a
                href="#"
                className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                About
              </a>
              <a
                href="#"
                className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                Services
              </a>
              <a
                href="#"
                className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                Contacts
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dy8zpplau/image/upload/f_auto,q_auto/morgan-rovang-t38nvd1DF3o-unsplash_o8jk01"
          alt="Optimized Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Radial Overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="w-full h-full bg-gradient-radial from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6 sm:px-8 lg:px-12">
        <h1 className="tracking-tighter">
          <span className="font-sans font-normal text-7xl">Driving is</span>
          <br />
          <div className="mt-2 p-3">
            <span className="font-serif italic font-normal text-8xl">
              Freedom
            </span>
          </div>
        </h1>
        <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70 max-w-xl">
          Our instructors at Easyway Driving with 10+ years of experience are
          here to help you master it
        </p>
        <div className="flex items-center justify-center mt-8 space-x-3 sm:space-x-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold leading-6 transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary"
          >
            Book a lesson today!
          </a>
          {/* <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold leading-6 transition-all duration-200 bg-transparent border-2 rounded-full sm:leading-8 text-white border-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg focus:ring-offset-secondary"
          >
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
              />
            </svg>
            Watch trailer
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
