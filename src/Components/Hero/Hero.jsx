import React from 'react';
import Mountain from '../../assets/moon-surface-hd.png';

const Hero = () => {
  return (
    <div className="bg-black/20 text-white relative z-50 pt-24 sm:pt-28">
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-10 min-h-screen">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div data-aos="fade-up" className="space-y-6 md:px-6 lg:px-12">
            <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
              Orbit The Earth
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-300 text-base md:text-lg"
            >
              At <strong>TCJ Space</strong>, we are redefining how humanity interacts with space.
              Our satellite technologies provide real-time Earth observation, navigation, and
              data connectivity — empowering science, sustainability, and global communication.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="primary-button"
            >
              Learn More
            </button>
          </div>

          {/* Right Placeholder */}
          <div className="hidden md:block h-[300px] w-full"></div>
        </div>
      </div>

      {/* Surface image */}
      <img
        src={Mountain}
        alt="moon surface"
        className="absolute bottom-0 right-0 w-full object-cover brightness-50 z-10"
      />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent to-black h-6 sm:h-12 md:h-16"></div>
    </div>
  );
};

export default Hero;
