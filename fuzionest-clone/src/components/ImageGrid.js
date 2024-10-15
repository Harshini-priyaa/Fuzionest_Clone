// components/ImageGrid.js

import Image from 'next/image';

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full mx-auto">
      
      {/* First Image Card */}
      <div className="relative h-[400px] md:h-[600px] group overflow-hidden">
        <Image 
          src="/Images/server.jpg" 
          alt="Server Image" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-90"  // Lighter background image
        />
        {/* Heading - Moves up on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:translate-y-[-20%] transition-transform duration-300 ease-in-out">
          <h2 className="text-white text-center px-4 text-2xl md:text-4xl lg:text-5xl font-bold">
            Elite Multi-Tenancy: Superior Server Orchestration and Security
          </h2>
        </div>
        {/* Description and Button (hidden until hover) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-[-20%] transition-all duration-300 ease-in-out bg-black bg-opacity-50 text-center px-4">
          <p className="text-white text-lg md:text-xl mb-4">
            Experience the pinnacle of multi-tenant applications, featuring top-tier server orchestration and robust security protocols for unparalleled performance.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* Second Image Card */}
      <div className="relative h-[400px] md:h-[600px] group overflow-hidden">
        <Image 
          src="/Images/consulting.jpg" 
          alt="Consulting Image" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-90"
        />
        {/* Heading - Moves up on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:translate-y-[-20%] transition-transform duration-300 ease-in-out">
          <h2 className="text-white text-center px-4 text-2xl md:text-4xl lg:text-5xl font-bold">
            Strategic Fusion: Consulting Meets Vision
          </h2>
        </div>
        {/* Description and Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-[-20%] transition-all duration-300 ease-in-out bg-black bg-opacity-50 text-center px-4">
          <p className="text-white text-lg md:text-xl mb-4">
            Unlock the full potential of consulting services, combining strategic thinking with cutting-edge execution for success.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* Third Image Card */}
      <div className="relative h-[400px] md:h-[600px] group overflow-hidden">
        <Image 
          src="/Images/customization.png" 
          alt="Customization Image" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-90"
        />
        {/* Heading - Moves up on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:translate-y-[-20%] transition-transform duration-300 ease-in-out">
          <h2 className="text-white text-center px-4 text-2xl md:text-4xl lg:text-5xl font-bold">
            Rapid Customization - Accelerated ERP and Back Office Solutions
          </h2>
        </div>
        {/* Description and Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-[-20%] transition-all duration-300 ease-in-out bg-black bg-opacity-50 text-center px-4">
          <p className="text-white text-lg md:text-xl mb-4">
            Tailor your enterprise solutions quickly and efficiently to keep up with the fast-changing demands of modern business.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* Fourth Image Card */}
      <div className="relative h-[400px] md:h-[600px] group overflow-hidden">
        <Image 
          src="/Images/phones.jpg" 
          alt="Phones Image" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-90"
        />
        {/* Heading - Moves up on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:translate-y-[-20%] transition-transform duration-300 ease-in-out">
          <h2 className="text-white text-center px-4 text-2xl md:text-4xl lg:text-5xl font-bold">
            Smart Automation: Boosting Workforce Efficiency with GEN-AI
          </h2>
        </div>
        {/* Description and Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-[-20%] transition-all duration-300 ease-in-out bg-black bg-opacity-50 text-center px-4">
          <p className="text-white text-lg md:text-xl mb-4">
            Maximize workforce potential with AI-driven automation, improving efficiency across the board.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold">
            Learn More
          </button>
        </div>
      </div>

    </div>
  );
};

export default ImageGrid;
