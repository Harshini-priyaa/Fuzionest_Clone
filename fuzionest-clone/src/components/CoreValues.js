const CoreValues = () => {
    return (
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Title */}
          <h2 className="text-3xl font-bold mb-10">Our core values guide how we operate</h2>
  
          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <img src="/path-to-icon/iterate-icon.png" alt="Iterate to Success Icon" className="h-16 w-16" />
              </div>
              <h3 className="font-bold text-lg mb-4">We Iterate to Success</h3>
              <p className="text-gray-600">Success isn’t a straight path. We embrace our mistakes, learn from them, and use those lessons to advance toward our goals.</p>
            </div>
  
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <img src="/path-to-icon/growth-icon.png" alt="Personal Growth Icon" className="h-16 w-16" />
              </div>
              <h3 className="font-bold text-lg mb-4">We Encourage Personal Growth</h3>
              <p className="text-gray-600">Great companies are built by great people. We support our employees in becoming the best versions of themselves, both personally and professionally.</p>
            </div>
  
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <img src="/path-to-icon/extra-mile-icon.png" alt="Extra Mile Icon" className="h-16 w-16" />
              </div>
              <h3 className="font-bold text-lg mb-4">We Go the Extra Mile</h3>
              <p className="text-gray-600">Settling for mediocrity is easy. We strive to exceed expectations, whether tackling internal challenges or serving our customers.</p>
            </div>
          </div>
  
          {/* Read More Button */}
          <div className="mt-10">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Read more →
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default CoreValues;
  