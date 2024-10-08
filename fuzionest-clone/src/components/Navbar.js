// components/Navbar.js
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-black hover:text-gray-700">
            What We Do
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            How We Engage
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Tailored Solutions
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Who We Are
          </a>
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
