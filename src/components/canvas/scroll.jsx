// src/components/canvas/Scroll.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Scroll = () => {
  return (
    <div className="absolute bottom-[1px] w-full flex justify-center items-center">
      <a href="#about">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 1.5,
            // repeat : Infinity,
            // repeatType: 'loop',
          }}
          className="w-8 rounded-full h-14 border-violet-500 border-4  flex justify-center items-center cursor-pointer"
        >
          <motion.div
            className="w-4 h-4 bg-white rounded-full"
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </motion.div>
      </a>
    </div>
  );
};

export default Scroll;
