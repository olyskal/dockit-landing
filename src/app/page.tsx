'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import DownloadButton from '@/components/DownloadButton';
import VideoPlayer from '@/components/VideoPlayer';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-dockit-dark-950 to-dockit-dark-900 min-h-screen text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Organize Your <span className="bg-gradient-to-r from-dockit-purple-400 to-dockit-purple-600 bg-clip-text text-transparent">Mac Dock</span> Like Never Before
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-dockit-dark-300 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Create custom dock profiles for different workflows and switch between them seamlessly. Boost your productivity with DockIt.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <DownloadButton 
                  downloadUrl="/downloads/dockit-latest.zip"
                  version="2.0.2"
                  productType="hero_section"
                />
                <a 
                  href="#features" 
                  className="bg-dockit-dark-800 text-white px-8 py-3 rounded-full text-center font-medium hover:bg-dockit-dark-700 transition-colors"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-full h-full p-4">
                  <VideoPlayer 
                    src="/movies/DockIt01.mov" 
                    className="w-full h-full" 
                    autoPlay={true} 
                    loop={true} 
                    muted={true} 
                  />
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 px-6 md:px-8 lg:px-12 bg-dockit-dark-950/50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Powerful Features</h2>
            <p className="text-lg md:text-xl text-dockit-dark-300 max-w-2xl mx-auto">
              DockIt comes packed with intelligent features to optimize your Mac workflow experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>}
              title="Multiple Dock Profiles"
              description="Create and save different dock layouts for work, gaming, design, and more."
              delay={0}
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>}
              title="One-Click Switching"
              description="Instantly switch between your custom dock profiles with a single click."
              delay={0.2}
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>}
              title="Customizable Settings"
              description="Fine-tune your dock with custom settings for each profile."
              delay={0.4}
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>}
              title="Minimize Distractions"
              description="Keep your focus sharp by showing only the apps you need for your current task or workflow."
              delay={0.6}
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>}
              title="App Discovery"
              description="Automatically detects apps on your Mac, including those on external drives. No manual configuration needed."
              delay={0}
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>}
              title="Secure & Private"
              description="Your settings and preferences stay on your Mac. No data collection or tracking."
              delay={0.4}
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>}
              title="Smart Auto-Ordering"
              description="Proprietary algorithm that automatically organizes your Dock icons based on usage time and app focus frequency."
              delay={0.6}
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 11-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>}
              title="Customizable Interface"
              description="Choose between menu bar mode or standard app with dock icon. Match your preferred workflow."
              delay={0.8}
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>}
              title="Context-Aware Assistant"
              description="Smart Assistant detects your most used apps and suggests profile switching when you close them, optimizing your workflow."
              delay={1}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-20 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">How DockIt Works</h2>
            <p className="text-lg md:text-xl text-dockit-dark-300 max-w-2xl mx-auto">
              Getting started with DockIt is simple and straightforward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-dockit-purple-500 to-dockit-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Create Profiles</h3>
              <p className="text-dockit-dark-300">Create dock profiles for different needs - work, gaming, design, etc.</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-dockit-purple-500 to-dockit-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Add Applications</h3>
              <p className="text-dockit-dark-300">Select which apps you want in each profile from your Mac or external drives.</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-dockit-purple-500 to-dockit-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Switch Anytime</h3>
              <p className="text-dockit-dark-300">Instantly switch between profiles with a single click.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-20 px-6 md:px-8 lg:px-12 bg-dockit-dark-950/50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Choose Your Plan</h2>
            <p className="text-lg md:text-xl text-dockit-dark-300 max-w-2xl mx-auto">
              Pick the perfect plan that works for your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Free"
              price="Free"
              description="For curious people 👀"
              features={[
                "Test for 7 days",
                "Unlimited dock profiles until you bug it :D",
                "Standard support"
              ]}
              ctaText="Download Free"
              ctaLink="/downloads/dockit-latest.zip"
              delay={0}
            />
            <PricingCard
              title="Unlimited"
              price="$9.99"
              description="Time to DockIt! 🚀"
              features={[
                "Unlimited dock profiles",
                "Advanced app detection on all volumes",
                "Priority support",
                "Future updates included"
              ]}
              isPopular={true}
              ctaText="Download App"
              ctaLink="/downloads/dockit-latest.zip"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Mac Experience?</h2>
            <p className="text-xl text-dockit-dark-300 mb-8">
              Download DockIt today and take control of your dock with customized profiles for every need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <DownloadButton 
                downloadUrl="/downloads/dockit-latest.zip"
                version="2.0.2"
                className="sm:w-64"
                productType="download_section"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
