'use client';

import { ReactNode } from 'react';

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  duration?: number;
  offset?: number;
}

const SmoothScrollLink = ({ 
  href, 
  children, 
  className = '', 
  duration = 600,
  offset = 0
}: SmoothScrollLinkProps) => {
  
  // Only handle anchor links (those starting with #)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = href.replace(/.*\#/, '');
    
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        
        let startTime: number | null = null;
        
        // Easing function for smooth animation - improved for faster start and smoother finish
        const easeOutQuint = (t: number): number => {
          return 1 - Math.pow(1 - t, 5);
        };
        
        const animateScroll = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          const easedProgress = easeOutQuint(progress);
          
          window.scrollTo(0, startPosition + distance * easedProgress);
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
          }
        };
        
        requestAnimationFrame(animateScroll);
      }
    }
  };
  
  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
