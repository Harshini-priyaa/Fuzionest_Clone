import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden"> {/* Adjusted height */}
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/Images/programming-bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Overlay for a slight dim effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 space-y-6 -mt-16"> {/* Moved content up */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
          Redefining IT Functions
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
          In the vision of transforming business processes through GenAI
        </p>

        {/* Styled Learn More Button */}
        <button className="relative inline-block bg-blue-600 text-white text-lg px-8 py-3 rounded-md transition-all duration-500 ease-out overflow-hidden group">
          <span className="relative z-10">Learn More</span>
          <span className="absolute inset-0 bg-black transform translate-x-[-120%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-all duration-500 ease-out rounded-md"></span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
