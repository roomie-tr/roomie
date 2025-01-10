import { motion } from 'framer-motion'
import { FiUser, FiUsers } from 'react-icons/fi'
import { IoMaleFemale } from 'react-icons/io5'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function PropertyCard({ property }) {
  const getPreferenceIcon = () => {
    if (property.preference === 'male') {
      return <BsGenderMale className="text-[#007BFF] w-5 h-5" />
    } else if (property.preference === 'female') {
      return <BsGenderFemale className="text-[#FF69B4] w-5 h-5" />
    } else {
      return <IoMaleFemale className="text-gray-500 w-5 h-5" />
    }
  }

  return (
    <Link to={`/property/${property.id}`}>
      <motion.div 
        className="w-full cursor-pointer"
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <div className="bg-white rounded-lg border border-[#F0EFF9] hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-[200px] overflow-hidden rounded-t-lg">
            <img 
              src={property.image} 
              alt={property.location}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#10103B] mb-2">{property.location}</h3>

            <div className="flex items-center gap-1 mt-2">
              <span className="text-[#E9A159] text-2xl font-semibold">${property.price}</span>
              <span className="text-[#10103B]/60">/month</span>
            </div>

            <div className="h-[1.5px] bg-[#F0EFF9] my-4" />

            <div className="flex items-center justify-between">
              {property.type === 'rent' ? (
                <>
                  {/* Room Type */}
                  <div className="flex items-center gap-2">
                    {property.roomType === 'individual' ? (
                      <FiUser className="text-[#E9A159] w-5 h-5" />
                    ) : (
                      <FiUsers className="text-[#E9A159] w-5 h-5" />
                    )}
                    <span className="text-[#10103B] capitalize">{property.roomType} Room</span>
                  </div>

                  {/* Preference */}
                  <div className="flex items-center gap-2">
                    {getPreferenceIcon()}
                    <span className="text-[#10103B] capitalize">
                      {property.preference === 'any' ? 'Any Gender' : `${property.preference} Only`}
                    </span>
                  </div>
                </>
              ) : (
                /* Apartment Area */
                <div className="flex items-center gap-2">
                  <span className="text-[#10103B] font-medium">
                    Apartment Area: {property.apartmentArea}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default PropertyCard 