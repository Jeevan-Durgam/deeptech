import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="px-4 md:px-24 py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className=" text-xl font-bold">Logo</div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className=" w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className=" w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className=" w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
