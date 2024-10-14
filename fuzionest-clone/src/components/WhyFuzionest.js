import Link from 'next/link';

export default function WhyFuzionest() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-16">
      {/* Privacy Section */}
      <div className="flex flex-col items-center justify-center h-1/2 bg-white py-10">
        {/* Icon */}
        <div className="mb-8">
          <img
            src="Images/shield-icon.png" 
            alt="Privacy shield"
            width={80} 
            height={80} 
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          Your privacy is our responsibility
        </h1>

        {/* Subtitle */}
        <p className="text-base text-gray-600 text-center max-w-3xl mb-8">
          We believe that trust is paramount in a relationship. We do not own or sell your data, 
          and we most certainly do not bank on advertising-based business models. 
          The only way we make money is from the software license fees you pay us.
        </p>

        {/* Button */}
        <Link href="#" className="relative inline-block bg-blue-600 text-white text-xl px-10 py-4 transition-all duration-500 ease-out overflow-hidden group">
          <span className="relative z-10">Learn More</span>
          <span className="absolute inset-0 bg-black transform translate-x-[-120%] -skew-x-12 group-hover:translate-x-0 group-hover:skew-x-0 transition-all duration-500 ease-out"></span>
        </Link>
      </div>

      {/* Why Fuzionest Section */}
      <h1 className="text-5xl font-bold text-gray-800 mb-10 text-center">Why Fuzionest?</h1>

      {/* Innovation at the Core Section */}
      <div className="md:w-1/2 px-6 mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Innovation at the Core</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          “Fuzionest thrives on innovation. Our agency continually seeks out new technologies, frameworks, 
          and methodologies to stay ahead in the rapidly evolving world of software development. 
          We embrace change and use it to create cutting-edge solutions that give our clients a competitive advantage.”
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto justify-around">
        {/* Tailored Solutions */}
        <div className="md:w-1/2 px-6 mb-10 md:mb-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tailored Solutions</h2>
          <p className="text-lg text-gray-600">
            “We understand that every client is unique, with distinct goals and requirements. Our approach involves 
            closely collaborating with clients to understand their needs, objectives, and challenges. This enables us to 
            craft bespoke solutions that precisely address their business needs and lead to tangible results.”
          </p>
        </div>

        {/* Timely Delivery */}
        <div className="md:w-1/2 px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Timely Delivery</h2>
          <p className="text-lg text-gray-600">
            “We understand that time is of the essence in today's fast-paced business environment. Our proven project 
            management methodologies and efficient processes allow us to deliver projects on time, without compromising on 
            quality. We believe in setting realistic timelines and sticking to them.”
          </p>
        </div>
      </div>
    </div>
  );
}
