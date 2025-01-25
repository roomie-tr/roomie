import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState } from 'react'

function MediaSlider({ media, currentIndex, onClose }) {
  const [activeIndex, setActiveIndex] = useState(currentIndex)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % media.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length)
  }

  const currentItem = media[activeIndex]
  const isVideo = currentItem.type === 'video'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      >
        <FiX className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          handlePrev()
        }}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors"
      >
        <FiChevronLeft className="w-8 h-8" />
      </button>

      <div 
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          {isVideo ? (
            <motion.video
              key={`video-${activeIndex}`}
              src={currentItem.url}
              className="max-w-full max-h-[90vh] object-contain"
              controls
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.img
              key={`image-${activeIndex}`}
              src={currentItem.url}
              alt={`Slide ${activeIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
          {activeIndex + 1} / {media.length}
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation()
          handleNext()
        }}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors"
      >
        <FiChevronRight className="w-8 h-8" />
      </button>
    </motion.div>
  )
}

export default MediaSlider 