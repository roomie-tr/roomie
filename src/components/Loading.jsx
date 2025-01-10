import { motion } from 'framer-motion'
import { TR } from 'country-flag-icons/react/3x2'
import logo from '../../public/assets/logo.png'

function Loading() {
  const loadingContainer = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const loadingCircle = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  }

  const loadingCircleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  }

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center justify-center gap-3">
          <img 
            src={logo} 
            alt="Roomie Logo" 
            className="w-40"
          />
          <TR className="w-8 h-8" />
        </div>
      </motion.div>
      
      <motion.div
        className="flex gap-4"
        variants={loadingContainer}
        initial="start"
        animate="end"
      >
        {[1, 2, 3].map((index) => (
          <motion.span
            key={index}
            className="w-3 h-3 rounded-full bg-[#E9A159]"
            variants={loadingCircle}
            transition={loadingCircleTransition}
          />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 text-gray-500 text-sm"
      >
        Loading amazing places for you...
      </motion.p>
    </div>
  )
}

export default Loading 