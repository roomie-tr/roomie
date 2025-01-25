import { motion } from 'framer-motion'
import { FiUser, FiUsers, FiHome } from 'react-icons/fi'
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

  const getDisplayPrice = () => {
    if (property.price) {
      return property.price.toLocaleString('tr-TR');
    }
    if (property.rooms && Array.isArray(property.rooms)) {
      const prices = property.rooms.map(room => room.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      if (minPrice === maxPrice) {
        return minPrice.toLocaleString('tr-TR');
      }
      return `${minPrice.toLocaleString('tr-TR')} - ${maxPrice.toLocaleString('tr-TR')}`;
    }
    return 'Contact for price';
  }

  const renderPropertyType = (type) => {
    switch (type) {
      case 'room':
        return 'Room';
      case 'apartment':
        return 'Apartment';
      case 'student_housing':
        return 'Student Housing';
      default:
        return 'Unknown Type';
    }
  }

  const renderApartmentDetails = () => {
    if (property.type !== 'apartment') return null;

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <FiHome className="text-[#E9A159] w-5 h-5" />
          <span className="text-[#10103B] font-medium">
            {property.apartment?.type === 'duplex' ? 'Duplex' : 'Apartment'} Area:
          </span>
        </div>
        {property.apartment?.type === 'duplex' && property.apartment?.rooms ? (
          <div className="text-sm text-gray-600">
            <span>Upstairs: {property.apartment.rooms.upstairs} rooms</span>
            <span className="mx-2">•</span>
            <span>Downstairs: {property.apartment.rooms.downstairs} rooms</span>
          </div>
        ) : (
          <span className="text-[#10103B]">{property.apartmentArea}</span>
        )}
      </div>
    );
  }

  return (
    <Link to={`/property/${property.id}`} className="block h-full">
      <motion.div 
        className="h-full cursor-pointer"
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <div className="bg-white rounded-lg border border-[#F0EFF9] hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
          <div className="relative h-[200px] overflow-hidden rounded-t-lg">
            <img 
              src={property.image} 
              alt={property.location}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold text-[#10103B] mb-2">{property.location}</h3>

            <div className="flex items-center gap-1 mt-2">
              <span className="text-[#E9A159] text-2xl font-semibold">₺{getDisplayPrice()}</span>
              <span className="text-[#10103B]/60">/month</span>
            </div>

            <div className="h-[1.5px] bg-[#F0EFF9] my-4" />

            <div className="mt-auto">
              <div className="flex items-center justify-between">
                {property.type === 'room' ? (
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
                ) : property.type === 'student_housing' ? (
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FiHome className="text-[#E9A159] w-5 h-5" />
                        <span className="text-[#10103B] font-medium">Student Housing</span>
                      </div>
                      {property.genderOptions && (
                        <div className="flex items-center gap-2">
                          {property.genderOptions.includes('male') && property.genderOptions.includes('female') ? (
                            <>
                              <IoMaleFemale className="text-[#E9A159] w-5 h-5" />
                              <span className="text-[#10103B]">Mixed Dorm</span>
                            </>
                          ) : property.genderOptions.includes('male') ? (
                            <>
                              <BsGenderMale className="text-[#007BFF] w-5 h-5" />
                              <span className="text-[#10103B]">Male Only</span>
                            </>
                          ) : (
                            <>
                              <BsGenderFemale className="text-[#FF69B4] w-5 h-5" />
                              <span className="text-[#10103B]">Female Only</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  renderApartmentDetails()
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default PropertyCard 