import React from 'react';
import satelite1 from '../../assets/satelite1.jpg';

const Banner = () => {
  return (
    <section className="bg-black text-white py-12 relative z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={satelite1}
              alt="Satellite in space"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 border-l-0 sm:border-l-4 border-sky-700 pl-0 sm:pl-6" data-aos="fade-up">
            <p
              className="text-sky-400 text-sm uppercase tracking-wider font-medium"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our Mission
            </p>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Empowering Earth <br className="hidden sm:block" /> from Space
            </h2>

            <p
              className="text-gray-300 text-sm sm:text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              At <strong>TCJ Space</strong>, we revolutionize Earth-space connectivity by deploying
              advanced satellite systems. From real-time monitoring and navigation to global communication,
              our mission is to make space technology accessible, impactful, and sustainable for all.
            </p>

            <button
              className="primary-button bg-sky-600 hover:bg-sky-700 px-6 py-3 rounded-md font-semibold transition duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
