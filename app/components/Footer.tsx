import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-black text-white/30 md:flex justify-between items-center px-4 md:px-24 space-y-6 md:h-44">
      <div className="py-6">
        <p>Subscribe to our newsletter</p>
        <div className="space-x-1">
          <input type="text" className="" />
          <button className="bg-blue-600 border text-black rounded-[2px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <a href="/">Copyrights</a>
        <a href="/">Terms & Conditions</a>
        <a href="/">Help</a>
        <a href="/">FAQ</a>
      </div>
    </div>
  );
};

export default Footer;
