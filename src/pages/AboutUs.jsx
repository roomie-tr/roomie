import { motion } from 'framer-motion'
import { FiHome, FiUsers, FiCheck, FiAward } from 'react-icons/fi'
import { TR } from 'country-flag-icons/react/3x2'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { useEffect } from 'react'
import { useRouteTransition } from '../context/RouteTransitionContext'

function AboutUs() {
  const { stopLoading } = useRouteTransition()

  useEffect(() => {
    return () => stopLoading()
  }, [])

  const features = [
    {
      icon: <FiHome className="w-6 h-6" />,
      title: "Turkish Property Selection",
      description: "Browse through our extensive collection of rooms and apartments across Istanbul's most desirable districts."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Local Expertise",
      description: "Our team of local experts helps you navigate the Turkish real estate market with ease."
    },
    {
      icon: <FiCheck className="w-6 h-6" />,
      title: "Verified Listings",
      description: "All our properties are personally verified and comply with Turkish housing regulations."
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Multilingual Support",
      description: "Get assistance in Turkish, English, and Arabic throughout your property search journey."
    }
  ]

  const stats = [
    { number: "1000+", label: "Properties in Istanbul" },
    { number: "500+", label: "Happy Residents" },
    { number: "15+", label: "Istanbul Districts" },
    { number: "24/7", label: "Customer Support" }
  ]

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#FDF8F4] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div 
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[#10103B]">
                  About Roomie
                </h1>
                <div className="flex items-center">
                  <TR className="w-8 h-8" />
                </div>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Your trusted partner in finding the perfect living space in Turkey. 
                Whether you're a student, professional, or family looking for a new home, 
                we make your property search journey seamless and enjoyable.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white p-6 rounded-lg border border-[#F0EFF9] text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-[#FDF8F4] rounded-full flex items-center justify-center mx-auto mb-4 text-[#E9A159]">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#10103B] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#FDF8F4] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#E9A159] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#10103B]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold text-[#10103B] mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At Roomie, we're committed to simplifying the property search experience in Turkey. 
                We understand the unique challenges of finding accommodation in Istanbul, and we're 
                here to make that process transparent and efficient. Our platform connects property 
                seekers with verified listings across Istanbul's most sought-after neighborhoods.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're an international student looking for a room near your university, 
                a professional seeking a modern apartment, or a family searching for your next home, 
                we provide the tools and support you need. Our dedication to quality service and 
                local expertise ensures you find the perfect property in Turkey.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default AboutUs 