import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/Images/background.png" // Make sure to use the correct path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Overlay for slight dim effect */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Redefining IT Functions</h1>
        <p className="text-lg mb-6">In the vision of transforming business processes through GenAI</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 text-lg rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
