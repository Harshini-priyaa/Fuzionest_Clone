import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#dcdcdb] px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/Images/Logo.png" alt="Logo" width={50} height={50} />
      </div>

      {/* Links */}
      <ul className="flex space-x-12 text-lg font-semibold ml-auto">
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
      </ul>

      {/* Contact Us Button */}
      <div className="ml-8">
        <Link href="#" className="relative inline-block bg-blue-600 text-white text-lg px-8 py-3 rounded-md transition-all duration-500 ease-out overflow-hidden group">
          <span className="relative z-10">Contact Us</span>
          <span className="absolute inset-0 bg-black transform translate-x-[-120%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-all duration-500 ease-out rounded-md"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
