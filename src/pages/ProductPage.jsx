import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiUsers, FiMapPin, FiDollarSign, FiImage, FiPlay, FiInfo, FiShield, FiVideo } from 'react-icons/fi'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import MediaSlider from '../components/MediaSlider'
import { useState, useEffect } from 'react'
import { findPropertyById } from '../data/properties'
import { useRouteTransition } from '../context/RouteTransitionContext'
import { TbCurrencyLira } from 'react-icons/tb'
import ApartmentDetails from '../components/ApartmentDetails'
import StudentHousingDetails from '../components/StudentHousingDetails'
import RoomDetails from '../components/RoomDetails'

function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showAllImages, setShowAllImages] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [property, setProperty] = useState(null)
  const { stopLoading } = useRouteTransition()
  const [showAllMedia, setShowAllMedia] = useState(false)
  const INITIAL_MEDIA_COUNT = 4

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
    return null
  }

  const handleLocationClick = () => {
    window.open(property.googleMapsUrl, '_blank')
  }

  const allMedia = [
    ...(property.videos?.map((v, i) => ({ 
      type: 'video', 
      url: v.url, 
      index: i 
    })) || []),
    ...((property.images?.map((img, i) => ({ 
      type: 'image', 
      url: img, 
      index: i + (property.videos?.length || 0)
    }))) || [])
  ];

  const displayedMedia = showAllMedia ? allMedia : allMedia.slice(0, INITIAL_MEDIA_COUNT);
  const remainingCount = allMedia.length - INITIAL_MEDIA_COUNT;

  const renderMediaGallery = () => {
    return (
      <div className="relative">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          layout
        >
          {displayedMedia.map((media, index) => (
            <motion.div 
              key={media.url || index}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer
                ${index === 0 && !showAllMedia ? 'md:col-span-2 md:row-span-2' : ''}`}
              onClick={() => setSelectedImageIndex(media.index)}
            >
              {media.type === 'video' ? (
                <div className="group relative h-full">
                  <video 
                    src={media.url}
                    className="w-full h-full object-cover"
                    poster={property.image}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <FiVideo className="text-white w-8 h-8" />
                  </div>
                </div>
              ) : (
                <div className="group relative h-full">
                  <img 
                    src={media.url} 
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {allMedia.length > INITIAL_MEDIA_COUNT && (
          <motion.button
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAllMedia(!showAllMedia)}
            className="absolute bottom-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 
              text-[#10103B] px-4 py-2 rounded-lg shadow-lg flex items-center gap-2
              transition-all duration-300"
          >
            <FiImage className="w-5 h-5" />
            <motion.span
              key={showAllMedia ? 'less' : 'more'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {!showAllMedia ? `+${remainingCount} more` : 'Show less'}
            </motion.span>
          </motion.button>
        )}
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
          <div className="mb-8 relative">
            {renderMediaGallery()}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
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

                <StudentHousingDetails property={property} />

                <div className="bg-white rounded-lg border border-[#F0EFF9] p-6 mb-8">
                  <h2 className="text-xl font-semibold text-[#10103B] mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed text-right" dir="rtl">
                    {property.description}
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-[#F0EFF9] p-6 mb-8">
                  <h2 className="text-xl font-semibold text-[#10103B] mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {property?.amenities?.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-[#E9A159] rounded-full" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

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
                        {property.type === 'room' ? '/month' : ''}
                      </span>
                    </div>

                    <div className="bg-[#F0EFF9] rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <FiShield className="text-[#10103B] w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-[#10103B]" dir="rtl">
                            {property.deposit?.description || "Deposit information not available"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {property.type === 'room' ? (
                        <RoomDetails property={property} />
                      ) : (
                        <ApartmentDetails property={property} />
                      )}
                    </div>

                    <button className="w-full bg-[#E9A159] text-white py-3 rounded-lg hover:bg-[#d08236] transition-colors duration-300">
                      {property.type === 'room' ? 'Contact Owner' : 'Contact Agent'}
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
          <MediaSlider 
            media={allMedia}
            currentIndex={selectedImageIndex}
            onClose={() => setSelectedImageIndex(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProductPage 