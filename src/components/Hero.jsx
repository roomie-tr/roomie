import { motion } from 'framer-motion'
import Search from './Search'

function Hero({ onSearch }) {
  return (
    <motion.div 
      className="flex items-center justify-center h-[400px] py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Component */}
        <motion.div 
          className="relative z-30 w-full max-w-[800px] mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Light Effect for Search */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[200px] bg-[#FFE4BC] opacity-10 blur-[60px] rounded-[40px]" />
          <div className="relative">
            <Search onSearch={onSearch} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero 