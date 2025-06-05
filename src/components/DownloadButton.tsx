'use client';

import { motion } from 'framer-motion';
import { trackDownload } from './Analytics';

interface DownloadButtonProps {
  className?: string;
  version?: string;
  downloadUrl: string;
  productType?: string;
}

const DownloadButton = ({ 
  className = '', 
  downloadUrl,
  productType = 'standard'
}: DownloadButtonProps) => {
  return (
    <motion.a
      href={downloadUrl}
      onClick={() => trackDownload(productType)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-gradient-to-r from-dockit-purple-600 to-dockit-purple-800 text-white px-8 py-3 rounded-full text-center font-medium hover:shadow-lg hover:shadow-dockit-purple-500/20 transition-all flex items-center justify-center gap-2 ${className}`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
          clipRule="evenodd" 
        />
      </svg>
      Download for Mac
    </motion.a>
  );
};

export default DownloadButton;
