"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function WhyFuzionest() {
  const slides = [
    {
      title: "Innovation at the Core",
      content: `“Fuzionest thrives on innovation. Our agency continually seeks out new technologies, frameworks,
        and methodologies to stay ahead in the rapidly evolving world of software development. We embrace change and 
        use it to create cutting-edge solutions that give our clients a competitive advantage.”`
    },
    {
      title: "Tailored Solutions",
      content: `“We understand that every client is unique, with distinct goals and requirements. Our approach involves 
        closely collaborating with clients to understand their needs, objectives, and challenges. This enables us to 
        craft bespoke solutions that precisely address their business needs and lead to tangible results.”`
    },
    {
      title: "Timely Delivery",
      content: `“We understand that time is of the essence in today's fast-paced business environment. Our proven project 
        management methodologies and efficient processes allow us to deliver projects on time, without compromising on 
        quality. We believe in setting realistic timelines and sticking to them.”`
    }
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const scrollCarousel = () => {
      if (carousel) {
        carousel.scrollBy({ left: 1, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scrollCarousel, 20); // Speed of the scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-16">
      {/* Privacy Section */}
      <div className="flex flex-col items-center justify-center h-1/2 bg-white py-10">
        <div className="mb-8">
          <img
            src="Images/shield-icon.png" 
            alt="Privacy shield"
            width={80} 
            height={80} 
          />
        </div>

        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          Your privacy is our responsibility
        </h1>
        <p className="text-base text-gray-600 text-center max-w-3xl mb-8">
          We believe that trust is paramount in a relationship. We do not own or sell your data, 
          and we most certainly do not bank on advertising-based business models. 
          The only way we make money is from the software license fees you pay us.
        </p>

        <Link href="#" className="relative inline-block bg-blue-600 text-white text-xl px-10 py-4 transition-all duration-500 ease-out overflow-hidden group">
          <span className="relative z-10">Learn More</span>
          <span className="absolute inset-0 bg-black transform translate-x-[-120%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-all duration-500 ease-out"></span>
        </Link>
      </div>

      {/* Why Fuzionest Section */}
      <h1 className="text-5xl font-bold text-gray-800 mb-10 text-left">Why Fuzionest?</h1>

      {/* Carousel Section */}
      <div
        ref={carouselRef}
        className="relative w-full max-w-6xl flex overflow-hidden"
        style={{ whiteSpace: 'nowrap' }}
      >
        {/* Slide */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/2 p-6"
            style={{ whiteSpace: 'normal' }} // Allow normal text wrapping within the slide
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{slide.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{slide.content}</p>
          </div>
        ))}
        {/* Duplicate the slides for continuous effect */}
        {slides.map((slide, index) => (
          <div
            key={index + slides.length}
            className="flex-shrink-0 w-1/2 p-6"
            style={{ whiteSpace: 'normal' }} // Allow normal text wrapping within the slide
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{slide.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{slide.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
