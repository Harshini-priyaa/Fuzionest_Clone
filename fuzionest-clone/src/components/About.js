import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-10">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left side with Image */}
        <div className="w-full md:w-1/2 flex justify-start mb-8 md:mb-0 md:mr-16"> {/* Updated gap with md:mr-16 */}
          <img
            src="Images/black-working.png"
            alt="Team working together"
            className="rounded-md"
            width={600}
            height={400}
            layout="intrinsic"
          />
        </div>

        {/* Right side with Text */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4 flex flex-col items-start"> {/* Ensure content aligns right */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-6">
            Fuzionest thrives on innovation. Our agency continually seeks out new technologies, frameworks,
            and methodologies to stay ahead in the rapidly evolving world of software development. We embrace change and use it to create cutting-edge solutions that give our clients a competitive advantage.
          </p>

          {/* Button styled like Contact Us */}
          <Link href="#" className="relative inline-block bg-blue-600 text-white text-lg px-8 py-3 transition-all duration-500 ease-out overflow-hidden group">
            <span className="relative z-10">About Us</span>
            <span className="absolute inset-0 bg-black transform translate-x-[-120%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-all duration-500 ease-out"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
