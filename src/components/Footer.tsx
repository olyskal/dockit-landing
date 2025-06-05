'use client';

import Link from 'next/link';
import Image from 'next/image';
import SmoothScrollLink from './SmoothScrollLink';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dockit-dark-950 text-dockit-dark-300 py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="inline-block mb-4 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-dockit-purple-600 to-dockit-purple-400 rounded-lg opacity-30 blur-md group-hover:opacity-60 transition duration-300"></div>
              <Link href="/" className="relative block">
                <Image 
                  src="/images/dockit-logo.png" 
                  alt="DockIt Logo" 
                  width={140} 
                  height={42} 
                  className="h-10 w-auto drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
                />
              </Link>
            </div>
            <p className="mb-4 text-sm md:text-base">
              Organize your Mac Dock like never before with custom profiles for different workflow, manual profiles and automatic dock ordering!
            </p>
            <div className="flex space-x-4">
              <a href="https://discord.gg/BZa2EZFvVQ" className="text-dockit-dark-400 hover:text-dockit-purple-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <SmoothScrollLink href="#features" className="text-sm md:text-base hover:text-dockit-purple-400 transition-colors" duration={600} offset={80}>
                  Features
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink href="#how-it-works" className="text-sm md:text-base hover:text-dockit-purple-400 transition-colors" duration={600} offset={80}>
                  How It Works
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink href="#pricing" className="text-sm md:text-base hover:text-dockit-purple-400 transition-colors" duration={600} offset={80}>
                  Pricing
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink href="#download" className="text-sm md:text-base hover:text-dockit-purple-400 transition-colors" duration={600} offset={80}>
                  Download
                </SmoothScrollLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm md:text-base hover:text-dockit-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="https://discord.gg/BZa2EZFvVQ" className="text-sm md:text-base hover:text-dockit-purple-400 transition-colors flex items-center gap-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                  </svg>
                  Join our Community
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-dockit-dark-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-sm md:text-base">&copy; {currentYear} DockIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
