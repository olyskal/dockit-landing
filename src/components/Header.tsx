'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SmoothScrollLink from './SmoothScrollLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-dockit-dark-950/90 backdrop-blur-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-dockit-purple-600 to-dockit-purple-400 rounded-lg opacity-30 blur-md group-hover:opacity-60 transition duration-300"></div>
          <motion.div 
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="relative"
          >
            <Image 
              src="/images/dockit-logo.png" 
              alt="DockIt Logo" 
              width={140} 
              height={42} 
              className="h-10 w-auto drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <SmoothScrollLink href="#features" className="text-white hover:text-dockit-purple-400 transition-colors" duration={600} offset={80}>
            Features
          </SmoothScrollLink>
          <SmoothScrollLink href="#how-it-works" className="text-white hover:text-dockit-purple-400 transition-colors" duration={600} offset={80}>
            How It Works
          </SmoothScrollLink>
          <SmoothScrollLink href="#pricing" className="text-white hover:text-dockit-purple-400 transition-colors" duration={600} offset={80}>
            Pricing
          </SmoothScrollLink>
          <SmoothScrollLink href="#download" 
            className="bg-gradient-to-r from-dockit-purple-600 to-dockit-purple-800 text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-dockit-purple-500/20 transition-all" duration={600} offset={80}>
            Download
          </SmoothScrollLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-dockit-dark-900 border-t border-dockit-dark-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 md:px-8 py-4 flex flex-col gap-4">
            <SmoothScrollLink href="#features" className="text-white text-lg hover:text-dockit-purple-400 transition-colors py-2" duration={600} offset={80} onClick={() => setIsMenuOpen(false)}>
              Features
            </SmoothScrollLink>
            <SmoothScrollLink href="#how-it-works" className="text-white text-lg hover:text-dockit-purple-400 transition-colors py-2" duration={600} offset={80} onClick={() => setIsMenuOpen(false)}>
              How It Works
            </SmoothScrollLink>
            <SmoothScrollLink href="#pricing" className="text-white text-lg hover:text-dockit-purple-400 transition-colors py-2" duration={600} offset={80} onClick={() => setIsMenuOpen(false)}>
              Pricing
            </SmoothScrollLink>
            <SmoothScrollLink href="#download" className="bg-gradient-to-r from-dockit-purple-600 to-dockit-purple-800 text-white text-lg px-5 py-3 rounded-full text-center" duration={600} offset={80} onClick={() => setIsMenuOpen(false)}>
              Download
            </SmoothScrollLink>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
