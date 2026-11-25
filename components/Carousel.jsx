"use client";

import { useState, useEffect } from "react";

const slides = [
  { src: "/images/img2_73157d24c9.jpg", alt: "COMSYS 2027 Venue" },
  { src: "/images/img2_73157d24c9.jpg", alt: "COMSYS 2027 Conference" },
  { src: "/images/img2_73157d24c9.jpg", alt: "COMSYS 2027 Sessions" },
  { src: "/images/img2_73157d24c9.jpg", alt: "COMSYS 2027 London" },
  { src: "/images/img2_73157d24c9.jpg", alt: "COMSYS 2027 Oxford" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full sm:h-screen mb-2"
      data-carousel="slide"
    >
      <div className="relative h-64 overflow-hidden md:h-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`duration-700 ease-in-out absolute inset-0 transition-transform transform ${
              idx === current
                ? "z-20 translate-x-0"
                : idx < current
                ? "z-10 -translate-x-full"
                : "z-10 translate-x-full"
            }`}
            data-carousel-item="true"
          >
            <img
              src={slide.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={slide.alt}
              width={2000}
              height={2000}
            />
          </div>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current
                ? "bg-white dark:bg-gray-800"
                : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            }`}
            aria-current={idx === current ? "true" : "false"}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev="true"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent group-hover:bg-gray-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-800 dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next="true"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent group-hover:bg-gray-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-800 dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
