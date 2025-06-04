'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear(); // This will still correctly get the current year

  return (
    <div className="bg-gradient-to-b from-dockit-dark-950 to-dockit-dark-900 min-h-screen text-white">

      <section className="pt-32 pb-20 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <Link href="/" className="text-dockit-purple-400 hover:text-dockit-purple-300 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back
              </Link>
              <div className="h-6 w-px bg-dockit-dark-700 mx-4"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-dockit-purple-500 to-dockit-purple-700 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h1 className="text-xl md:text-2xl font-bold">Privacy Policy</h1>
              </div>
            </div>

            <div className="bg-dockit-dark-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-dockit-dark-700">
              <p className="text-dockit-dark-300 mb-6 md:mb-8 text-sm md:text-base">Last updated: June 4, 2025</p> {/* Adjusted date format for clarity in English */}

              <div className="space-y-6 md:space-y-8">
                <section>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">1. Introduction</h2>
                  <p className="text-dockit-dark-200 text-sm md:text-base">
                    Welcome to DockIt, an application developed and maintained by the DockIt team ("we", "us", or "our").
                    This Privacy Policy has been created to help you understand how we collect, use, and protect
                    your personal information when you use our DockIt application ("the Application").
                  </p>
                  <p className="text-dockit-dark-200 text-sm md:text-base mt-3">
                    We are committed to protecting your privacy and ensuring the security of your personal information.
                    By using DockIt, you agree to the terms described in this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">2. Information We Collect</h2>
                  <p className="text-dockit-dark-200 text-sm md:text-base">
                    DockIt was designed with your privacy in mind, and we collect only the minimum amount of information
                    necessary to provide our services. Specifically, we collect:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 mt-2 md:mt-3 text-dockit-dark-200 text-sm md:text-base space-y-1 md:space-y-2">
                    <li>
                      <span className="text-dockit-purple-400 font-medium">Email address:</span> Used for account
                      identification and license management.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">3. How We Collect Information</h2>
                  <p className="text-dockit-dark-200 text-sm md:text-base">
                    We collect information directly from you when:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 mt-2 md:mt-3 text-dockit-dark-200 text-sm md:text-base space-y-1 md:space-y-2">
                    <li>You purchase a license for DockIt</li>
                    <li>You subscribe to DockIt</li>
                    <li>You register your license or subscription in the Application</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">4. How We Use Your Information</h2>
                  <p className="text-dockit-dark-200 text-sm md:text-base">
                    The information we collect is used exclusively to:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 mt-2 md:mt-3 text-dockit-dark-200 text-sm md:text-base space-y-1 md:space-y-2">
                    <li>Manage and verify your DockIt license or subscription</li>
                    <li>Provide customer support related to your purchase or subscription</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">5. Data Storage and Security</h2>
                  <p className="text-dockit-dark-200 text-sm md:text-base">
                    We store your email address and license information in our secure database.
                    Access to this database is strictly limited to authorized personnel only.
                    We implement industry-standard security measures to protect your data against unauthorized access,
                    alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">6. Third-Party Services</h2>
                  <p className="text-dockit-dark-200 text-sm md:text-base">
                    We use the following third-party services in connection with DockIt:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 mt-2 md:mt-3 text-dockit-dark-200 text-sm md:text-base space-y-1 md:space-y-2">
                    <li>
                      <span className="text-dockit-purple-400 font-medium">Stripe:</span> Processes payments and subscriptions
                    </li>
                  </ul>
                  <p className="text-dockit-dark-200 text-sm md:text-base mt-3">
                    These services are used exclusively for license management and payment processing purposes,
                    and they do not have access to any other data from your use of DockIt.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">7. No Telemetry or Additional Data Collection</h2>
                  <p className="text-dockit-dark-200 text-sm md:text-base">
                    We want to emphasize that DockIt does not include any telemetry features or additional data collection mechanisms.
                    We do not track your use of the Application, collect analytics, or gather any information beyond what is necessary
                    for license verification and payment processing.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">8. Your Rights</h2>
                  <p className="text-dockit-dark-200 text-sm md:text-base">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 mt-2 md:mt-3 text-dockit-dark-200 text-sm md:text-base space-y-1 md:space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of any inaccurate information</li>
                    <li>Request the deletion of your personal information from our systems</li>
                    <li>Object to our processing of your personal information</li>
                  </ul>
                  <p className="text-dockit-dark-200 text-sm md:text-base mt-3">
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">9. Changes to this Privacy Policy</h2>
                  <p className="text-dockit-dark-200 text-sm md:text-base">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for
                    other operational, legal, or regulatory reasons. We will notify you of any material changes by
                    posting the new Privacy Policy on this page and updating the "Last updated" date at the top
                    of this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">10. Contact Us</h2>
                  <p className="text-dockit-dark-200 text-sm md:text-base">
                    If you have any questions, concerns, or requests related to this Privacy Policy or our
                    data practices, please contact us at:
                  </p>
                  <p className="mt-3">
                    <a href="mailto:contato@dockit.app" className="text-dockit-purple-400 hover:text-dockit-purple-300 transition-colors">
                      olyskal.dockit@gmail.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}