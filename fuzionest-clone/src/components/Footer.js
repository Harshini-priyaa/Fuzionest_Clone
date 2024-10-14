const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      {/* Grid for larger screens, stacked items for smaller screens */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        
        {/* Fuzionest Section */}
        <div className="md:col-span-2">
          <h2 className="font-bold text-xl">Fuzionest</h2>
          <p className="mt-2 text-sm">Making Business Resilient</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Connect with us
          </button>
        </div>

        {/* What we do */}
        <div>
          <h3 className="font-semibold mb-4">What we do</h3>
          <ul className="space-y-2">
            <li>Promote</li>
            <li>Innovate</li>
            <li>Empower</li>
            <li>Navigate</li>
            <li>Transform</li>
          </ul>
        </div>

        {/* Tailored Solutions */}
        <div>
          <h3 className="font-semibold mb-4">Tailored Solutions</h3>
          <ul className="space-y-2">
            <li>FleetXpert - Fleet Management ERP</li>
            <li>DeliXpress - On demand delivery ERP</li>
            <li>XpertNow - Service booking ERP</li>
            <li>X-Cart - Commerce ERP</li>
            <li>AccountXpert - Accounting ERP</li>
          </ul>
        </div>

        {/* Industry */}
        <div>
          <h3 className="font-semibold mb-4">Industry</h3>
          <ul className="space-y-2">
            <li>Healthcare</li>
            <li>Retail</li>
            <li>Real estate</li>
            <li>Manufacturing</li>
            <li>Education & eLearning</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>+91 8438762921</li>
            <li>contact@fuzionest.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-start md:items-center">
        <p className="mb-2 md:mb-0">Copyright © 2024 Fuzionest, LLC</p>
        <p>
          <a href="#" className="hover:text-white">Privacy Policy</a> | 
          <a href="#" className="hover:text-white ml-2">Website Terms</a> | 
          <a href="#" className="hover:text-white ml-2">Accessibility</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
