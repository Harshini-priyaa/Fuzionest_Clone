import Image from 'next/image';

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 w-full mx-auto">
      {/* First Image Card */}
      <div className="relative h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <Image
          src="/Images/server.jpg"
          alt="Server Image"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out z-20 group-hover:translate-y-[-40px]">
          <h2 className="text-white text-center px-6 py-4 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide transition-transform duration-500 ease-out"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            Elite Multi-Tenancy: Superior Server Orchestration and Security
          </h2>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out text-center px-6 py-4 z-10 bg-black/50 group-hover:translate-y-0">
          <p className="text-white text-sm sm:text-md md:text-xl lg:text-2xl mb-4 leading-relaxed transition-opacity duration-500 ease-out"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            Experience the pinnacle of multi-tenant applications, featuring top-tier server orchestration and robust security protocols for unparalleled performance.
          </p>
          <a href="#" className="relative inline-block bg-blue-600 text-white text-sm sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 py-3 sm:py-4 transition-all duration-500 ease-out overflow-hidden group">
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-black transform translate-x-[-120%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-all duration-500 ease-out"></span>
          </a>
        </div>
      </div>

      {/* Second Image Card */}
      <div className="relative h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <Image
          src="/Images/consulting.jpg"
          alt="Consulting Image"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out z-20 group-hover:translate-y-[-40px]">
          <h2 className="text-white text-center px-6 py-4 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide transition-transform duration-500 ease-out"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            Strategic Fusion: Consulting Meets Vision
          </h2>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out text-center px-6 py-4 z-10 bg-black/50 group-hover:translate-y-0">
          <p className="text-white text-sm sm:text-md md:text-xl lg:text-2xl mb-4 leading-relaxed transition-opacity duration-500 ease-out"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            Unlock the full potential of consulting services, combining strategic thinking with cutting-edge execution for success.
          </p>
          <a href="#" className="relative inline-block bg-blue-600 text-white text-sm sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 py-3 sm:py-4 transition-all duration-500 ease-out overflow-hidden group">
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-black transform translate-x-[-120%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-all duration-500 ease-out"></span>
          </a>
        </div>
      </div>

      {/* Third Image Card */}
      <div className="relative h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <Image
          src="/Images/customization.png"
          alt="Customization Image"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out z-20 group-hover:translate-y-[-40px]">
          <h2 className="text-white text-center px-6 py-4 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide transition-transform duration-500 ease-out"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            Rapid Customization - Accelerated ERP and Back Office Solutions
          </h2>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out text-center px-6 py-4 z-10 bg-black/50 group-hover:translate-y-0">
          <p className="text-white text-sm sm:text-md md:text-xl lg:text-2xl mb-4 leading-relaxed transition-opacity duration-500 ease-out"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            Tailor your enterprise solutions quickly and efficiently to keep up with the fast-changing demands of modern business.
          </p>
          <a href="#" className="relative inline-block bg-blue-600 text-white text-sm sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 py-3 sm:py-4 transition-all duration-500 ease-out overflow-hidden group">
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-black transform translate-x-[-120%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-all duration-500 ease-out"></span>
          </a>
        </div>
      </div>

      {/* Fourth Image Card */}
      <div className="relative h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <Image
          src="/Images/phones.jpg"
          alt="Phones Image"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out z-20 group-hover:translate-y-[-40px]">
          <h2 className="text-white text-center px-6 py-4 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide transition-transform duration-500 ease-out"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            Smart Automation: Boosting Workforce Efficiency with GEN-AI
          </h2>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out text-center px-6 py-4 z-10 bg-black/50 group-hover:translate-y-0">
          <p className="text-white text-sm sm:text-md md:text-xl lg:text-2xl mb-4 leading-relaxed transition-opacity duration-500 ease-out"
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            Maximize workforce potential with AI-driven automation, improving efficiency across the board.
          </p>
          <a href="#" className="relative inline-block bg-blue-600 text-white text-sm sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 py-3 sm:py-4 transition-all duration-500 ease-out overflow-hidden group">
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-black transform translate-x-[-120%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-all duration-500 ease-out"></span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default ImageGrid;
