import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import OpenStreetMap from './OpenStreetMap';
import { motion } from 'framer-motion';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 section-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
            <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time positions.
            If you have a project that needs some creative touch, let's connect.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="window-card bg-white dark:bg-dark-tertiary overflow-hidden">
            <div className="window-header bg-gray-50 dark:bg-dark-secondary border-b border-gray-200 dark:border-gray-700">
              <div className="traffic-lights">
                <div className="traffic-light traffic-light-red"></div>
                <div className="traffic-light traffic-light-yellow"></div>
                <div className="traffic-light traffic-light-green"></div>
              </div>
              <div className="text-center flex-1 text-xs text-gray-400">contact_info.vcf</div>
              <div className="w-12"></div>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-8 dark:text-white">Contact Details</h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Email</h4>
                      <a href="mailto:fatihrehadisci@proton.me" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 font-medium text-lg">
                        fatihrehadisci@proton.me
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Best way to reach me</p>
                    </div>
                  </div>

                  {/* Phone number removed as per request */}

                  <div className="pt-8 mt-8 border-t border-dashed border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Social Profiles</h4>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/fatihreha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-700 dark:text-gray-300"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/fatihrehadisci/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 rounded-full transition-colors text-blue-600 dark:text-blue-400"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-gray-50 dark:bg-dark-secondary relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <MapPin size={200} />
                </div>

                <h3 className="text-xl font-bold mb-8 dark:text-white relative z-10">Location</h3>

                <div className="bg-white dark:bg-dark-tertiary p-2 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6 relative z-10">
                  <div className="h-[200px] w-full rounded-lg overflow-hidden relative z-0">
                    <OpenStreetMap
                      center={[41.0233, 29.0244]}
                      zoom={12}
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 relative z-10">
                  <MapPin size={18} className="text-red-500" />
                  <span className="font-medium">Üsküdar/Istanbul, Turkey</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;