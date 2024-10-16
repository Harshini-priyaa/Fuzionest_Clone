"use client"; // Ensure it's a Client Component

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // For the hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // If the user scrolls down, hide the navbar
        setIsVisible(false);
      } else {
        // If the user scrolls up, show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-[#dcdcdb] shadow-md px-8 py-4 fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo for larger screens */}
        <div className="hidden lg:flex items-center">
          <Image src="/Images/Logo.png" alt="Logo" width={40} height={40} />
        </div>

        {/* Hamburger Icon and Fuzionest text for Mobile */}
        <div className="lg:hidden flex items-center space-x-2">
          <FaBars onClick={toggleMenu} className="text-2xl text-gray-700 cursor-pointer" />
          
          {/* "Fuzionest" text with logo replacing "o" */}
          <span className="text-lg font-light text-gray-800 flex items-center">
            Fuz<span className="inline-block mx-1">
              <Image src="/Images/Logo.png" alt="Logo" width={18} height={18} />
            </span>ionest
          </span>
        </div>

        {/* Links for larger screens */}
        <ul className="hidden lg:flex space-x-12 text-lg font-medium ml-auto">
          <li>
            <Link href="#" className="text-gray-800 hover:text-gray-900 hover:underline">
              What We Do
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-800 hover:text-gray-900 hover:underline">
              How We Engage
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-800 hover:text-gray-900 hover:underline">
              Tailored Solutions
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-800 hover:text-gray-900 hover:underline">
              Who We Are
            </Link>
          </li>
        </ul>

        {/* Contact Us Button for larger screens */}
        <div className="hidden lg:block ml-12">
          <Link href="#" className="relative inline-block bg-blue-600 text-white text-lg px-8 py-3 transition-all duration-500 ease-out overflow-hidden group">
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-black transform translate-x-[-120%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-all duration-500 ease-out"></span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-lg font-semibold">
            <li>
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                What We Do
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                How We Engage
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                Tailored Solutions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                Who We Are
              </Link>
            </li>
            <li>
              <Link href="#" className="relative inline-block bg-blue-600 text-white text-lg px-8 py-3 transition-all duration-500 ease-out overflow-hidden group">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-black transform translate-x-[-120%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-all duration-500 ease-out"></span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
