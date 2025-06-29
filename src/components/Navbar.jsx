import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar py-7 px-6 md:px-20 flex items-center justify-between fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      {/* Logo */}
      <div className="logo">
        <h1 className="text-2xl font-bold text-white p-1 md:bg-transparent md:text-white">
          Portofolio
        </h1>
      </div>

      {/* Hamburger Menu (Mobile Only) */}
      <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              menuOpen
                ? "M6 18L18 6M6 6l12 12" // X icon
                : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
            }
          />
        </svg>
      </div>

      {/* Navigation Menu */}
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed top-20 left-0 w-full
        md:w-auto bg-white/30 backdrop-blur-md p-4 md:rounded-none rounded-b-2xl
        md:bg-transparent md:flex-row flex-col transition-all duration-300 ease-in-out z-40
        ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        md:opacity-100 md:pointer-events-auto`}
      >
        {/* Nav Items */}
        <li>
          <a
            href="/#home"
            onClick={() => setMenuOpen(false)}
            className="sm:text-lg text-base font-medium relative text-white hover:text-blue-400 transition-colors duration-300 
            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full 
            after:bg-blue-400 after:transition-all after:duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="sm:text-lg text-base font-medium relative text-white hover:text-blue-400 transition-colors duration-300 
            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full 
            after:bg-blue-400 after:transition-all after:duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/#project"
            onClick={() => setMenuOpen(false)}
            className="sm:text-lg text-base font-medium relative text-white hover:text-blue-400 transition-colors duration-300 
            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full 
            after:bg-blue-400 after:transition-all after:duration-300"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="sm:text-lg text-base font-medium relative text-white hover:text-blue-400 transition-colors duration-300 
            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full 
            after:bg-blue-400 after:transition-all after:duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
