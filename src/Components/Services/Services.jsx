import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from 'react-icons/fa6';
import wave from '../../assets/wave Gif.gif';

const ServiceData = [
  {
    title: 'HST',
    content: '300–1500 km',
    description: 'Used for astronomical observation, capturing stunning images of the universe.',
    icon: <FaReact className="text-6xl text-sky-400" />,
    aosDelay: '200',
  },
  {
    title: 'ISS',
    content: '500–1500 km',
    description: 'A habitable artificial satellite orbiting Earth, serving as a space research lab.',
    icon: <FaShuttleSpace className="text-6xl text-sky-400" />,
    aosDelay: '400',
  },
  {
    title: 'GPS',
    content: '300–1500 km',
    description: 'Part of the Global Positioning System used for precise navigation and tracking.',
    icon: <FaSpaceAwesome className="text-6xl text-sky-400" />,
    aosDelay: '600',
  }
];

const Services = () => {
  return (
    <div className="bg-black text-white relative z-50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
          {ServiceData.map((data, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="min-h-[200px] bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-xl p-6 flex flex-col items-center gap-4 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {data.icon}
              <h2 className="text-2xl font-semibold uppercase">{data.title}</h2>
              <p className="text-sky-300 font-medium">{data.content}</p>
              <p className="text-sm text-gray-300">{data.description}</p>
            </div>
          ))}
        </div>

        {/* Wave Background */}
        <img
          src={wave}
          alt="Wave divider"
          className="h-[180px] w-full object-cover mix-blend-screen -translate-y-20 relative z-[0]"
        />
      </div>
    </div>
  );
};

export default Services;
