import React from 'react'
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="flex justify-around items-center py-4 text-lg border-b border-gray-300 sticky top-0 bg-[#fef9f6] z-50">
      <div className="flex justify-center items-center text-[#2e2e2e] font-semibold">
      <img className="h-5 w-5" src="/Images/icon.png" alt="icon" />Milton</div>
      <div className="flex justify-center items-center gap-10 text-gray-500 font-semibold">
        <span className="hover:underline hover:text-black cursor-pointer">Features</span>
        <span className="hover:underline hover:text-black cursor-pointer">Testimonial</span>
        <span className="hover:underline hover:text-black cursor-pointer">Pricing</span>
        <span className="hover:underline hover:text-black cursor-pointer">FAQs</span>
        <span className="hover:underline hover:text-black cursor-pointer">Blog</span>
      </div>
      <div className="flex gap-4 font-semibold">
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{layout:{duration:1.2}}}
          className="bg-[#f1f2f4] px-4 py-2 text-[#2e2e2e] rounded-lg"
        >Log in
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          transition={{layout:{duration:1.2}}}
          className="bg-[#2e2e2e] px-4 py-2 text-[#f1f2f4] rounded-lg"
          >Get Started
          </motion.button>
      </div>
    </div>
  )
}

export default Navbar
