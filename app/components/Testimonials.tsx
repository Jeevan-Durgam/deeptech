"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: " 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in nisl accumsan, ac gravida est tristique.' ",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Fusce rhoncus odio vel quam luctus ultricies. Cras sit amet nunc non lacus ultricies laoreet vitae vel ex.",
  },
  {
    id: 3,
    name: "Julian",
    text: "Fusce rhoncus odio vel quam luctus ultricies. Cras sit amet nunc non lacus ultricies laoreet vitae vel ex.",
  },
  {
    id: 4,
    name: "Sherry",
    text: "Fusce rhoncus odio vel quam luctus ultricies. Cras sit amet nunc non lacus ultricies laoreet vitae vel ex.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Adjust interval time as needed (milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-100 py-16 md:h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
        </div>
        <div className="mt-10">
          <div className="max-w-full mx-auto overflow-hidden">
            <motion.div
              className="flex"
              initial={{ x: "0%" }}
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 1,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-none text-center px-8 py-6 rounded-lg shadow-lg bg-white mx-2"
                >
                  <p className="text-gray-800">{testimonial.text}</p>
                  <p className="mt-4 font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
