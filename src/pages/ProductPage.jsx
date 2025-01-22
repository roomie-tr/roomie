import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiUsers, FiMapPin, FiDollarSign, FiImage } from 'react-icons/fi'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import ImageSlider from '../components/ImageSlider'
import { useState, useEffect } from 'react'
import { findPropertyById } from '../data/properties'
import { useRouteTransition } from '../context/RouteTransitionContext'
import { TbCurrencyLira } from 'react-icons/tb'

function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showAllImages, setShowAllImages] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [property, setProperty] = useState(null)
  const { stopLoading } = useRouteTransition()

  useEffect(() => {
    const foundProperty = findPropertyById(id)
    if (!foundProperty) {
      navigate('/') // Redirect to home if property not found
      return
    }
    setProperty(foundProperty)
  }, [id, navigate])

  useEffect(() => {
    return () => stopLoading()
  }, [])

  if (!property) {
    return null // or a loading spinner
  }

  const getPreferenceIcon = () => {
    if (!property.preference) return null;
    if (property.preference === 'male') {
      return <BsGenderMale className="text-[#007BFF] w-5 h-5" />
    } else if (property.preference === 'female') {
      return <BsGenderFemale className="text-[#FF69B4] w-5 h-5" />
    }
  }

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
  }

  const handleShowAllPhotos = () => {
    setSelectedImageIndex(0)
  }

  const handleLocationClick = () => {
    window.open(property.googleMapsUrl, '_blank')
  }

  const renderImageGallery = () => {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => handleImageClick(0)}
          >
            <img 
              src={property.images[0]} 
              alt={property.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1, 4).map((image, index) => (
              <motion.div 
                key={index}
                className="relative h-[190px] rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => handleImageClick(index + 1)}
              >
                <img 
                  src={image} 
                  alt={`${property.name} ${index + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {property.images.length > 4 && (
          <button
            onClick={handleShowAllPhotos}
            className="flex items-center gap-2 text-[#E9A159] hover:text-[#d08236] transition-colors duration-300"
          >
            <FiImage className="w-5 h-5" />
            <span>Show All {property.images.length} Photos</span>
          </button>
        )}
      </div>
    )
  }

  const renderVideoGallery = () => {
    if (!property.videos || property.videos.length === 0) return null;
    
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            className="relative h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <iframe
              className="w-full h-full"
              src={property.videos[0].url}
              title="Property Video Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(0, 4).map((image, index) => (
              <motion.div 
                key={index}
                className="relative h-[190px] rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => handleImageClick(index)}
              >
                <img 
                  src={image} 
                  alt={`${property.name} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Image Gallery */}
          <div className="mb-8 relative">
            {property.videos?.length > 0 ? renderVideoGallery() : renderImageGallery()}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-3xl font-semibold text-[#10103B] mb-4">{property.name}</h1>
                <div 
                  className="flex items-center gap-2 text-gray-600 mb-6 cursor-pointer hover:text-[#E9A159] transition-colors"
                  onClick={handleLocationClick}
                >
                  <FiMapPin />
                  <span>{property.location}</span>
                </div>

                <div className="bg-white rounded-lg border border-[#F0EFF9] p-6 mb-8">
                  <h2 className="text-xl font-semibold text-[#10103B] mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{property.description}</p>
                </div>

                <div className="bg-white rounded-lg border border-[#F0EFF9] p-6 mb-8">
                  <h2 className="text-xl font-semibold text-[#10103B] mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-[#E9A159] rounded-full" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-lg border border-[#F0EFF9] p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-[#10103B]">Location</h2>
                    <button 
                      onClick={handleLocationClick}
                      className="text-[#E9A159] hover:text-[#d08236] transition-colors duration-300 text-sm"
                    >
                      Open in Google Maps
                    </button>
                  </div>
                  <div className="h-[300px] rounded-lg overflow-hidden">
                    <iframe
                      title="Property Location"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${property.coordinates.lng-0.01}%2C${property.coordinates.lat-0.01}%2C${property.coordinates.lng+0.01}%2C${property.coordinates.lat+0.01}&layer=mapnik&marker=${property.coordinates.lat}%2C${property.coordinates.lng}`}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="bg-white rounded-lg border border-[#F0EFF9] p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <TbCurrencyLira className="text-[#E9A159] w-6 h-6" />
                      <span className="text-2xl font-semibold text-[#10103B]">
                        {property.price.toLocaleString('tr-TR')}
                      </span>
                      <span className="text-gray-600">
                        {property.type === 'rent' ? '/month' : ''}
                      </span>
                    </div>

                    <div className="space-y-4 mb-8">
                      {property.type === 'rent' ? (
                        <>
                          {/* Room Type */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {property.roomType === 'individual' ? (
                                <FiUser className="text-[#E9A159] w-5 h-5" />
                              ) : (
                                <FiUsers className="text-[#E9A159] w-5 h-5" />
                              )}
                              <span className="text-[#10103B] capitalize">{property.roomType} Room</span>
                            </div>
                          </div>

                          {/* Preference */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {getPreferenceIcon()}
                              <span className="text-[#10103B] capitalize">
                                {property.preference} Only
                              </span>
                            </div>
                          </div>
                        </>
                      ) : (
                        /* Apartment Area */
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-[#10103B]">
                              Apartment Area: {property.apartmentArea}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <button className="w-full bg-[#E9A159] text-white py-3 rounded-lg hover:bg-[#d08236] transition-colors duration-300">
                      {property.type === 'rent' ? 'Contact Owner' : 'Contact Agent'}
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
      
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <ImageSlider 
            images={property.images}
            currentIndex={selectedImageIndex}
            onClose={() => setSelectedImageIndex(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProductPage 