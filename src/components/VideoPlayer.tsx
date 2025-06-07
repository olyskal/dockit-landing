'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Extend HTMLVideoElement to include webkit methods for iOS compatibility
declare global {
  interface HTMLVideoElement {
    webkitEnterFullscreen?: () => void;
    webkitExitFullscreen?: () => void;
    webkitRequestFullscreen?: () => void;
    mozRequestFullScreen?: () => void;
    msRequestFullscreen?: () => void;
  }
  
  interface Document {
    webkitFullscreenElement?: Element;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitExitFullscreen?: () => void;
    mozCancelFullScreen?: () => void;
    msExitFullscreen?: () => void;
  }
}

interface VideoPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  showControls?: boolean;
}

const VideoPlayer = ({
  src,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  showControls = true
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControlsOverlay, setShowControlsOverlay] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showSpeedOptions, setShowSpeedOptions] = useState(false);
  const speedOptions = [0.5, 1, 1.5, 2];

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      setDuration(videoElement.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(videoElement.currentTime);
    };

    const handleVolumeChange = () => {
      setVolume(videoElement.volume);
      setIsMuted(videoElement.muted);
    };

    const handleRateChange = () => {
      setPlaybackRate(videoElement.playbackRate);
    };

    const handleFullScreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
      setIsFullScreen(isCurrentlyFullscreen);
    };

    videoElement.addEventListener('canplay', handleCanPlay);
    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    videoElement.addEventListener('volumechange', handleVolumeChange);
    videoElement.addEventListener('ratechange', handleRateChange);
    
    // Listen to all vendor-prefixed fullscreen change events
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('msfullscreenchange', handleFullScreenChange);
    
    return () => {
      videoElement.removeEventListener('canplay', handleCanPlay);
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      videoElement.removeEventListener('volumechange', handleVolumeChange);
      videoElement.removeEventListener('ratechange', handleRateChange);
      
      // Remove all vendor-prefixed fullscreen change events
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('msfullscreenchange', handleFullScreenChange);
    };
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    
    if (newVolume === 0) {
      videoRef.current.muted = true;
      setIsMuted(true);
    } else if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    
    const newTime = parseFloat(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handlePlaybackRateChange = (rate: number) => {
    if (!videoRef.current) return;
    
    videoRef.current.playbackRate = rate;
    setPlaybackRate(rate);
    setShowSpeedOptions(false);
  };
  
  const cyclePlaybackRate = () => {
    if (!videoRef.current) return;
    
    const currentIndex = speedOptions.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % speedOptions.length;
    const nextRate = speedOptions[nextIndex];
    
    videoRef.current.playbackRate = nextRate;
    setPlaybackRate(nextRate);
  };

  const toggleFullScreen = () => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    
    // Check if we're already in fullscreen
    const isCurrentlyFullscreen = !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
    
    if (!isCurrentlyFullscreen) {
      // Enter fullscreen
      
      // For iOS Safari and mobile devices, use native video fullscreen
      if (video.webkitEnterFullscreen && /iPhone|iPad|iPod|Mobile Safari/.test(navigator.userAgent)) {
        try {
          video.webkitEnterFullscreen();
          return;
        } catch {
          console.log('webkitEnterFullscreen failed, trying standard methods');
        }
      }
      
      // Try standard and vendor-prefixed fullscreen methods
      if (video.requestFullscreen) {
        video.requestFullscreen().catch(console.error);
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else {
        // Fallback: Try to make the video container fullscreen
        const container = video.parentElement;
        if (container && container.requestFullscreen) {
          container.requestFullscreen().catch(console.error);
        }
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(console.error);
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Neon glow effect that intensifies on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-dockit-purple-600 via-dockit-purple-400 to-dockit-purple-600 rounded-xl opacity-50 group-hover:opacity-70 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-dockit-purple-700 to-dockit-purple-500 rounded-xl opacity-75 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-300 -z-5"></div>
      
      {/* Animated border that pulses on hover */}
      <div className="absolute inset-0 rounded-xl z-0 bg-dockit-dark-900 p-[1px] overflow-hidden">
        <div className="absolute inset-0 rounded-xl z-0 overflow-hidden">
          <div className="absolute -inset-[10px] bg-gradient-conic from-dockit-purple-600 via-transparent to-dockit-purple-600 opacity-60 group-hover:opacity-100 animate-spin-slow group-hover:animate-spin-medium transition-opacity duration-300"></div>
        </div>
      </div>
      
      {/* Inner background with glass effect */}
      <div className="absolute inset-[1px] bg-gradient-to-br from-dockit-dark-900/90 to-dockit-dark-950/90 backdrop-blur-sm rounded-lg z-10"></div>
      
      {/* Video container */}
      <motion.div 
        className="relative rounded-lg overflow-hidden z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setShowControlsOverlay(true)}
        onMouseLeave={() => setShowControlsOverlay(false)}
        onTouchStart={() => setShowControlsOverlay(true)}
        onTouchEnd={() => {
          // Keep controls visible for a bit longer on mobile
          setTimeout(() => setShowControlsOverlay(false), 3000);
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-lg"
          autoPlay={autoPlay}
          loop={loop}
          muted={isMuted}
          playsInline
          onClick={() => {
            togglePlayPause();
            // Unmute video on first click if it was initially muted
            if (isMuted) {
              toggleMute();
            }
          }}
        >
          <source src={src} type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        
        {/* Play/Pause center overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 cursor-pointer"
          onClick={togglePlayPause}
        >
          {!isPlaying && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-white bg-opacity-80 rounded-full p-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dockit-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
          )}
        </div>

        {/* Video Controls Overlay */}
        <AnimatePresence>
          {showControls && showControlsOverlay && (
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-3 pt-8 z-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white text-xs">{formatTime(currentTime)}</span>
                <input 
                  type="range" 
                  min="0" 
                  max={duration || 100} 
                  value={currentTime} 
                  onChange={handleSeek} 
                  className="w-full h-2 md:h-1 bg-dockit-dark-600 rounded-full appearance-none cursor-pointer touch-manipulation [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 md:[&::-webkit-slider-thumb]:h-3 md:[&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-dockit-purple-400"
                />
                <span className="text-white text-xs">{formatTime(duration)}</span>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Play/Pause button */}
                  <button 
                    onClick={togglePlayPause}
                    className="text-white hover:text-dockit-purple-400 transition-colors p-2 md:p-1 -m-2 md:-m-1 touch-manipulation"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </button>

                  {/* Volume control */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={toggleMute}
                      className="text-white hover:text-dockit-purple-400 transition-colors p-2 md:p-1 -m-2 md:-m-1 touch-manipulation"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </button>
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.01" 
                      value={isMuted ? 0 : volume} 
                      onChange={handleVolumeChange} 
                      className="w-16 h-2 md:h-1 bg-dockit-dark-600 rounded-full appearance-none cursor-pointer touch-manipulation [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 md:[&::-webkit-slider-thumb]:h-2 md:[&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-dockit-purple-400"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Playback speed */}
                  <div className="relative">
                    <button 
                      className="text-white hover:text-dockit-purple-400 transition-colors text-xs font-medium"
                      onClick={() => showSpeedOptions ? cyclePlaybackRate() : setShowSpeedOptions(true)}
                      onBlur={(e) => {
                        // Prevent closing if clicking on speed options
                        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                          setTimeout(() => setShowSpeedOptions(false), 100);
                        }
                      }}
                    >
                      {playbackRate}x
                    </button>
                    {showSpeedOptions && (
                      <div className="absolute bottom-full right-0 mb-2 bg-dockit-dark-900 border border-dockit-dark-700 rounded-md p-1 shadow-lg z-50">
                        {speedOptions.map(rate => (
                          <button 
                            key={rate} 
                            onClick={() => handlePlaybackRateChange(rate)}
                            className={`block w-full text-left px-3 py-1 text-xs rounded ${playbackRate === rate ? 'bg-dockit-purple-600 text-white' : 'text-white hover:bg-dockit-dark-800'}`}
                          >
                            {rate}x
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Fullscreen toggle */}
                  <button 
                    onClick={toggleFullScreen}
                    className="text-white hover:text-dockit-purple-400 transition-colors p-2 md:p-1 -m-2 md:-m-1 touch-manipulation"
                    aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
                  >
                    {isFullScreen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-dockit-purple-400 to-transparent rounded-full z-30 group-hover:w-48 transition-all duration-500"></div>
      <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-dockit-purple-400 to-transparent rounded-full z-30 group-hover:w-48 transition-all duration-500"></div>
      
      {/* Corner accents that appear on hover */}
      <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
        <div className="absolute top-0 right-0 w-8 h-1 bg-dockit-purple-400 rounded-full transform origin-right"></div>
        <div className="absolute top-0 right-0 w-1 h-8 bg-dockit-purple-400 rounded-full transform origin-top"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
        <div className="absolute bottom-0 left-0 w-8 h-1 bg-dockit-purple-400 rounded-full transform origin-left"></div>
        <div className="absolute bottom-0 left-0 w-1 h-8 bg-dockit-purple-400 rounded-full transform origin-bottom"></div>
      </div>
    </div>
  );
};

export default VideoPlayer;
