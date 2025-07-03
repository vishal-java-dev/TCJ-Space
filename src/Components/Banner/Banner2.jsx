import React from 'react';
import satelite1 from '../../assets/satelite2.jpg';

const Banner2 = () => {
  return (
    <section className="bg-black text-white py-16 relative z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">

          {/* Text Content */}
          <div className="space-y-6 border-l-0 sm:border-l-4 border-b-4 sm:border-b-0 border-sky-800 pl-0 sm:pl-6 px-4" data-aos="fade-up">
            <p
              className="text-sky-400 text-sm uppercase tracking-wider font-medium"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Why TCJ Space
            </p>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Precision from Orbit
            </h2>

            <p
              className="text-gray-300 text-sm sm:text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <strong>TCJ Space</strong> delivers high-precision satellite telemetry combined with
              advanced AI-powered analytics. Our systems serve key sectors like agriculture, climate science,
              and emergency response — transforming space intelligence into real-world impact.
            </p>

            <button
              className="primary-button bg-sky-600 hover:bg-sky-700 px-6 py-3 rounded-md font-semibold transition duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Explore Our Technology
            </button>
          </div>

          {/* Image */}
          <div data-aos="zoom-in">
            <img
              src={satelite1}
              alt="Satellite technology visualization"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
