import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/Images/programming-bg.jpg" // Correct path to the image
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Overlay for a slight dim effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 space-y-6">
        <h1 className="text-6xl font-extrabold leading-tight mb-4">
          Redefining IT Functions
        </h1>
        <p className="text-xl max-w-2xl">
          Transforming business processes through Generative AI solutions.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 text-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
