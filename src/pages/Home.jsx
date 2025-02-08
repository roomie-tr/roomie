import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import PropertyCard from '../components/PropertyCard'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Loading from '../components/Loading'
import { properties } from '../data/properties'
import { useRouteTransition } from '../context/RouteTransitionContext'

function Home() {
  const { stopLoading } = useRouteTransition()
  const [searchParams, setSearchParams] = useState({
    activeTab: 'all',
    location: '',
    roomType: '',
    preference: '',
    apartmentArea: ''
  })

  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    return () => stopLoading()
  }, [])

  const handleSearch = (params) => {
    // If no filters are selected but a tab is selected, only filter by tab
    if (!params.location && !params.roomType && !params.preference && !params.apartmentArea) {
      setSearchParams({
        ...params,
        activeTab: params.activeTab || 'all'
      })
      return
    }

    // If filters are selected, ensure we're searching in the correct tab
    setSearchParams({
      ...params,
      activeTab: params.activeTab || 'all'
    })
  }

  const filteredProperties = properties.filter(property => {
    // First check if we should show all properties
    if (searchParams.activeTab === 'all') {
      return true;
    }

    // Check if property type matches the active tab
    if (searchParams.activeTab === 'room' && property.type !== 'room') {
      return false;
    }
    if (searchParams.activeTab === 'apartment' && property.type !== 'apartment') {
      return false;
    }
    if (searchParams.activeTab === 'student_housing' && property.type !== 'student_housing') {
      return false;
    }

    // Then apply other filters if they exist
    if (searchParams.location && property.location !== searchParams.location) {
      return false;
    }

    // Apply type-specific filters
    if (property.type === 'room') {
      if (searchParams.roomType && property.roomType !== searchParams.roomType) {
        return false;
      }
      if (searchParams.preference && property.preference !== searchParams.preference) {
        return false;
      }
    } else if (property.type === 'apartment') {
      if (searchParams.apartmentArea) {
        if (searchParams.apartmentArea === 'duplex') {
          if (!property.apartment?.type || property.apartment.type !== 'duplex') {
            return false;
          }
        } else if (property.apartment?.type === 'duplex' || property.apartmentArea !== searchParams.apartmentArea) {
          return false;
        }
      }
    }

    return true;
  })

  const getHeadingText = () => {
    if (searchParams.activeTab === 'room') {
      return 'Available Rooms';
    } else if (searchParams.activeTab === 'apartment') {
      return 'Available Apartments';
    } else if (searchParams.activeTab === 'student_housing') {
      return 'Available Student Housing';
    }
    return 'Available Properties';
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero onSearch={handleSearch} />
      <motion.main 
        className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="mb-16">
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0A0929] mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {getHeadingText()}
          </motion.h2>
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  className="h-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-lg text-gray-600 mb-2">
                {searchParams.activeTab === 'room' ? 'No rooms available' : 
                 searchParams.activeTab === 'apartment' ? 'No apartments available' : 
                 searchParams.activeTab === 'student_housing' ? 'No student housing available' :
                 'No properties available'}
              </p>
              <p className="text-sm text-gray-500">
                Try adjusting your search filters to find what you're looking for
              </p>
            </motion.div>
          )}
        </div>
      </motion.main>
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default Home 