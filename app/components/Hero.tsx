import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div className="container mx-auto px-6 md:px-24 py-32 text-start space-y-12">
        <h1 className="text-4xl font-bold mb-4">
          Transforming Ideas into Digital Realities
        </h1>
        <p className="text-xl mb-8 w-3/5">
          At DeepTech, we specialize in delivering cutting-edge web development
          services. Our expert team turns your vision into a seamless,
          user-friendly, and visually stunning online presence. Let us help you
          achieve your digital goals with innovative solutions and robust
          technologies.
        </p>
        <button className="bg-gray-600 p-4 rounded-md font-semibold shadow-sm shadow-black hover:bg-white/40 hover:text-gray-800 hover:shadow-lg hover:shadow-black">
          Know more -&gt;
        </button>
      </div>
    </section>
  );
};

export default Hero;
