"use client";

import React from "react";
import { motion } from "framer-motion";

const works = [
  {
    title: "Work 1",
    tech: "Tech used 1",
    features: [
      "core features",
      "core features",
      "core features",
      "core features",
      "core features",
    ],
  },
  {
    title: "Work 2",
    tech: "Tech used 2",
    features: [
      "core features",
      "core features",
      "core features",
      "core features",
      "core features",
    ],
  },
  {
    title: "Work 3",
    tech: "Tech used 3",
    features: [
      "core features",
      "core features",
      "core features",
      "core features",
      "core features",
    ],
  },
];

const Work: React.FC = () => {
  return (
    <div className="p-8 md:h-screen">
      <div className="container mx-auto md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What we provide...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="bg-white/20 p-6 rounded shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
              <p className="mb-4">{work.tech}</p>
              <ul className="list-disc list-inside mb-4">
                {work.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                Know more
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
