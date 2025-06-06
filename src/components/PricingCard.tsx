'use client';

import { motion } from 'framer-motion';
import { trackDownload } from './Analytics';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  delay?: number;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
  delay = 0
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`rounded-2xl p-1 ${
        isPopular 
          ? 'bg-gradient-to-r from-dockit-purple-500 to-dockit-purple-700' 
          : 'bg-dockit-dark-800'
      }`}
    >
      <div className="bg-dockit-dark-900 rounded-xl p-6 h-full flex flex-col">
        {isPopular && (
          <span className="bg-dockit-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
            Most Popular
          </span>
        )}
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="mt-2 mb-4">
          <span className="text-3xl font-bold text-white">{price}</span>
          {String(price) !== 'Free' && <span className="text-dockit-dark-400 ml-1">one time</span>}
        </div>
        <p className="text-dockit-dark-300 mb-6">{description}</p>
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-dockit-purple-500 mr-2 flex-shrink-0 mt-0.5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="text-dockit-dark-200">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={ctaLink}
          onClick={() => trackDownload(title.toLowerCase())}
          className={`w-full py-3 rounded-lg text-center font-medium transition-all ${
            isPopular
              ? 'bg-gradient-to-r from-dockit-purple-500 to-dockit-purple-700 text-white hover:shadow-lg hover:shadow-dockit-purple-500/20'
              : 'bg-dockit-dark-700 text-white hover:bg-dockit-dark-600'
          }`}
        >
          {ctaText}
        </a>
      </div>
    </motion.div>
  );
};

export default PricingCard;
