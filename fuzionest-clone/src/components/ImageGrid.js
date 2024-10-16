import Image from 'next/image';

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full mx-auto">

      {/* First Image Card - Updated to match the others */}
      <div className="relative h-[400px] md:h-[600px] lg:h-[700px] group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <Image 
          src="/Images/server.jpg" 
          alt="Server Image" 
          layout="fill" 
          objectFit="cover" 
          className="pointer-events-none" // Keep the image unaffected by hover
        />
        {/* Heading - Moves up slightly on hover */}
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-25%] pointer-events-none">
          <h2 className="text-white text-center px-4 text-xl md:text-3xl lg:text-4xl font-bold tracking-wide"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
            Elite Multi-Tenancy: Superior Server Orchestration and Security
          </h2>
        </div>
        {/* Description and Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10%] transition-all duration-500 ease-out text-center px-4">
          <p className="text-white text-md md:text-lg lg:text-xl mb-4 leading-relaxed"
             style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
            Experience the pinnacle of multi-tenant applications, featuring top-tier server orchestration and robust security protocols for unparalleled performance.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:scale-105 transition-transform duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Second Image Card */}
      <div className="relative h-[400px] md:h-[600px] lg:h-[700px] group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <Image 
          src="/Images/consulting.jpg" 
          alt="Consulting Image" 
          layout="fill" 
          objectFit="cover" 
          className="pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-25%] pointer-events-none">
          <h2 className="text-white text-center px-4 text-xl md:text-3xl lg:text-4xl font-bold tracking-wide"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
            Strategic Fusion: Consulting Meets Vision
          </h2>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10%] transition-all duration-500 ease-out text-center px-4">
          <p className="text-white text-md md:text-lg lg:text-xl mb-4 leading-relaxed"
             style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
            Unlock the full potential of consulting services, combining strategic thinking with cutting-edge execution for success.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:scale-105 transition-transform duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Third Image Card */}
      <div className="relative h-[400px] md:h-[600px] lg:h-[700px] group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <Image 
          src="/Images/customization.png" 
          alt="Customization Image" 
          layout="fill" 
          objectFit="cover" 
          className="pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-25%] pointer-events-none">
          <h2 className="text-white text-center px-4 text-xl md:text-3xl lg:text-4xl font-bold tracking-wide"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
            Rapid Customization - Accelerated ERP and Back Office Solutions
          </h2>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10%] transition-all duration-500 ease-out text-center px-4">
          <p className="text-white text-md md:text-lg lg:text-xl mb-4 leading-relaxed"
             style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
            Tailor your enterprise solutions quickly and efficiently to keep up with the fast-changing demands of modern business.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:scale-105 transition-transform duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Fourth Image Card */}
      <div className="relative h-[400px] md:h-[600px] lg:h-[700px] group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <Image 
          src="/Images/phones.jpg" 
          alt="Phones Image" 
          layout="fill" 
          objectFit="cover" 
          className="pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-y-[-25%] pointer-events-none">
          <h2 className="text-white text-center px-4 text-xl md:text-3xl lg:text-4xl font-bold tracking-wide"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
            Smart Automation: Boosting Workforce Efficiency with GEN-AI
          </h2>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10%] transition-all duration-500 ease-out text-center px-4">
          <p className="text-white text-md md:text-lg lg:text-xl mb-4 leading-relaxed"
             style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
            Maximize workforce potential with AI-driven automation, improving efficiency across the board.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:scale-105 transition-transform duration-300">
            Learn More
          </button>
        </div>
      </div>

    </div>
  );
};

export default ImageGrid;