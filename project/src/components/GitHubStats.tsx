import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface GitHubStatsProps {
    id?: string;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ id }) => {
    const username = 'fatihreha';

    return (
        <section id={id} className="py-16 section-cream">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-xl">
                            <Github className="w-6 h-6 text-gray-800 dark:text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">GitHub Activity</h2>
                    </div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Contribution Graph */}
                    <motion.div
                        className="window-card p-0 overflow-hidden mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="window-header bg-gray-50 dark:bg-dark-secondary">
                            <div className="traffic-lights">
                                <div className="traffic-light traffic-light-red"></div>
                                <div className="traffic-light traffic-light-yellow"></div>
                                <div className="traffic-light traffic-light-green"></div>
                            </div>
                            <span className="text-xs text-gray-400 flex-1 text-center">contributions.svg</span>
                            <div className="w-12"></div>
                        </div>
                        <div className="p-6 bg-white dark:bg-dark-tertiary flex justify-center overflow-x-auto">
                            <img
                                src={`https://ghchart.rshah.org/${username}`}
                                alt="GitHub Contribution Graph"
                                className="max-w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* View Profile Button */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a
                            href={`https://github.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                        >
                            <Github size={20} />
                            View Full Profile
                            <ExternalLink size={16} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
