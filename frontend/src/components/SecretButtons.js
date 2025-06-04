import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laugh, Zap, Eye, EyeOff } from 'lucide-react';

const SecretButtons = ({ onShowJokes, onShowCrazyWebsite }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      {/* Toggle Button - Always visible but subtle */}
      <motion.div
        className="fixed bottom-4 right-4 z-40"
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-gradient-to-r from-purple-600/80 to-indigo-600/80 backdrop-blur-sm text-white p-3 rounded-full shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: isHovering 
              ? '0 0 30px rgba(139, 92, 246, 0.6)' 
              : '0 0 15px rgba(139, 92, 246, 0.3)'
          }}
        >
          {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovering && !isVisible && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap border border-purple-500/30"
            >
              🎭 Secret Features
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/80 rotate-45 border-l border-b border-purple-500/30"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Secret Buttons Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 100, y: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0, x: 100, y: 100 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
            className="fixed bottom-20 right-4 z-40 flex flex-col gap-3"
          >
            {/* Jokes Button */}
            <motion.button
              onClick={onShowJokes}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 25px rgba(236, 72, 153, 0.6)',
                rotate: [0, -2, 2, 0]
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -2, 0],
              }}
              transition={{ 
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Laugh size={18} />
              Dev Jokes
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">😂</span>
            </motion.button>

            {/* Crazy Website Button */}
            <motion.button
              onClick={onShowCrazyWebsite}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 25px rgba(6, 182, 212, 0.6)',
                rotate: [0, 5, -5, 0]
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -3, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Zap size={18} />
              Crazy Mode
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">🚀</span>
            </motion.button>

            {/* Info Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg text-center border border-white/10"
            >
              <p className="mb-1">🎮 <strong>Pro Tip:</strong></p>
              <p>Ctrl+Shift+J or Ctrl+Shift+K</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SecretButtons;