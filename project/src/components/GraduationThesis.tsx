import React, { useState } from 'react';
import { BookOpen, FileText, ChevronDown, ChevronUp, Database, Server, Zap, GitBranch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GraduationThesisProps {
  id?: string;
}

const GraduationThesis: React.FC<GraduationThesisProps> = ({ id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id={id} className="py-24 section-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Document Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full mb-6 text-sm font-medium border border-indigo-100 dark:border-indigo-800 shadow-sm">
              <BookOpen size={16} />
              <span>Academic Thesis</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white leading-tight">
              Enhanced Deployment Speed in Cloud-Native Applications
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              A Comparative Analysis of Multiple CI/CD Tools with Kubernetes
            </p>
          </div>

          {/* Paper-like Card */}
          <div className="window-card bg-white dark:bg-dark-tertiary relative overflow-hidden transition-all duration-500 ease-in-out">
            <div className="window-header bg-gray-50 dark:bg-dark-secondary border-b border-gray-200 dark:border-gray-700">
              <div className="traffic-lights">
                <div className="traffic-light traffic-light-red"></div>
                <div className="traffic-light traffic-light-yellow"></div>
                <div className="traffic-light traffic-light-green"></div>
              </div>
              <div className="flex-1 text-center text-xs text-gray-500 font-medium">thesis_final_v2.pdf</div>
              <div className="w-12"></div>
            </div>

            <div className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                    <FileText className="text-indigo-500" />
                    Abstract
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                    This Master's thesis provides a data-driven comparative analysis of three leading CI/CD tools—<strong>GitHub Actions, Jenkins, and GitLab CI/CD</strong>—in a local Kubernetes environment. The research reveals a critical trade-off between raw deployment speed and setup complexity, finding that while Jenkins was over 2x faster than GitHub Actions in complex scenarios, its setup was an order of magnitude more difficult.
                  </p>
                </div>

                <div className="w-full md:w-1/3 bg-gray-50 dark:bg-dark-secondary p-6 rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-4">Tech Stack</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><Server size={14} /> Kubernetes</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><Database size={14} /> Docker</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><GitBranch size={14} /> Jenkins</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><Zap size={14} /> GitLab</div>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden border-t border-dashed border-gray-200 dark:border-gray-700 pt-8 mt-8"
                  >
                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Key Findings</h4>
                        <ul className="space-y-4">
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">1</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              <strong>Performance Gap:</strong> Jenkins outperformed GitHub Actions by 2.26x (105s vs 237s) in multi-service deployment scenarios.
                            </p>
                          </li>
                          <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">2</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              <strong>Complexity Trade-off:</strong> Jenkins offered speed but required significantly more configuration time compared to the developer-friendly GitHub Actions.
                            </p>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Methodology</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          Established a local end-to-end DevOps environment using Minikube. The core testbed involved deploying Google's Online Boutique (11 microservices) across three complexity scenarios using "cold builds" to measure raw orchestration performance.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expand/Collapse Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors bg-indigo-50 dark:bg-indigo-900/10 px-6 py-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
                >
                  {isExpanded ? (
                    <>
                      Collapse Details <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      Read Full Analysis <ChevronDown size={18} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GraduationThesis;