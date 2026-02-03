import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { User, Code, Briefcase, GraduationCap, Mail, BookOpen, Github } from 'lucide-react';

interface DockProps {
    onNavigate: (id: string) => void;
}

const Dock: React.FC<DockProps> = ({ onNavigate }) => {
    const mouseX = useMotionValue(Infinity);

    const dockItems = [
        { id: 'about', label: 'About', icon: <User size={24} />, color: 'bg-blue-500' },
        { id: 'skills', label: 'Skills', icon: <Code size={24} />, color: 'bg-indigo-500' },
        { id: 'experience', label: 'Exp', icon: <Briefcase size={24} />, color: 'bg-orange-500' },
        { id: 'projects', label: 'Projects', icon: <Code size={24} />, color: 'bg-yellow-500' },
        { id: 'github', label: 'GitHub', icon: <Github size={24} />, color: 'bg-gray-700' },
        { id: 'education', label: 'Edu', icon: <GraduationCap size={24} />, color: 'bg-red-500' },
        { id: 'graduation-thesis', label: 'Thesis', icon: <BookOpen size={24} />, color: 'bg-emerald-500' },
        { id: 'contact', label: 'Contact', icon: <Mail size={24} />, color: 'bg-green-500' },
    ];

    return (
        <div
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
        >
            <div className="flex items-end gap-2 px-4 py-3 bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl">
                {dockItems.map((item) => (
                    <DockIcon
                        key={item.id}
                        mouseX={mouseX}
                        item={item}
                        onClick={() => onNavigate(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

interface DockIconProps {
    mouseX: MotionValue;
    item: { id: string; label: string; icon: React.ReactNode; color: string };
    onClick: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({ mouseX, item, onClick }) => {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [36, 64, 36]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width, height: width }}
            className="aspect-square rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            onClick={onClick}
            whileHover={{ y: -10 }}
        >
            <div className={`absolute inset-0 rounded-xl opacity-20 ${item.color}`}></div>
            <div className="text-gray-700 dark:text-gray-200 z-10 scale-75 md:scale-100">
                {item.icon}
            </div>

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.label}
            </div>

            {/* Active Dot */}
            <div className="absolute -bottom-2 w-1 h-1 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100"></div>
        </motion.div>
    );
};

export default Dock;
