import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, User, Briefcase, Code, GraduationCap, Mail, BookOpen, Hash } from 'lucide-react';

interface SpotlightProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (id: string) => void;
}

const Spotlight: React.FC<SpotlightProps> = ({ isOpen, onClose, onNavigate }) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    // Search Data
    const searchItems = [
        { id: 'about', title: 'About Me', type: 'Section', icon: <User size={18} />, keywords: ['bio', 'profile', 'whoami', 'fatih'] },
        { id: 'skills', title: 'Skills & Technologies', type: 'Section', icon: <Code size={18} />, keywords: ['react', 'typescript', 'python', 'aws', 'docker'] },
        { id: 'experience', title: 'Work Experience', type: 'Section', icon: <Briefcase size={18} />, keywords: ['job', 'internship', 'career', 'yapi kredi', 'sca', 'imm'] },
        { id: 'projects', title: 'Projects', type: 'Section', icon: <Hash size={18} />, keywords: ['portfolio', 'sportpulse', 'bind', 'code', 'github'] },
        { id: 'education', title: 'Education', type: 'Section', icon: <GraduationCap size={18} />, keywords: ['university', 'degree', 'yeditepe', 'school'] },
        { id: 'graduation-thesis', title: 'Graduation Thesis', type: 'Section', icon: <BookOpen size={18} />, keywords: ['ci/cd', 'kubernetes', 'jenkins', 'gitlab', 'devops'] },
        { id: 'contact', title: 'Contact', type: 'Section', icon: <Mail size={18} />, keywords: ['email', 'hire', 'message', 'social'] },
    ];

    // Filter items based on query
    const filteredItems = query.trim() === ''
        ? searchItems
        : searchItems.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()))
        );

    // Reset selection when query changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredItems.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredItems[selectedIndex]) {
                    handleSelect(filteredItems[selectedIndex].id);
                }
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredItems, selectedIndex]);

    const handleSelect = (id: string) => {
        onNavigate(id);
        onClose();
        setQuery('');
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-[20vh]"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="w-full max-w-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden mx-4"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Search Input */}
                    <div className="flex items-center px-4 py-4 border-b border-gray-200/50 dark:border-gray-700/50">
                        <Search className="w-6 h-6 text-gray-400 mr-3" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Spotlight Search"
                            className="flex-1 bg-transparent border-none outline-none text-2xl text-gray-800 dark:text-white placeholder-gray-400 font-light"
                        />
                        {query && (
                            <span className="text-xs text-gray-400 font-mono px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                                ESC to close
                            </span>
                        )}
                    </div>

                    {/* Results List */}
                    <div className="max-h-[60vh] overflow-y-auto">
                        {filteredItems.length > 0 ? (
                            <div className="py-2">
                                {filteredItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleSelect(item.id)}
                                        className={`px-4 py-3 flex items-center justify-between cursor-pointer transition-colors ${index === selectedIndex
                                                ? 'bg-indigo-500 text-white'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            }`}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${index === selectedIndex ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800'
                                                }`}>
                                                {item.icon}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-medium text-lg">{item.title}</span>
                                                {index === selectedIndex && (
                                                    <span className="text-xs opacity-80 font-mono">{item.type}</span>
                                                )}
                                            </div>
                                        </div>
                                        {index === selectedIndex && (
                                            <ArrowRight size={18} className="opacity-80" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-12 text-center text-gray-500 dark:text-gray-400">
                                <Command className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>No results found for "{query}"</p>
                            </div>
                        )}
                    </div>

                    <div className="px-4 py-2 bg-gray-50/50 dark:bg-black/20 border-t border-gray-200/50 dark:border-gray-700/50 flex justify-between items-center text-xs text-gray-400">
                        <span>Pro Tip: Use arrow keys to navigate</span>
                        <span>Refined Search</span>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Spotlight;
