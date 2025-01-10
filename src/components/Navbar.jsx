import { Link } from 'react-router-dom'
import { TR } from 'country-flag-icons/react/3x2'
import logo from '../../public/assets/logo.png'

function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Roomie Logo" 
              className="w-32 object-contain my-auto"
            />
            <div className="flex items-center">
              <TR className="w-6 h-6" />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center">
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-[#E9A159] transition-colors duration-300"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 