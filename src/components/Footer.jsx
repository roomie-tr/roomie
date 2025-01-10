import { Link } from 'react-router-dom'
import { TR } from 'country-flag-icons/react/3x2'
import logo from '../../public/assets/logo.png'

function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Company Info & Logo */}
            <div className="col-span-1">
              <Link to="/" onClick={handleClick} className="inline-block">
                <div className="flex items-center gap-2 mb-4">
                  <img 
                    src={logo} 
                    alt="Roomie Logo" 
                    className="w-32 object-contain my-auto"
                  />
                  <div className="flex items-center">
                    <TR className="w-6 h-6" />
                  </div>
                </div>
              </Link>
              <p className="text-gray-600 text-sm">
                Find your perfect room or apartment in Turkey with Roomie. We make house hunting simple and efficient.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/about" 
                    onClick={handleClick}
                    className="text-gray-600 hover:text-[#E9A159] text-sm transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="text-gray-600 text-sm">
                  Email: info@roomie.com
                </li>
                <li className="text-gray-600 text-sm">
                  Phone: +1 234 567 890
                </li>
                <li className="text-gray-600 text-sm">
                  Address: 123 Main St, City
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section - Different Spacing */}
        <div className="border-t border-gray-200 py-6">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Roomie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 