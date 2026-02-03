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
                    <p className="text-gray-600 dark:text-gray-400">
                        Check out my open source contributions and projects
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* GitHub Stats Cards */}
                    <motion.div
                        className="grid md:grid-cols-2 gap-6 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Stats Card */}
                        <div className="window-card p-0 overflow-hidden">
                            <div className="window-header bg-gray-50 dark:bg-dark-secondary">
                                <div className="traffic-lights">
                                    <div className="traffic-light traffic-light-red"></div>
                                    <div className="traffic-light traffic-light-yellow"></div>
                                    <div className="traffic-light traffic-light-green"></div>
                                </div>
                                <span className="text-xs text-gray-400 flex-1 text-center">github_stats.md</span>
                                <div className="w-12"></div>
                            </div>
                            <div className="p-4 bg-white dark:bg-dark-tertiary flex justify-center">
                                <img
                                    src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true&bg_color=00000000&title_color=6366f1&icon_color=8b5cf6&text_color=64748b`}
                                    alt="GitHub Stats"
                                    className="max-w-full h-auto dark:hidden"
                                    loading="lazy"
                                />
                                <img
                                    src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=818cf8&icon_color=a78bfa&text_color=94a3b8`}
                                    alt="GitHub Stats"
                                    className="max-w-full h-auto hidden dark:block"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Top Languages Card */}
                        <div className="window-card p-0 overflow-hidden">
                            <div className="window-header bg-gray-50 dark:bg-dark-secondary">
                                <div className="traffic-lights">
                                    <div className="traffic-light traffic-light-red"></div>
                                    <div className="traffic-light traffic-light-yellow"></div>
                                    <div className="traffic-light traffic-light-green"></div>
                                </div>
                                <span className="text-xs text-gray-400 flex-1 text-center">languages.json</span>
                                <div className="w-12"></div>
                            </div>
                            <div className="p-4 bg-white dark:bg-dark-tertiary flex justify-center">
                                <img
                                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=00000000&title_color=6366f1&text_color=64748b`}
                                    alt="Top Languages"
                                    className="max-w-full h-auto dark:hidden"
                                    loading="lazy"
                                />
                                <img
                                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=00000000&title_color=818cf8&text_color=94a3b8`}
                                    alt="Top Languages"
                                    className="max-w-full h-auto hidden dark:block"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Contribution Graph */}
                    <motion.div
                        className="window-card p-0 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="window-header bg-gray-50 dark:bg-dark-secondary">
                            <div className="traffic-lights">
                                <div className="traffic-light traffic-light-red"></div>
                                <div className="traffic-light traffic-light-yellow"></div>
                                <div className="traffic-light traffic-light-green"></div>
                            </div>
                            <span className="text-xs text-gray-400 flex-1 text-center">contribution_graph.svg</span>
                            <div className="w-12"></div>
                        </div>
                        <div className="p-4 bg-white dark:bg-dark-tertiary flex justify-center overflow-x-auto">
                            <img
                                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=minimal&hide_border=true&bg_color=00000000&color=6366f1&line=8b5cf6&point=ec4899`}
                                alt="Contribution Graph"
                                className="max-w-full h-auto dark:hidden"
                                loading="lazy"
                            />
                            <img
                                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&bg_color=00000000`}
                                alt="Contribution Graph"
                                className="max-w-full h-auto hidden dark:block"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* View Profile Button */}
                    <motion.div
                        className="text-center mt-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
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
