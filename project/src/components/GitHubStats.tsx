import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, GitCommit, Star, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';

interface GitHubStatsProps {
    id?: string;
}

interface GitHubRepo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
}

interface GitHubUser {
    public_repos: number;
    followers: number;
    following: number;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ id }) => {
    const username = 'fatihreha';
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Fetch user data
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                if (userRes.ok) {
                    const userData = await userRes.json();
                    setUser(userData);
                }

                // Fetch repos
                const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
                if (reposRes.ok) {
                    const reposData = await reposRes.json();
                    setRepos(reposData);
                }
            } catch (error) {
                console.error('Failed to fetch GitHub data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    const languageColors: Record<string, string> = {
        'TypeScript': 'bg-blue-500',
        'JavaScript': 'bg-yellow-400',
        'Python': 'bg-green-500',
        'Java': 'bg-red-500',
        'HTML': 'bg-orange-500',
        'CSS': 'bg-purple-500',
        'Kotlin': 'bg-purple-400',
    };

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

                <div className="max-w-5xl mx-auto">
                    {/* User Stats */}
                    {user && (
                        <motion.div
                            className="grid grid-cols-3 gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="window-card p-6 text-center bg-white dark:bg-dark-tertiary">
                                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{user.public_repos}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Repositories</div>
                            </div>
                            <div className="window-card p-6 text-center bg-white dark:bg-dark-tertiary">
                                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{user.followers}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Followers</div>
                            </div>
                            <div className="window-card p-6 text-center bg-white dark:bg-dark-tertiary">
                                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">{user.following}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Following</div>
                            </div>
                        </motion.div>
                    )}

                    {/* Recent Repos */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                            <GitCommit size={20} />
                            Recent Repositories
                        </h3>

                        {loading ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="window-card p-4 bg-white dark:bg-dark-tertiary animate-pulse">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {repos.map((repo) => (
                                    <a
                                        key={repo.name}
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="window-card p-4 bg-white dark:bg-dark-tertiary hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                                                {repo.name}
                                            </h4>
                                            <ExternalLink size={14} className="text-gray-400 flex-shrink-0" />
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3 min-h-[40px]">
                                            {repo.description || 'No description'}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-gray-500">
                                            {repo.language && (
                                                <span className="flex items-center gap-1">
                                                    <span className={`w-2 h-2 rounded-full ${languageColors[repo.language] || 'bg-gray-400'}`}></span>
                                                    {repo.language}
                                                </span>
                                            )}
                                            <span className="flex items-center gap-1">
                                                <Star size={12} />
                                                {repo.stargazers_count}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <GitFork size={12} />
                                                {repo.forks_count}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
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
