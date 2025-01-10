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
    // First check the active tab
    if (searchParams.activeTab !== 'all' && property.type !== searchParams.activeTab) {
      return false
    }

    // Then apply other filters if they exist
    if (searchParams.location && property.location !== searchParams.location) {
      return false
    }

    // Apply type-specific filters
    if (property.type === 'rent') {
      if (searchParams.roomType && property.roomType !== searchParams.roomType) {
        return false
      }
      if (searchParams.preference && property.preference !== searchParams.preference) {
        return false
      }
    } else if (property.type === 'buy') {
      if (searchParams.apartmentArea && property.apartmentArea !== searchParams.apartmentArea) {
        return false
      }
    }

    return true
  })

  const getHeadingText = () => {
    // If no properties are found after filtering
    if (filteredProperties.length === 0) {
      if (searchParams.activeTab === 'rent') {
        return 'No Available Rooms Found'
      } else if (searchParams.activeTab === 'buy') {
        return 'No Available Apartments Found'
      }
      return 'No Properties Found'
    }

    // If properties are found
    switch(searchParams.activeTab) {
      case 'rent':
        return 'Available Rooms'
      case 'buy':
        return 'Available Apartments'
      default:
        return 'All Properties'
    }
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
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
                {searchParams.activeTab === 'rent' ? 'No rooms available' : 
                 searchParams.activeTab === 'buy' ? 'No apartments available' : 
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